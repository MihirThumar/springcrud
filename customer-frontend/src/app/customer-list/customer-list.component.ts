import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
        c.dateOfBirth = day + '-' + month + '-' + o_date.getFullYear();
      }
    });
  }

  updateCustomer(id: number) {
    this.router.navigate(['customer/register', id]);
  }

  @ViewChild("popup_mssg") popup!: ElementRef;

  delete_id!: number;

  delete_popup(e: any, id: number) {
    setTimeout(() => {
      this.popup.nativeElement.style = 'display:flex';
    }, 100);
    this.delete_id = id;
  }

  backToCustmer(e: any) {
    this.popup.nativeElement.style = 'display:none';
  }

  delete_custmore(e: any) {
    this.deleteCustomer(this.delete_id);
    this.popup.nativeElement.style = 'display:none';
  }

  deleteCustomer(id: number) {
    this.custmoreService.deleteCustomer(id).subscribe(data => {
      console.log(data);
      this.getCustmores();
    })
  }
}
