import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProducts } from '../Interfaces';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EcommerceproductService {

  constructor(private http: HttpClient) { 
  }

  getAllProducts():Observable<iProducts[]>{
    return this.http.get<iProducts[]>('http://localhost:4000/products');
  }
}
