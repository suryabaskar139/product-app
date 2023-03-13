import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartFComponent } from './cart-f/cart-f.component';
import { DescriptionFComponent } from './description-f/description-f.component';
import { AccountFComponent } from './Login/account-f/account-f.component';
import { EmployeeFComponent } from './Login/employee-f/employee-f.component';
import { NumberFComponent } from './Login/number-f/number-f.component';
import { OtpFComponent } from './Login/otp-f/otp-f.component';
import { PhoneFComponent } from './Login/phone-f/phone-f.component';

const routes: Routes = [
  {path:'feed-account',component:CartFComponent},
  {path:'feed-description',component:DescriptionFComponent},
  
/*-----------------------------Login-----------------------------------*/

  {path:'feed-account',component:AccountFComponent},
  {path:'feed-employee',component:EmployeeFComponent},
  {path:'feed-number',component:NumberFComponent},
  {path:'feed-otp',component:OtpFComponent},
  {path:'feed-phone',component:PhoneFComponent},

/*-------------------------------------------------------------------------*/  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedingRoutingModule { }
