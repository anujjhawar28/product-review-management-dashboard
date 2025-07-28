import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ReviewList from '../../components/ReviewList.vue'
import { createTestingPinia } from '@pinia/testing'

describe('ReviewList.vue', () => {
  const mockReviews = [
    { id: 1, rating: 5, status: 'Approved', comment: 'Great!', createdAt: new Date('2023-01-01') },
    { id: 2, rating: 2, status: 'Pending', comment: 'Needs work', createdAt: new Date('2023-01-02') }
  ]

  it('renders all reviews', () => {
    const wrapper = mount(ReviewList, {
      global: {
        plugins: [createTestingPinia()],
      },
      props: {
        reviews: mockReviews
      }
    })
    const rows = wrapper.findAll('[data-testid="review-row"]')
    expect(rows.length).toBe(2)
  })

  it('displays correct status and comment', () => {
    const wrapper = mount(ReviewList, {
      global: {
        plugins: [createTestingPinia()],
      },
      props: {
        reviews: mockReviews
      }
    })

    const html = wrapper.html()
    expect(html).toContain('Approved')
    expect(html).toContain('Pending')
    expect(html).toContain('Great!')
    expect(html).toContain('Needs work')
  })
})
