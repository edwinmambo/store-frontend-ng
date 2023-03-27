import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((data) => (this.products = data));
    // this.productService.getProducts().subscribe((data: any) => {
    //   console.log(data['products'], typeof data);
    //   Object.entries(data).forEach(([key, value]) =>
    //     console.log(`${key}: ${value}, ${typeof key}, ${typeof value}`)
    //   ); // this.products = data['products'];
    //   // console.log(products.products);
    // });
    this.products.forEach((item) => {
      // item.quantity = 0;
    });
  }

  addToCart(product: Product) {
    let { id, name, price } = product;
    this.cartService.addToCart({ id, name, price, quantity: 1 });
  }
}
