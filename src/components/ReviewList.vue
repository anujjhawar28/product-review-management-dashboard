<template>
  <div>
    <DataTable
      :value="reviews"
      v-model:selection="store.selectedReviews"
      dataKey="id"
      responsiveLayout="scroll"
      selectionMode="multiple"
      paginator
      :rows="5"
      :totalRecords="reviews.length"
      :rowsPerPageOptions="[5, 10, 20]"
      class="p-datatable-sm"
    >
      <Column selectionMode="multiple" headerStyle="width: 3rem" />

      <Column field="name" header="Reviewer" sortable />
      <Column field="email" header="Email" />

      <Column header="Rating" sortable>
        <template #body="{ data }">
          <Rating :modelValue="data.rating" readonly :cancel="false" />
        </template>
      </Column>

      <Column field="date" header="Date" sortable />
      <Column field="status" header="Status" sortable>
        <template #body="{ data }">
          <span :class="statusClass(data.status)">
            {{ data.status }}
          </span>
        </template>
      </Column>

      <Column field="comment" header="Comment" />

      <Column header="Actions">
        <template #body="{ data }">
          <Button
            icon="pi pi-check"
            class="p-button-success p-button-sm mr-2"
            @click="store.updateReviewStatus(data.id, 'Approved')"
            v-tooltip="'Approve'"
          />
          <Button
            icon="pi pi-flag"
            class="p-button-warning p-button-sm mr-2"
            @click="store.updateReviewStatus(data.id, 'Flagged')"
            v-tooltip="'Flag'"
          />
          <Button
            icon="pi pi-trash"
            class="p-button-danger p-button-sm"
            @click="$emit('confirm-delete', data.id)"
            v-tooltip="'Delete'"
          />
        </template>
      </Column>
    </DataTable>

    <div class="flex justify-end mt-3" v-if="store.selectedReviews.length > 0">
      <Button
        label="Approve Selected"
        icon="pi pi-check"
        class="p-button-sm p-button-success mr-2"
        @click="$emit('bulk-action', 'approve')"
      />
      <Button
        label="Flag Selected"
        icon="pi pi-flag"
        class="p-button-sm p-button-warning"
        @click="$emit('bulk-action', 'flag')"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
import { useReviewStore } from '../stores/reviewStore'

defineProps<{
  reviews: any[]
}>()

const emit = defineEmits(['confirm-delete', 'bulk-action'])

const store = useReviewStore()

const statusClass = (status: string) => {
  return {
    'text-green-600 font-semibold': status === 'Approved',
    'text-yellow-600 font-semibold': status === 'Pending',
    'text-red-600 font-semibold': status === 'Flagged',
  }
}
</script>