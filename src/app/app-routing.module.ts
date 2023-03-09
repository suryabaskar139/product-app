import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { CartComponent } from './cart/cart.component';
import { AddressComponent } from './Dashboard/address/address.component';
import { EditComponent } from './Dashboard/edit/edit.component';
import { FavouriteComponent } from './Dashboard/favourite/favourite.component';
import { FeedbackComponent } from './Dashboard/feedback/feedback.component';
import { HelpComponent } from './Dashboard/help/help.component';
import { OrderCompleteComponent } from './Dashboard/order-complete/order-complete.component';
import { OrderConfirmComponent } from './Dashboard/order-confirm/order-confirm.component';
import { OrderInvoiceComponent } from './Dashboard/order-invoice/order-invoice.component';
import { OrderThreeComponent } from './Dashboard/order-three/order-three.component';
import { OrderTwoComponent } from './Dashboard/order-two/order-two.component';
import { OrderComponent } from './Dashboard/order/order.component';
import { PaymentComponent } from './Dashboard/payment/payment.component';
import { PointsComponent } from './Dashboard/points/points.component';
import { SavedAddressComponent } from './Dashboard/saved-address/saved-address.component';
import { SavedFavouritesComponent } from './Dashboard/saved-favourites/saved-favourites.component';
import { SettingsComponent } from './Dashboard/settings/settings.component';
import { SidebarComponent } from './Dashboard/sidebar/sidebar.component';
import { WalletComponent } from './Dashboard/wallet/wallet.component';
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
import { SearchComponent } from './search/search.component';
import { TabComponent } from './tab/tab.component';


const routes: Routes = [
  {path:'',component:DescriptionComponent},
  {path:'tab',component:TabComponent},
  {path:'search',component:SearchComponent},
  {path:'payment',component:PaymentComponent},
  {path:'cart',component:CartComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'settings',component:SettingsComponent},
  {path:'help',component:HelpComponent},
  {path:'points',component:PointsComponent},
  {path:'saved-favourites',component:SavedFavouritesComponent},
  {path:'saved-address',component:SavedAddressComponent},
  {path:'address',component:AddressComponent},
  {path:'favourite',component:FavouriteComponent},
  {path:'wallet',component:WalletComponent},
  {path:'invoice',component:OrderInvoiceComponent},
  {path:'order-confirm',component:OrderConfirmComponent},
  {path:'order-complete',component:OrderCompleteComponent},
  {path:'order-three',component:OrderThreeComponent},
  {path:'order-two',component:OrderTwoComponent},
  {path:'order',component:OrderComponent},
  {path:'edit',component:EditComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'looking',component:LookingComponent},
  {path:'receipies',component:ReceipiesComponent},
  {path:'fresh',component:FreshComponent},
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
