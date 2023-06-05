import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form!:FormGroup
  errorMessage=null

  constructor(private fb:FormBuilder, private router:Router,private userService:UserService){}
ngOnInit(): void{
  this.form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    upassword: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$')]]
  })
}

  onSubmit(){
    // check if the details supplied are true
    //redirect to products
    let formvls = this.form.value
    this.userService.loginCurUser(formvls).subscribe(
      (res) => {
        this.errorMessage=null
        localStorage.setItem('token', res.token)
        localStorage.setItem('roles', res.role)
        localStorage.setItem('name', res.name)
        localStorage.setItem('email', res.email)
        this.router.navigate(['/products'])
        console.log(res)
    },
    (err) => {
        this.errorMessage = err.error.message;
        console.log(err)
    })
  }

  goForgot(){
    this.router.navigate(['/forgot-pwd'])
  }

}
