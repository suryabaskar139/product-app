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
    EditComponent
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
