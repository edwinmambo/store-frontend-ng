import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../models/product';
import { Products } from '../data/products';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const products: Product[] = Products;
    return { products };
  }

  genID(products: Product[]): number {
    return products.length > 0
      ? Math.max(...products.map((product) => product.id)) + 1
      : 1;
  }
}
