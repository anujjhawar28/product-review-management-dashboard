<template>
  <Card
    class="mb-4 max-w-wrapper-md mx-auto bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-surface-0  shadow-2xl border border-surface-300 rounded-lg"
  >
    <template #content>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-3 items-center">
        <!-- Status Filter -->
        <div>
          <label for="status" class="block mb-1 text-sm font-medium">Status</label>
          <Select
            id="status"
            v-model="filters.status"
            :options="statusOptions"
            optionLabel="label"
            optionValue="value"
            placeholder="Select Status"
            class="w-full"
            inputClass="p-inputtext-sm"
          />
        </div>

        <!-- Star Rating Filter -->
        <div class="flex sm:justify-center">
          <div>
            <label for="rating" class="block mb-1 text-sm font-medium">Min. Rating</label>
            <div class="pt-[2px]">
              <Rating
                id="rating"
                v-model="filters.rating"
                :cancel="true"
                class="text-sm"
                :stars="5"
              />
            </div>
          </div>
        </div>

        <!-- Date Range Filter -->
        <div>
          <label for="date" class="block mb-1 text-sm font-medium">Date Range</label>
          <DatePicker
            id="date"
            v-model="filters.dateRange"
            selectionMode="range"
            dateFormat="yy-mm-dd"
            showIcon
            class="w-full"
            inputClass="p-inputtext-sm"
          />
        </div>

        <!-- Filter Buttons -->
        <div class="mt-4 flex flex-col sm:flex-row justify-end gap-2">
          <Button
            label="Reset"
            icon="pi pi-refresh"
            class="p-button-secondary p-button-sm w-full sm:w-auto"
            @click="reset"
          />
          <Button
            label="Apply Filters"
            icon="pi pi-filter"
            class="p-button-primary p-button-sm w-full sm:w-auto"
            @click="apply"
          />
        </div>
      </div>
    </template>
  </Card>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const emit = defineEmits<(
  event: "filter-updated",
  value: {
    status: string | null
    rating: number
    dateRange: [Date, Date] | null
  }
) => void>()

const statusOptions = [
  { label: "Approved", value: "Approved" },
  { label: "Pending", value: "Pending" },
  { label: "Flagged", value: "Flagged" }
]

const filters = ref({
  status: null as string | null,
  rating: 0,
  dateRange: null as [Date, Date] | null
})

const reset = () => {
  filters.value = {
    status: null,
    rating: 0,
    dateRange: null
  }
  emit("filter-updated", { ...filters.value })
}

const apply = () => {
  emit("filter-updated", { ...filters.value })
}
</script>
