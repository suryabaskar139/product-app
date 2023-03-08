import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {

  options: AnimationOptions = {    
    path: '../../../assets/images/Animations/82795-favorite-icon.json'  
  };  

  constructor() { }  

  ngOnInit(): void {  }

  onAnimate(animationItem: AnimationItem): void {    
    console.log(animationItem);  
  }

}
