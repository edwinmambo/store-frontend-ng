import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // products = [
  //   {
  //     id: 1,
  //     name: 'Product 1',
  //     description: 'This is product 1',
  //     price: 9.99,
  //     imageUrl: 'https://via.placeholder.com/250x150',
  //   },
  //   {
  //     id: 2,
  //     name: 'Product 2',
  //     description: 'This is product 2',
  //     price: 19.99,
  //     imageUrl: 'https://via.placeholder.com/250x150',
  //   },
  //   {
  //     id: 3,
  //     name: 'Product 3',
  //     description: 'This is product 3',
  //     price: 29.99,
  //     imageUrl: 'https://via.placeholder.com/250x150',
  //   },
  //   {
  //     id: 4,
  //     name: 'Product 4',
  //     description: 'This is product 4',
  //     price: 39.99,
  //     imageUrl: 'https://via.placeholder.com/250x150',
  //   },
  //   {
  //     id: 5,
  //     name: 'Product 5',
  //     description: 'This is product 5',
  //     price: 39.99,
  //     imageUrl: 'https://via.placeholder.com/250x150',
  //   },
  //   {
  //     id: 6,
  //     name: 'Product 6',
  //     description: 'This is product 6',
  //     price: 39.99,
  //     imageUrl: 'https://via.placeholder.com/250x150',
  //   },
  //   {
  //     id: 7,
  //     name: 'Product 7',
  //     description: 'This is product 7',
  //     price: 39.99,
  //     imageUrl: 'https://via.placeholder.com/250x150',
  //   },
  //   {
  //     id: 8,
  //     name: 'Product 8',
  //     description: 'This is product 8',
  //     price: 39.99,
  //     imageUrl: 'https://via.placeholder.com/250x150',
  //   },
  //   {
  //     id: 9,
  //     name: 'Product 9',
  //     description: 'This is product 9',
  //     price: 39.99,
  //     imageUrl: 'https://via.placeholder.com/250x150',
  //   },
  //   {
  //     id: 10,
  //     name: 'Product 10',
  //     description: 'This is product 10',
  //     price: 39.99,
  //     imageUrl: 'https://via.placeholder.com/250x150',
  //   },
  //   {
  //     id: 11,
  //     name: 'Product 11',
  //     description: 'This is product 11',
  //     price: 39.99,
  //     imageUrl: 'https://via.placeholder.com/250x150',
  //   },
  //   {
  //     id: 12,
  //     name: 'Product 12',
  //     description: 'This is product 12',
  //     price: 39.99,
  //     imageUrl: 'https://via.placeholder.com/250x150',
  //   },
  //   {
  //     id: 13,
  //     name: 'Product 13',
  //     description: 'This is product 13',
  //     price: 39.99,
  //     imageUrl: 'https://via.placeholder.com/250x150',
  //   },
  // ];

  private apiURL = '/assets/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiURL}/${id}`);
  }
}
