import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  options: AnimationOptions = {    
    path: '../../../assets/images/Animations/lf30_editor_q5uczxs3.json'  
  };  

  constructor() { }  

  ngOnInit(): void {  }

  onAnimate(animationItem: AnimationItem): void {    
    console.log(animationItem);  
  }
}
