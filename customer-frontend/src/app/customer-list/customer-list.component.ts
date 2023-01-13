import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent  {

  customers: Customer[] = [];

  constructor(private router: Router, private custmoreService: CustomerService) {
    this.getCustmores();
  }

  private getCustmores() {
    this.custmoreService.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  updateCustomer(id: number){
    this.router.navigate(['update-customer',id]);
  }

  deleteCustomer(id: number){
    this.custmoreService.deleteCustomer(id).subscribe(data => {
      console.log(data);
      this.getCustmores();
    })
  }

}
