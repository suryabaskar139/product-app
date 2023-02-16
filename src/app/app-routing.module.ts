import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { CartComponent } from './cart/cart.component';
import { EditComponent } from './Dashboard/edit/edit.component';
import { OrderThreeComponent } from './Dashboard/order-three/order-three.component';
import { OrderTwoComponent } from './Dashboard/order-two/order-two.component';
import { OrderComponent } from './Dashboard/order/order.component';
import { SidebarComponent } from './Dashboard/sidebar/sidebar.component';
import { DescriptionComponent } from './description/description.component';
import { FreshComponent } from './fresh/fresh.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './Login/account/account.component';
import { EmployeeComponent } from './Login/employee/employee.component';
import { NumberComponent } from './Login/number/number.component';
import { OtpComponent } from './Login/otp/otp.component';
import { PhoneComponent } from './Login/phone/phone.component';
import { LookingComponent } from './looking/looking.component';
import { ReceipiesComponent } from './receipies/receipies.component';


const routes: Routes = [
  {path:'',component:CartComponent},
  {path:'order-three',component:OrderThreeComponent},
  {path:'order-two',component:OrderTwoComponent},
  {path:'order',component:OrderComponent},
  {path:'edit',component:EditComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'looking',component:LookingComponent},
  {path:'receipies',component:ReceipiesComponent},
  {path:'fresh',component:FreshComponent},
  {path:'description',component:DescriptionComponent},
  {path:'home',component:HomeComponent},
  {path:'Account',component:AccountComponent},
  {path:'Employee',component:EmployeeComponent},
  {path:'Phone',component:PhoneComponent},
  {path:'Number',component:NumberComponent},
  {path:'Otp',component:OtpComponent},
  {path:'basket',component:BasketComponent},
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
