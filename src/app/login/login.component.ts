import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../Services/user.service';
import { AuthService } from '../Services/auth.service';

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

  constructor(private fb:FormBuilder, private router:Router,private authService:AuthService,private userService:UserService){}
ngOnInit(): void{
  this.form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$')]]
  })
}

  onSubmit(){
    // check if the details supplied are true
    //redirect to products
   // this.router.navigate(['/products'])
   this.userService.loginUser(this.form.value).subscribe(
    res=>{
      this.errorMessage=null
      this.authService.login(res)
      this.router.navigate(['/category'])
    
   },
   err=>{
   this.errorMessage = err.error.message ;

   })

  }

  goForgot(){
    this.router.navigate(['/forgot-pwd'])
  }

}
