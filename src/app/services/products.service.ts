import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getProductByCategoryId(catId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`, {
      params: {cat_id: catId.toString()}
    })
  }
}
