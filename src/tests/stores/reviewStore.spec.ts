import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useReviewStore } from '../../stores/reviewStore'
import { Review } from '../../types/review'

describe('useReviewStore', () => {
  let store: ReturnType<typeof useReviewStore>

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useReviewStore()
  })

  it('initializes with 100 mock reviews', () => {
    expect(store.reviews.length).toBe(100)
    const sample = store.reviews[0]
    expect(sample).toHaveProperty('id')
    expect(sample).toHaveProperty('name')
    expect(sample).toHaveProperty('email')
    expect(sample).toHaveProperty('rating')
    expect(sample).toHaveProperty('date')
    expect(sample).toHaveProperty('status')
    expect(sample).toHaveProperty('comment')
  })

  it('can add a new review', () => {
    const newReview: Review = {
      id: 999,
      name: 'Test User',
      email: 'test@example.com',
      rating: 4,
      date: '2025-07-28',
      status: 'Pending',
      comment: 'Looks good!',
    }

    store.addReview(newReview)
    expect(store.reviews[0]).toEqual(newReview)
    expect(store.reviews.length).toBe(101)
  })

  it('can delete a review by id', () => {
    const idToDelete = store.reviews[0].id
    store.deleteReview(idToDelete)
    expect(store.reviews.find((r) => r.id === idToDelete)).toBeUndefined()
    expect(store.reviews.length).toBe(99)
  })

  it('can update a review status', () => {
    const target = store.reviews[0]
    store.updateReviewStatus(target.id, 'Flagged')
    expect(store.reviews.find((r) => r.id === target.id)?.status).toBe('Flagged')
  })

  it('selectedReviews is a reactive array', () => {
    expect(Array.isArray(store.selectedReviews)).toBe(true)
    expect(store.selectedReviews.length).toBe(0)
  })
})
