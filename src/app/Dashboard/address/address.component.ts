import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
   
   
  options: AnimationOptions = {    
    path: '../../../assets/images/Animations/84767-no-access-to-location.json'  
  };  

  constructor() { }  

  ngOnInit(): void {  }

  onAnimate(animationItem: AnimationItem): void {    
    console.log(animationItem);  
  }

}
