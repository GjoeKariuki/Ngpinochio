import { Injectable } from '@angular/core';
import { AddToCartSuccess, addIcart, iCart } from '../Interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  getCartItems():Observable<iCart[]>{
    return this.http.get<iCart[]>('http://localhost:8080/cart')
  }

  addToCart(id:string, obj:string):Observable<AddToCartSuccess>{
    return this.http.post<AddToCartSuccess>(`http://localhost:8080/cart/${id}`, obj)
  }

  updateProduct(id:string, obj:number):Observable<AddToCartSuccess>{
    return this.http.put<AddToCartSuccess>(`http://localhost:8080/cart/${id}`, obj)
  }

  deleteProduct(id:string):Observable<AddToCartSuccess>{
    return this.http.delete<AddToCartSuccess>(`http://localhost:8080/cart/${id}`)
  }
}
