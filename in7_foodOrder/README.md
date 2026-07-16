# 🍔 Fancy Food

A food ordering web app built with React, Tailwind CSS, and the Context API. Browse a menu, add items to your cart, adjust quantities, and check out through a multi-step modal flow.

## Features

- Browse a grid of food items with images, descriptions, and prices
- Add items to a cart via global Context API state
- Increment / decrement item quantities in the cart
- Cart total calculated live
- Multi-step modal flow: **Cart → Checkout Form → Success confirmation**
- Modals built with native `<dialog>` elements + React Portals

## Tech Stack

- **React** (function components, hooks)
- **Tailwind CSS** for styling
- **Context API** for cart state management
- Native HTML `<dialog>` element for modals (`showModal()` / `close()`)
- `createPortal` for rendering modals outside the normal component tree

## Project Structure

```
src/
├── App.jsx              # Root component, holds top-level cart modal ref
├── Header.jsx            # Nav bar with logo + cart button (shows item count)
├── CardDesign.jsx         # Wraps the food grid
├── Card.jsx               # Renders each food item + "Add to Cart" button
├── data.js                # Static food menu data
├── CartContext.jsx        # Cart state: cart, setCart, handleAddToCart
├── Modal.jsx               # Generic modal wrapper (used for Cart)
├── CartModel.jsx            # Cart contents, quantity controls, checkout trigger
├── CheckModel.jsx            # Modal wrapper for the checkout form
├── CheckoutForm.jsx           # Shipping/contact form
├── SuccessModel.jsx            # Modal wrapper for order confirmation
├── Success.jsx                  # "Order placed" confirmation message
└── App.css
```

## Modal Architecture

Each modal (`Modal`, `CheckModel`, `SuccessModel`) is a `forwardRef` component that:
1. Wraps a native `<dialog>` element
2. Exposes `open()` and `close()` via `useImperativeHandle`
3. Renders through `createPortal` into a shared DOM node

Parent components call `ref.current.open()` / `ref.current.close()` to control visibility, rather than passing boolean `isOpen` state.

**Portal targets:** `Modal` and `CheckModel` currently share `document.getElementById("modal")`. Confirm `SuccessModel`'s target (`"modal"` vs a separate `"success"` div) matches your `index.html` before deploying — both approaches work, but the target `id` must exist in the DOM either way.

## Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build
```

Make sure your `index.html` includes the portal target div(s), e.g.:

```html
<div id="root"></div>
<div id="modal"></div>
```

## Known Issues / TODO

- [ ] Confirm cart closes before checkout opens (`checkModelStart` should call `modalEnd()` then `checkModel.current.open()`)
- [ ] Decide checkout "Close" behavior: return to cart view, or close entirely
- [ ] Verify `<dialog>` auto-centering — Tailwind's preflight resets `margin`, which breaks native dialog centering; use `m-auto` (with `fixed inset-0` as fallback) to restore it
- [ ] Replace non-standard Tailwind spacing values (e.g. `w-50`, `mr-18`, `h-25`) with valid scale values or arbitrary value syntax (`w-[200px]`)
- [ ] Wire up `handleSubmit` in `CheckoutForm` to an actual backend/payment API (currently a TODO stub)
- [ ] Remove leftover `console.log` calls in `CartContext.jsx` and `Header.jsx`
- [ ] Confirm whether "Add to Cart" should auto-open the cart modal (`modalStart` prop needs to be threaded through `Card.jsx` if so)

