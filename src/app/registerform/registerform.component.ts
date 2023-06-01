import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';


@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css'],
  standalone:true,
  imports:[ FormsModule,
    ReactiveFormsModule,CommonModule]
  
  
})
export class RegisterformComponent implements  OnInit {
  form!:FormGroup
  errorMessage=null
  constructor(private fb:FormBuilder, private userService:UserService){}
  ngOnInit(): void {
    this.form = this.fb.group({
      userName:['',[Validators.required]],
      fullName:['',[Validators.required] ],
      email:['' ,[Validators.required,Validators.email]],
      phoneNumber:['',[Validators.required]],
      password:['',[Validators.required]],
      // confirmpassword:['',[Validators.required]]

    })
  }


  onSubmit(){
this.userService.addUser(this.form.value).subscribe (
res=>{
console.log(  res.message)
},
err=>{
  this.errorMessage=err.message
}
)

console.log(this.form.value) //  not a must
}






}
