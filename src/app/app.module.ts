import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarouselComponent } from './carousel/carousel.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { MatDialogModule } from '@angular/material/dialog';

import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import {IonicModule} from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'




@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,AppRoutingModule,
    RouterModule, HeaderComponent,SidenavComponent,   
    MatDialogModule,MatToolbarModule,MatIconModule,
    MatListModule,MatButtonModule,MatSidenavModule,
    CarouselComponent,FontAwesomeModule,
    IonicModule.forRoot(),
    HttpClientModule,  


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
