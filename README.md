# 🧾 Product Reviews Management Dashboard

This is a Vue 3 + PrimeVue-based internal dashboard for managing product reviews. It includes moderation actions, filtering, form submission, and full state management using Pinia.

---

## 🚀 Features

- List product reviews with rating, status, date, and comments
- Filter reviews by:
  - Status (Approved / Pending / Flagged)
  - Star Rating (minimum)
  - Date Range
- Sort by date and rating
- Moderation controls:
  - Approve / Flag / Delete
  - Bulk Approve and Bulk Flag
- Add new review via modal form with validation
- Confirmation dialog for deletions
- Dark/Light theme toggle
- Fully responsive across desktop/tablet/mobile
- Accessible: semantic HTML, ARIA roles, keyboard navigation

---

## 🧰 Tech Stack

- **Vue 3** with **Composition API**
- **PrimeVue** UI Library
- **Pinia** for state management
- **Vue Router** for page routing
- **TypeScript** for all logic and data models
- **Vite** for fast dev build

---

## 📦 Project Setup

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```