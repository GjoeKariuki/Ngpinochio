import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  standalone:true,
  imports:[NgbCarouselModule, NgIf, CommonModule],

})
export class CarouselComponent{
  images = [
    'assets/images/image1.jfif',
    'assets/images/image2.jfif'
  ];
  getImageAltText(imagePath: string): string {
    const imageName = imagePath.substring(imagePath.lastIndexOf('/') + 1);
    return 'Random ' + imageName.substring(0, imageName.lastIndexOf('.'));
  }
  
  getImageLabel(imagePath: string): string {
    const slideNumber = this.images.indexOf(imagePath) + 1;
    return 'Slide ' + slideNumber + ' label';
  }
  

}

// import { Component } from '@angular/core';
// import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgIf } from '@angular/common';

// @Component({
// 	selector: 'ngbd-carousel-basic',
// 	standalone: true,
// 	imports: [NgbCarouselModule, NgIf],
// 	templateUrl: './carousel-basic.html',
// })
// export class NgbdCarouselBasic {
// 	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
// }