import { Injectable } from '@angular/core';
import { logUserSuccess } from '../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
roles!:string|null
token!:string|null
  constructor() { 

  }

  login(res:logUserSuccess){
    localStorage.setItem('token', res.token)
    localStorage.setItem('roles', res.roles)
      localStorage.setItem('userName', res.userName)
  } 
  logout(){
    localStorage.clear()
 
  }
  isloggedIn(){
    let roles=localStorage.getItem('roles')
 this.roles= roles? roles:null 
 let token=localStorage.getItem('token')
 this.token= token? token:null 
   return this.token?true :false
  }

  getuserName(){
    let userName=localStorage.getItem('userName')
   return userName? userName : "Welcome to our page"
  }
}
