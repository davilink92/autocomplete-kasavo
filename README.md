# React Autocomplete Component

This project is a fully functional and production-ready Autocomplete component built with **React** and **TypeScript**, using **Vite** as the development environment for its speed and simplicity.

The component is designed to be reusable, performant, and user-friendly, with features such as debounce, result highlighting and mock API integration.

I choose to separate the component logic in a custom hook to have the componet a little bit more clear and readable.

---

## 🚀 Tech Stack

- **React** (with functional components and hooks)
- **TypeScript** (strong typing and interfaces)
- **Vite** (build tool and dev server)
- **SCSS** (modular styling)
- **ESLint** (code quality and static analysis)
- No external component libraries or state management tools

---

## 📦 Project Structure

```
src/
├── components/
│   └── Autocomplete/
│       ├── Autocomplete.tsx
│       ├── hooks/
│       │   └── useAutocomplete.ts
│       ├── types/
│       │   └── Suggestion.ts
├── services/
│   └── fetchMockData.ts     # Simulated API call
├── utils/
│   ├── debounce.ts
│   └── highlightMatch.tsx
├── App.tsx
```

---

## 🧠 Features

- 🔎 **Async search**: Results are fetched via an asynchronous function (simulating a real API).
- 🕒 **Debounce**: Prevents flooding the API while typing.
- ✨ **Highlight match**: The typed query is highlighted inside each result.
- 🖱 **Click outside to close**: Closes the dropdown when clicking outside.
- 🧪 **Mock API**: Results are retrieved from a local JSON file via `fetch`.

---

## ⚙️ Setup & Run

# 1. Install dependencies

npm install

# 2. Start the dev server

npm run dev

The project will be available at [http://localhost:5173](http://localhost:5173)

---

## 📁 Mock API

A mock dataset is stored in `public/data/locations.json` and loaded using a simple `fetch()` call to simulate an actual REST API.

Example:

```json
[
  { "id": 1, "text": "Milano - Porta Romana" },
  { "id": 2, "text": "Roma - Trastevere" }
]
```

You can update this file to reflect any dataset you prefer (e.g. users, companies, addresses, etc.)

---

## 💡 Design Decisions

- The component does **not rely on external UI libraries** to better showcase custom logic and styling.
- Debounce is implemented manually (no Lodash), for full control and performance.
- The Autocomplete logic is extracted into a **custom hook (`useAutocomplete`)** to keep the component cleaner and more focused on presentation.
- **Code quality** is enforced using ESLint, which helps prevent bugs and maintain consistency.
- The `highlightMatch` function is kept in a separate utility for clarity and reuse.

---

## ✅ Assumptions

- A real-world application would handle backend filtering; here, it's mocked for simplicity.
- Minimal styling was used to focus on functionality rather than aesthetics.

---
