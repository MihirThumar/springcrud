import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  constructor(private router: Router, private custmoreService: CustomerService) {
    this.getCustmores();
  }

  customers: Customer[] = [];
  date: any;
  arr_date: [] = [];
  n_date: any;
  private getCustmores() {
    this.custmoreService.getCustomers().subscribe(data => {
      this.customers = data;
      for (let c of this.customers) {
        let o_date = new Date(c.dateOfBirth);
        this.n_date = o_date.getDate() + '/' + o_date.getMonth() + 1 + '/' + o_date.getFullYear();
        this.arr_date.push(this.n_date);
      }
    });
  }

  updateCustomer(id: number) {
    this.router.navigate(['update-customer', id]);
  }

  deleteCustomer(id: number) {
    this.custmoreService.deleteCustomer(id).subscribe(data => {
      console.log(data);
      this.getCustmores();
    })
  }

}
