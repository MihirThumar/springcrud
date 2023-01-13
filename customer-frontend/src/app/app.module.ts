import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreatCustomerComponent } from './creat-customer/creat-customer.component';
import { CustomerService } from './customer.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UpdateCustomerComponent,
    CustomerListComponent,
    CreatCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
