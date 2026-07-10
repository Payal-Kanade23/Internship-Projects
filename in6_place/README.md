# Places Picker

A React app for browsing available places, picking your favorites, and removing them with a confirmation modal.

## Features

- Browse a list of available places
- Pick places to add them to your selected list
- Remove a selected place, with a confirmation dialog before deleting
- Modal built on the native `<dialog>` element, rendered via a React portal
- Styled with Tailwind CSS

## Tech Stack

- [React](https://react.dev/) (Vite)
- [Tailwind CSS](https://tailwindcss.com/)
- Native `<dialog>` element for the confirmation modal

## Project Structure

```
src/
├── App.jsx              # Root component, holds selected/available place state
├── Header.jsx            # App header
├── AvailablePlace.jsx     # Grid of places you can pick
├── SelectedPlace.jsx      # Grid of places you've already picked
├── Model.jsx             # Modal component (dialog + portal), controlled via ref
├── data.js               # Static place data
└── assets/                # Images and static assets
```

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Installation

```bash
git clone <your-repo-url>
cd <project-folder>
npm install
```

### Running the app

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## How It Works

1. **Picking a place** — Clicking a place in `AvailablePlace` adds it to `selectedPlace` state in `App.jsx` (skips duplicates).
2. **Removing a place** — Clicking a place in `SelectedPlace` opens the confirmation modal via a ref (`model.current.open()`).
3. **Confirming removal** — Clicking "Yes" in the modal removes the place from state and closes the modal; "No" just closes it.

## Important Setup Note

The `Model` component portals into a DOM node with `id="model"`. Make sure this element exists in your `index.html`:

```html
<div id="model"></div>
```

