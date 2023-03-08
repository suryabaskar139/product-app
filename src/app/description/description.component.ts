import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [' <img src="../../assets/images/Icon-feather-arrow-right.svg">', '<img src="../../assets/images/Icon-feather-arrow-left.svg">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items:2
      },
      740: {
        items:3
      },
      940: {
        items:4
      },
      1140:{
        items:4
      }
    },
    nav: true
  }
}
