import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  constructor(private fb:FormBuilder){}
  form:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email],[<AsyncValidatorFn><unknown>this.testEmail])
  })
  testEmail(){

  }
  onSubmit(){
    // test email
  }
}
