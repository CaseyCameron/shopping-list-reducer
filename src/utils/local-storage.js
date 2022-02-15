import { findById } from './utils';
const CART = 'CART';

export function getCart() {
  const parsedCart = JSON.parse(localStorage.getItem(CART));
  if (parsedCart) return parsedCart;
  if (!parsedCart) return [];
}

export function setCart(parsedCart) {
  localStorage.setItem(CART, JSON.stringify(parsedCart));
}

export function addItemToCart(item) {
  const cart = getCart();
  cart.push(item);
  setCart(cart);
}

