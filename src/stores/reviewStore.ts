import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Review } from '../types/review'
import { faker } from '@faker-js/faker'

function generateMockReviews(count = 100): Review[] {
  const statuses: Review['status'][] = ['Approved', 'Pending', 'Flagged']
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    rating: faker.number.int({ min: 1, max: 5 }),
    date: faker.date.recent({ days: 30 }).toISOString().split('T')[0],
    status: faker.helpers.arrayElement(statuses),
    comment: faker.lorem.sentence(),
  }))
}

export const useReviewStore = defineStore('reviewStore', () => {
  const reviews = ref<Review[]>(generateMockReviews())
  const selectedReviews = ref<Review[]>([])

  const addReview = (review: Review) => {
    reviews.value.unshift(review)
  }

  const deleteReview = (id: number) => {
    reviews.value = reviews.value.filter((r) => r.id !== id)
  }

  const updateReviewStatus = (id: number, status: Review['status']) => {
    const review = reviews.value.find((r) => r.id === id)
    if (review) review.status = status
  }

  return {
    reviews,
    selectedReviews,
    addReview,
    deleteReview,
    updateReviewStatus
  }
})
