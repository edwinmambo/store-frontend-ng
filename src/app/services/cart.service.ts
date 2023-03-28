import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiURL = '/assets/cart.json';
  items!: CartItem[];

  constructor(private http: HttpClient) {}

  addToCart(item: CartItem): CartItem[] {
    if (
      this.items.filter((element) => {
        return element.id === item.id;
      }).length
    ) {
      item.quantity += 1;
      let toUpdate = this.items.find((element) => element.id == item.id);
      if (toUpdate) toUpdate.quantity += 1;
    } else {
      this.items.push(item);
    }
    return this.items;
  }

  removeFromCart(item: CartItem): CartItem[] {
    if (
      this.items.filter((element) => {
        return element.id == item.id;
      }).length
    ) {
      item.quantity -= 1;
      let toUpdate = this.items.find((element) => element.id == item.id);
      if (toUpdate) toUpdate.quantity -= 1;
    } else {
      this.items.shift();
    }
    return this.items;
  }

  getAllItems() {
    return this.http.get<CartItem[]>(this.apiURL);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getTotalPrice() {
    if (!this.items || this.items.length) return 0;
    else
      return this.items.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.quantity;
      }, 0);
  }

  getTotalItems() {
    if (!this.items || this.items.length) return 0;
    else
      return this.items.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity;
      }, 0);
  }
}
