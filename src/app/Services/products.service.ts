
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddProductSuccess, addIproduct, iProducts } from '../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getProducts():Observable<iProducts[]>{
    return this.http.get<iProducts[]>('http://localhost:8080/products')
  }

  addProduct(obj:addIproduct):Observable<AddProductSuccess>{
    return this.http.post<AddProductSuccess>('http://localhost:8080/products', obj)
  }

  getProductbyid(id:string):Observable<iProducts>{
    return this.http.get<iProducts>(`http://localhost:8080/products/${id}`)
  }

  updateProduct(id:string, obj:addIproduct):Observable<AddProductSuccess>{
    return this.http.put<AddProductSuccess>(`http://localhost:8080/products/${id}`, obj)
  }

  deleteProduct(id:string):Observable<AddProductSuccess>{
    return this.http.delete<AddProductSuccess>(`http://localhost:8080/products/${id}`)
  }
}
