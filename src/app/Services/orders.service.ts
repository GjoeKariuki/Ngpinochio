import { Injectable } from '@angular/core';
import { AddOrderSuccess, iorders } from '../Interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }
  getOrders():Observable<iorders[]>{
    return this.http.get<iorders[]>('http://localhost:8080/orders')
  }

  createOrders(id:string):Observable<AddOrderSuccess>{
    return this.http.post<AddOrderSuccess>(`http://localhost:8080/orders/`, id)
  }

  getOrderbyid(id:string):Observable<iorders>{
    return this.http.get<iorders>(`http://localhost:8080/orders/${id}`)
  }

  updateProduct(id:string, obj:string):Observable<AddOrderSuccess>{
    return this.http.put<AddOrderSuccess>(`http://localhost:8080/products/${id}`, obj)
  }

  deleteProduct(id:string):Observable<AddOrderSuccess>{
    return this.http.delete<AddOrderSuccess>(`http://localhost:8080/orders/${id}`)
  }
}
