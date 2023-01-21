import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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

  // get list of all customer
  private getCustmores() {
    this.custmoreService.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  // navigate the customer to update
  updateCustomer(id: number) {
    this.router.navigate(['customer/register', id]);
  }

  @ViewChild("popup_mssg") popup!: ElementRef;

  delete_id!: number;

  // open the delete popup
  delete_popup(id: number) {
    setTimeout(() => {
      this.popup.nativeElement.style = 'display:flex';
    }, 100);
    this.delete_id = id;
  }

  // close the delete popup
  backToCustmer(e: any) {
    this.popup.nativeElement.style = 'display:none';
  }

  // navigate the customer to delete function
  delete_custmore(e: any) {
    this.deleteCustomer(this.delete_id);
    this.popup.nativeElement.style = 'display:none';
  }

  // delete the customer
  deleteCustomer(id: number) {
    this.custmoreService.deleteCustomer(id).subscribe(data => {
      console.log(data);
      this.getCustmores();
    })
  }
}
