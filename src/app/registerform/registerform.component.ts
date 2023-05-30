import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


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
  ngOnInit(): void {
    this.form = new FormGroup({
      username:new FormControl('',[Validators.required]),
      fullname:new FormControl('',[Validators.required] ),
      email:new FormControl(null ,[Validators.required,Validators.email]),
      phonenumber:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required]),
      confirmpassword:new FormControl(null,[Validators.required])

    })
  }
  onSubmit(){
  console.log( this.form)

}




}
