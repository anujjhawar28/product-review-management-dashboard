<template>
  <div class="space-y-4">
    <!-- Filter Panel -->
    <ReviewFilter @filter-updated="applyFilters" />

    <!-- Review Table -->
    <ReviewList
      :reviews="filteredReviews"
      @confirm-delete="openDeleteDialog"
      @bulk-action="handleBulkAction"
      @add-review="showForm = true"
    />

    <!-- Add Review Form Modal -->
    <Dialog v-model:visible="showForm" header="Add Review" modal>
      <ReviewForm @submit="handleAddReview" @cancel="showForm = false" />
    </Dialog>

    <!-- Confirmation Dialog -->
    <ConfirmationDialog
      v-model="showConfirmDialog"
      message="Are you sure you want to delete this review?"
      @confirm="deleteReview"
      @cancel="selectedToDelete = null"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import ReviewList from '../components/ReviewList.vue'
import ReviewForm from '../components/ReviewForm.vue'
import ReviewFilter from '../components/ReviewFilter.vue'
import ConfirmationDialog from '../components/ConfirmationDialog.vue'
import { useToast } from 'primevue/usetoast'
import { useReviewStore } from '../stores/reviewStore'

const showForm = ref(false)
const showConfirmDialog = ref(false)
const selectedToDelete = ref<number | null>(null)
const activeFilters = ref<any>({})

const store = useReviewStore()
const toast = useToast()

const filteredReviews = computed(() => {
  return store.reviews.filter((review) => {
    const { status, rating, dateRange } = activeFilters.value
    const matchStatus = !status || review.status === status
    const matchRating = !rating || review.rating >= rating
    const matchDate =
      !dateRange ||
      (new Date(review.date) >= new Date(dateRange[0]) &&
        new Date(review.date) <= new Date(dateRange[1]))
    return matchStatus && matchRating && matchDate
  })
})

const applyFilters = (filters: any) => {
  activeFilters.value = filters
}

const handleAddReview = (review: any) => {
  store.addReview(review)
  toast.add({ severity: 'success', summary: 'Review Added', life: 3000 })
  showForm.value = false
}

const openDeleteDialog = (id: number) => {
  selectedToDelete.value = id
  showConfirmDialog.value = true
}

const deleteReview = () => {
  if (selectedToDelete.value !== null) {
    store.deleteReview(selectedToDelete.value)
    toast.add({ severity: 'error', summary: 'Review deleted successfully', life: 3000 })
    selectedToDelete.value = null
    showConfirmDialog.value = false
  }
}

const handleBulkAction = (action: 'approve' | 'flag') => {
  store.selectedReviews.forEach((review) => {
    store.updateReviewStatus(review.id, action === 'approve' ? 'Approved' : 'Flagged')
  })
  store.selectedReviews = []
  toast.add({ severity: 'success', summary: 'Reviews updated successfully', life: 3000 })
}
</script>
