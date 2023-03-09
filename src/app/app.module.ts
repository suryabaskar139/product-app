import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgOtpInputModule } from  'ng-otp-input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from "@angular/forms";
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
import { SavedAddressComponent } from './Dashboard/saved-address/saved-address.component';
import { SavedFavouritesComponent } from './Dashboard/saved-favourites/saved-favourites.component';
import { HelpComponent } from './Dashboard/help/help.component';
import { PointsComponent } from './Dashboard/points/points.component';
import { SettingsComponent } from './Dashboard/settings/settings.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { FeedbackComponent } from './Dashboard/feedback/feedback.component';
import { TabComponent } from './tab/tab.component';

export function playerFactory() {
  return player;
}

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
    FavouriteComponent,
    SavedAddressComponent,
    SavedFavouritesComponent,
    HelpComponent,
    PointsComponent,
    SettingsComponent,
    FeedbackComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    CarouselModule,
    FormsModule,
    NgOtpInputModule,
    LottieModule.forRoot({ player: playerFactory }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
