import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id!: number;
  customer: Customer = new Customer();

  constructor(private customerService: CustomerService,private router: Router,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data=>{
      this.customer = data;
    }, error=>console.log(error));
  }

  onUpdate() {
    console.log(this.customer);
    this.customerService.updateCustomer(this.id,this.customer).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/customer']);
    },
    error=>console.log(error));
  }

}
