import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { FreshComponent } from './fresh/fresh.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './Login/account/account.component';
import { EmployeeComponent } from './Login/employee/employee.component';
import { OtpComponent } from './Login/otp/otp.component';
import { PhoneComponent } from './Login/phone/phone.component';


const routes: Routes = [
  {path:'',component:FreshComponent},
  {path:'home',component:HomeComponent},
  {path:'Account',component:AccountComponent},
  {path:'Employee',component:EmployeeComponent},
  {path:'Phone',component:PhoneComponent},
  {path:'Otp',component:OtpComponent},
  {path:'basket',component:BasketComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
