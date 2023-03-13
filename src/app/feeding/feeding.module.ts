import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedingRoutingModule } from './feeding-routing.module';
import { CartFComponent } from './cart-f/cart-f.component';
import { DescriptionFComponent } from './description-f/description-f.component';
import { AccountFComponent } from './Login/account-f/account-f.component';
import { EmployeeFComponent } from './Login/employee-f/employee-f.component';
import { NumberFComponent } from './Login/number-f/number-f.component';
import { OtpFComponent } from './Login/otp-f/otp-f.component';
import { PhoneFComponent } from './Login/phone-f/phone-f.component';



@NgModule({
  declarations: [
   
  
    CartFComponent,
           DescriptionFComponent,
           AccountFComponent,
           EmployeeFComponent,
           NumberFComponent,
           OtpFComponent,
           PhoneFComponent
  ],
  imports: [
    CommonModule,
    FeedingRoutingModule
  ]
})
export class FeedingModule { }
