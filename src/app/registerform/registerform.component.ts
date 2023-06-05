import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css'],
  standalone:true,
  imports:[ FormsModule,
    ReactiveFormsModule,CommonModule, RouterModule]
  
  
})
export class RegisterformComponent implements  OnInit {
  form!:FormGroup
  errorMessage=null
  constructor(private fb:FormBuilder, private userService:UserService, private router:Router){}
  ngOnInit(): void {
    this.form = this.fb.group({
      username:['',[Validators.required]],
      fullname:['',[Validators.required] ],
      email:['' ,[Validators.required,Validators.email]],
      phonenumber:['',[Validators.required]],
      upassword:['',[Validators.required]],
      confirmpassword: ['', [Validators.required]]
      // confirmpassword:['',[Validators.required]]

    })
  }


  onSubmit(){
    
    // this.userService.registerNewUser(objvalues)
    if(this.form.valid){
      let objvalues = this.form.value
      this.userService.registerNewUser(objvalues).subscribe(
        (res)=> {
          console.log(res)
          this.form.reset()          
          this.router.navigate(['/login'])
        },
        (err)=> {console.log(err)}
      )
      // console.log(objvalues)
    }
  }






}
