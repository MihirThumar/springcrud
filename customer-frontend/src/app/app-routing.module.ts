import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatCustomerComponent } from './creat-customer/creat-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  { path: 'customer/register', component: CreatCustomerComponent },
  { path: 'customer/register/:id', component: CreatCustomerComponent },
  { path: 'customer', component: CustomerListComponent},
  { path: '', redirectTo: 'customer', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
