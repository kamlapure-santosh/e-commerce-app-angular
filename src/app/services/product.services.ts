import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { DatePipe } from '@angular/common';
import { ProductModel } from '../models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiBaseUrl;
  }

  getProduct(id: number): Observable<ProductModel> {
    const url = `${this.apiUrl}/${environment.apiEndpoints.product.getProduct}/${id}`;
    return this.http.get<ProductModel>(url);
  }

  getProducts(fetchCount: number): Observable<ProductModel[]> {
    const url = `${this.apiUrl}/${environment.apiEndpoints.product.getAllProduct}?pageNumber=1&pageSize=${fetchCount}&sortBy=ProductName`;
    return this.http.get<ProductModel[]>(url);
  }
}
