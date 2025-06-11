// MosyModalManager.js
let showModal = () => {};
export let closeMosyCard = () => {};

export function MosyCard(title, body, dismissOnOutsideClick = true) {
  if (showModal) {
    showModal({ title, body, dismissOnOutsideClick });
  }
}

// Allow the modal component to register itself
export function registerModal(showFn, closeFn) {
  showModal = showFn;
  closeMosyCard = closeFn;
}
