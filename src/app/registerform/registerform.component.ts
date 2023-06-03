import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css'],
  standalone:true,
  imports:[ FormsModule,
    ReactiveFormsModule,CommonModule]
  
  
})
export class RegisterformComponent implements OnInit {
  form!: FormGroup;
  errorMessage: string | null = null;
  registrationSuccessful: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.userService.addUser(this.form.value).subscribe(
      () => {
        // Registration is successful
        this.registrationSuccessful = true;
        setTimeout(() => {
          this.handleSuccessfulRegistration();
        }, 2000); // Redirect after 2 seconds
      },
      (err) => {
        this.errorMessage = err.message;
      }
    );
  }

  handleSuccessfulRegistration() {
    // Redirect to the login page
    this.router.navigate(['/login']);
  }
}