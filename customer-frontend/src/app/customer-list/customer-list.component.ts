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

  private getCustmores() {
    this.custmoreService.getCustomers().subscribe(data => {
      this.customers = data;
      for (let c of this.customers) {
        let o_date = new Date(c.dateOfBirth);
        let day: any = o_date.getDate();
        let month: any = o_date.getMonth() + 1;

        if (day < 10) {
          day = '0' + day;
        }
        if (month < 10) {
          month = '0' + month;
        }

        c.dateOfBirth = o_date.getDate() + '-' + month + '-' + o_date.getFullYear();
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
