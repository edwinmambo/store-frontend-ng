import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cartProducts!: CartProduct[];
  totalPrice: number = 0;
  totalItems: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartProducts();
    this.totalItems = this.cartProducts.length;
    this.calculateTotal();
  }

  calculateTotal = () => {
    const cart = this.cartService.getCartProducts();
    // this calculates the sum but has to many digits like 19,0000000001
    const totalSum = cart.reduce(
      (prev: number, prod: CartProduct) => prev + prod.price * prod.amount,
      0
    );
    // total price after formatting
    this.totalPrice = this.calculateTotalPrice(totalSum);
  };

  deleteProduct = (id: number) => {
    this.cartProducts = this.cartProducts.filter((p) => p.id !== id);
  };

  calculateTotalPrice = (sum: number): number => {
    // remove the extra digits
    const trimmedSum = sum.toFixed(2);
    return Number(trimmedSum);
  };

  clearCartItems() {
    this.cartService.clearCart();
  }
}
