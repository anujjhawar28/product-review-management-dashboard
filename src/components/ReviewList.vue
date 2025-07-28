<template>
  <Card class="mb-4 bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-surface-0  shadow-2xl border border-surface-300 rounded-lg">
    <template #content>
      <!-- Toolbar with Count, Bulk Actions, Add Button -->
      <div
        class="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center mb-4"
      >
        <!-- Left: Count + Bulk Buttons -->
        <div class="flex flex-col sm:flex-row sm:items-center gap-2">
          <span class="text-lg font-semibold">
            {{ reviews.length }} Reviews Found
          </span>
        </div>

        <!-- Right: Add Review Button -->
        <div class="flex gap-2">
          <template v-if="store.selectedReviews.length > 0">
            <Button
              label="Approve Selected"
              icon="pi pi-check"
              class="p-button-sm p-button-success"
              @click="$emit('bulk-action', 'approve')"
            />
            <Button
              label="Flag Selected"
              icon="pi pi-flag"
              class="p-button-sm p-button-warning"
              @click="$emit('bulk-action', 'flag')"
            />
          </template>

          <Button
            label="Add New Review"
            icon="pi pi-plus"
            class="p-button-primary p-button-sm w-full sm:w-auto"
            @click="$emit('add-review')"
          />
        </div>
      </div>

      <!-- Reviews Table -->
      <DataTable
        :value="reviews"
        v-model:selection="store.selectedReviews"
        dataKey="id"
        responsiveLayout="scroll"
        selectionMode="multiple"
        paginator
        resizableColumns
        columnResizeMode="fit"
        :rows="10"
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
    </template>
  </Card>
</template>

<script lang="ts" setup>
import { useReviewStore } from "../stores/reviewStore";

defineProps<{
  reviews: any[];
}>();

const emit = defineEmits(["confirm-delete", "bulk-action", "add-review"]);

const store = useReviewStore();

const statusClass = (status: string) => {
  return {
    "text-green-600 font-semibold": status === "Approved",
    "text-yellow-600 font-semibold": status === "Pending",
    "text-red-600 font-semibold": status === "Flagged",
  };
};
</script>
