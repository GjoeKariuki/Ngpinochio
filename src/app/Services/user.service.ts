import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddUserSuccess, logUserSuccess, loginUser, newUser } from '../Interfaces';
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

  loginUser(loginUsers:loginUser):Observable<logUserSuccess>{
    return this.http.post<logUserSuccess>(" http://localhost:4000/users/login" ,loginUsers)
      }

}
