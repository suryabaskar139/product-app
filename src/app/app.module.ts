import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './Login/account/account.component';
import { PhoneComponent } from './Login/phone/phone.component';
import { EmployeeComponent } from './Login/employee/employee.component';
import { NumberComponent } from './Login/number/number.component';
import { OtpComponent } from './Login/otp/otp.component';
import { FreshComponent } from './fresh/fresh.component';
import { BasketComponent } from './basket/basket.component';
import { DescriptionComponent } from './description/description.component';
import { LookingComponent } from './looking/looking.component';
import { ReceipiesComponent } from './receipies/receipies.component';
import { SidebarComponent } from './Dashboard/sidebar/sidebar.component';
import { EditComponent } from './Dashboard/edit/edit.component';
import { OrderComponent } from './Dashboard/order/order.component';
import { OrderTwoComponent } from './Dashboard/order-two/order-two.component';
import { OrderThreeComponent } from './Dashboard/order-three/order-three.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { PaymentComponent } from './Dashboard/payment/payment.component';
import { LoginBarComponent } from './login-bar/login-bar.component';
import { OrderConfirmComponent } from './Dashboard/order-confirm/order-confirm.component';
import { OrderCompleteComponent } from './Dashboard/order-complete/order-complete.component';
import { OrderInvoiceComponent } from './Dashboard/order-invoice/order-invoice.component';
import { WalletComponent } from './Dashboard/wallet/wallet.component';
import { AddressComponent } from './Dashboard/address/address.component';
import { FavouriteComponent } from './Dashboard/favourite/favourite.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AccountComponent,
    PhoneComponent,
    EmployeeComponent,
    NumberComponent,
    OtpComponent,
    FreshComponent,
    BasketComponent,
    DescriptionComponent,
    LookingComponent,
    ReceipiesComponent,
    SidebarComponent,
    EditComponent,
    OrderComponent,
    OrderTwoComponent,
    OrderThreeComponent,
    CartComponent,
    FooterComponent,
    SearchComponent,
    PaymentComponent,
    LoginBarComponent,
    OrderConfirmComponent,
    OrderCompleteComponent,
    OrderInvoiceComponent,
    WalletComponent,
    AddressComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
