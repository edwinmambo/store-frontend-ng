import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cartItems!: CartItem[];
  totalPrice: number = 0;
  totalItems: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    this.cartService
      .getAllItems()
      .subscribe((items) => (this.cartItems = items));
    this.totalPrice = this.cartService.getTotalPrice();
    this.totalItems = this.cartService.getTotalItems();
  }

  removeItem(cartItem: CartItem) {
    this.cartItems = this.cartService.removeFromCart(cartItem);
  }

  clearCartItems() {
    this.cartItems = this.cartItems = this.cartService.clearCart();
  }

  // getTotalPrice() {
  //   return this.cartItems.reduce((accumulator, currentValue) => {
  //     return accumulator + currentValue.price;
  //   }, 0);
  // }

  // getTotalItems() {
  //   return this.cartItems.reduce((accumulator, currentValue) => {
  //     return accumulator + currentValue.quantity;
  //   }, 0);
  // }
}
