import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<img src="../../assets/images/Group-49014.svg">', '<img src="../../assets/images/Group-49015.svg">'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items:2
      },
      740: {
        items:3
      },
      940: {
        items:3
      },
      1140:{
        items:4
      },
      1300:{
        items:4
      }
      
    },
    nav: true
  }
}
