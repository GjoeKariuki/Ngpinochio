import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products, newItems } from '../Interfaces';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EcommerceproductService {

  constructor(private http: HttpClient) { 
  }

  getAllProducts():Observable<Products[]>{
    return this.http.get<Products[]>('http://localhost:4000/products');
  }
  addToCart(newItem: newItems): Observable<{ message: string }> {
    return this.http.post<{ message: string }>('http://localhost:4000/cart/125', newItem);
  }
}
