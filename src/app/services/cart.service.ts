import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { CartProduct } from '../models/cart-product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: CartProduct[] = JSON.parse(
    sessionStorage.getItem('storefront-cart') || '[]'
  );

  constructor() {}

  addToCart = (product: Product, amount: number): void => {
    const existingProductIndex = this.cart.findIndex(
      (currentProduct) => currentProduct.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedAmount = this.cart[existingProductIndex].amount + amount;
      this.cart[existingProductIndex] = {
        ...product,
        amount: updatedAmount,
      };
      alert(
        `Updated amount of product: ${product.name} - new amount: ${updatedAmount}`
      );
      return;
    }

    this.cart.push({
      ...product,
      amount: amount,
    });

    console.log(this.cart);

    sessionStorage.setItem('storefront-cart', JSON.stringify(this.cart));
    alert(`Added product to cart: ${product.name} - amount: ${amount}`);
  };

  removeFromCart = (id: number): void => {
    this.cart = this.cart.filter((currentProduct) => currentProduct.id !== id);
    sessionStorage.setItem('storefront-cart', JSON.stringify(this.cart));
  };

  updateAmount = (id: number, amount: number): void => {
    this.cart = this.cart.map((currentProduct) => {
      if (currentProduct.id === id) {
        return {
          ...currentProduct,
          amount: amount,
        };
      }
      return currentProduct;
    });
    sessionStorage.setItem('storefront-cart', JSON.stringify(this.cart));
  };

  getCartProducts = (): CartProduct[] => {
    return this.cart;
  };

  clearCart = () => {
    this.cart = [];
    sessionStorage.removeItem('storefront-cart');
  };
}
