import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    accept: 'application/json',
  });
  
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getProductByCategoryId(catId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`, {
      params: {cat_id: catId.toString()}
    });
  }

  public addItemsToCart(product: Product): Observable<any> {
    return this.http.post(`${this.baseUrl}/cart`, product, { headers: this.headers });
  }

  public getItemsFromCart(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cart`);
  }

}
