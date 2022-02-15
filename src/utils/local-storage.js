const CART = 'CART';

export function getCart() {
  const stringyCart = localStorage.getItem(CART);
  const parsedCart = JSON.parse(stringyCart);
  if (parsedCart) return parsedCart;
  if (!parsedCart) return [];
}

export function setCart(parsedCart) {
  const stringyCart = JSON.stringify(parsedCart);
  localStorage.setItem(CART, stringyCart);
}

