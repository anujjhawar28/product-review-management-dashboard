<template>
  <div
    class="p-4 mb-4 border rounded-lg shadow-sm bg-surface-0 dark:bg-surface-800 text-surface-900 dark:text-surface-0"
  >
    <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
      <!-- Status Filter -->
      <div>
        <label for="status" class="block mb-1 font-medium">Status</label>
        <Select
          id="status"
          v-model="filters.status"
          :options="statusOptions"
          optionLabel="label"
          optionValue="value"
          placeholder="Select Status"
          class="w-full"
        />
      </div>

      <!-- Star Rating Filter -->
      <div>
        <label for="rating" class="block mb-1 font-medium">Min. Rating</label>
        <Rating
          id="rating"
          v-model="filters.rating"
          :cancel="true"
          class="w-full"
        />
      </div>

      <!-- Date Range Filter -->
      <div class="col-span-2">
        <label for="date" class="block mb-1 font-medium">Date Range</label>
        <Calendar
          id="date"
          v-model="filters.dateRange"
          selectionMode="range"
          dateFormat="yy-mm-dd"
          showIcon
          class="w-full"
        />
      </div>
    </div>

    <!-- Buttons -->
    <div class="mt-4 flex justify-end gap-2">
      <Button
        label="Reset"
        icon="pi pi-refresh"
        class="p-button-secondary"
        @click="reset"
      />
      <Button
        label="Apply Filters"
        icon="pi pi-filter"
        class="p-button-primary"
        @click="apply"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits<(
  event: "filter-updated",
  value: {
    status: string | null;
    rating: number;
    dateRange: [Date, Date] | null;
  }
) => void>();

// Define possible review statuses
const statusOptions = [
  { label: "Approved", value: "Approved" },
  { label: "Pending", value: "Pending" },
  { label: "Flagged", value: "Flagged" },
];

// Filters state
const filters = ref<{
  status: string | null;
  rating: number;
  dateRange: [Date, Date] | null;
}>({
  status: null,
  rating: 0,
  dateRange: null,
});

// Reset filters
const reset = () => {
  filters.value = {
    status: null,
    rating: 0,
    dateRange: null,
  };
  emit("filter-updated", filters.value);
};

// Apply current filters
const apply = () => {
  emit("filter-updated", filters.value);
};
</script>
