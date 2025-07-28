export interface Review {
  id: number
  name: string
  email: string
  rating: number // from 1 to 5
  date: string   // format: yyyy-mm-dd
  status: 'Approved' | 'Pending' | 'Flagged'
  comment: string
}
