import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddUserSuccess, newUser } from '../Interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  //strong type your services when communicating with an external API 
  addUser(NewUsers:newUser):Observable<AddUserSuccess>{
return this.http.post<AddUserSuccess>(" http://localhost:4000/users" , NewUsers)
  }
}
