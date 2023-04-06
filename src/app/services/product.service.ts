import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsURL = 'api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsURL).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }

  // getProducts = (): Observable<Product[]> => {
  //   return this.http.get(this.productsURL) as Observable<Product[]>;
  // };

  getProduct(id: number): Observable<Product | null> {
    return this.http.get(
      `${this.productsURL}/${id}`
    ) as Observable<Product | null>;
  }

  getProductById(product: Product, id: number): Observable<any> {
    return this.http.get(this.productsURL + id);
  }

  // getProduct(id: number): Observable<Product> {
  //   return this.http
  //     .get<Product[]>(this.apiUrl)
  //     .pipe(map((products) => products.find((p) => p.id === id)));
  // }

  createProduct(product: Product): Observable<Product> {
    product.id = 0;
    return this.http.post<Product>(this.productsURL, product).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }

  editProduct(product: Product): Observable<any> {
    return this.http.put(this.productsURL + product.id, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.productsURL + id);
  }

  searchProducts = (term: string): Observable<Product[]> => {
    return this.http.get(`${this.productsURL}?name=${term}`) as Observable<
      Product[]
    >;
  };
}
