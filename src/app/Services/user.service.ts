import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddUserSuccess, dbusers, iloginUser, inewUser, logUserSuccess, updateUserSuccess } from '../Interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {  
  // delete user
  constructor(private http:HttpClient) { }
  
  registerNewUser(obj:inewUser):Observable<AddUserSuccess>{
    //console.log(obj)
    return this.http.post<AddUserSuccess>('http://localhost:8080/auth/sign-up', obj)
  }
  // log new user
  loginCurUser(obj:iloginUser):Observable<logUserSuccess>{
    return this.http.post<logUserSuccess>('http://localhost:8080/auth/login/', obj)
  }
  // search user
  getOurUsers():Observable<dbusers[]>{
    return this.http.get<dbusers[]>('http://localhost:8080/users')
  }
  
  getUserbyEmail():Observable<dbusers>{
    return this.http.get<dbusers>('http://localhost:8080/users/email/skm55@gmail.com')
  }
  // update user
  updateUserdetails(obj:dbusers):Observable<updateUserSuccess>{
    return this.http.put<updateUserSuccess>(`http://localhost:8080/users/${obj.USERID}`, obj)
  }
    //strong type your services when communicating with an external API 
    //   addUser(NewUsers:newUser):Observable<AddUserSuccess>{
    // return this.http.post<AddUserSuccess>(" http://localhost:4000/users" , NewUsers)
    //   }


}
