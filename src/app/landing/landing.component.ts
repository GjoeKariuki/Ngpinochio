import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
  export class LandingComponent {
    constructor(private router:Router){}
    goLogin(){
      this.router.navigate(['/login'])
    }
    goRegister() {
      this.router.navigate(['/sign-up'])
    }
}
