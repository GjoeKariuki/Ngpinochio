import { Component,Input, OnInit } from '@angular/core';
//import { caraouslImages } from 'caraoselinterface';
import { EcommerceService } from '../ecommerce.service';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  constructor(private ecommerceService: EcommerceService) {}
  //@Input() images: caraouslImages[]=[]

  selectedIndex = 0;

  ngOnInit(): void {
  //  this.images = this.ecommerceService.getImages();
  }

}
