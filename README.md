# 🧾 Product Reviews Management Dashboard

This is a Vue 3 + PrimeVue-based internal dashboard for managing product reviews. It includes moderation actions, filtering, form submission, and full state management using Pinia.

---
## ✅ Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v18 or later recommended)
- **npm**, **yarn**, or **pnpm**

---
## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/anujjhawar28/product-review-management-dashboard.git
cd product-review-management-dashboard
npm install
```
---
## 📦 Starting the Server

Start the server:

```bash
npm run dev
```
---
## 📦 Creating the Production Build and Preview

Create the production build and preview locally:

```bash
npm run build 

npm run preview
```
---
---
## 📦 Running Test cases

Run Unit test cases:

```bash
npm run test
```
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
- **Vitest** for unit test the composables and components

---

## 🧠 Architectural Decisions & Tradeoffs

* **Component-Based Architecture**: The app is broken down into small, focused components like `ReviewForm`, `ReviewList`, `ReviewFilter`, and `ConfirmationDialog` to ensure reusability and separation of concerns.
* **Pinia for State Management**: Chosen over Vuex due to its lightweight, modular, and TypeScript-friendly design, perfect for small to medium dashboards.
* **PrimeVue as UI Framework**: Offers ready-made, accessible components with built-in responsiveness and themes, speeding up development.
* **In-Memory Store**: All data is stored in-memory (mocked) for simplicity. A real backend could be integrated via Axios or GraphQL with minimal changes.
* **Responsiveness First**: TailwindCSS utility classes ensure consistent layout across breakpoints, while PrimeVue components support responsive behavior by default.
* **Accessibility via Defaults**: Relied on PrimeVue’s accessible components (with ARIA support, keyboard nav), but custom interactions still need enhancements.

---

## ⏳ Time Taken & Left Out Due to Constraints

* **Total time spent**: \~12–14 hours
* **Features left out** (due to time constraints):
  * Virtual Scrolling for large datasets (its easy to implement as PrimeVue Table Component Gives Lazy Loading and Virtual Scroll Support in Base Table)
  * Debounced filtering (currently applies on button click which is equivalent easier with filter form submission)
  * API Integration (currently using mock data via Pinia)
  * Unit test cases Add more test cases for Components and Composables and test coverage should be more than 75%

---

## 🔧 What I'd Improve Next

* ✅ **Introduce Virtual Scrolling**: Boost performance when scaling to 1000+ reviews using PrimeVue’s `VirtualScroller` or paginated API calls.
* ✅ **Add Debounced Filters**: Improve UX by applying filters after short delay instead of manual click.
* ✅ **Write Unit Tests**: Cover `ReviewForm`, `ReviewFilter`, and store actions using Vitest or Jest.
* ✅ **Accessibility Enhancements**:
  * Add `aria-label`s for all icon buttons.
  * Check and test more on accessibility to ensure it works fine
* ✅ **Persist Data (Optional)**: Use localStorage or integrate with a backend to persist reviews. 
* ✅ **Review Detail Modal**: Show full comment, user details, and history in a modal on row click.
* ✅ **Edit Review Modal**: Show Add new Review Popup to Update the Comment if needed.
* ✅ **Tagging or Category Support**: Allow tagging reviews by product line, category, or sentiment.
* ✅ **Test coverages**: Add more test cases and test suits for components and unit test the base functionality for all components and composables.

---
