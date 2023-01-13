import { AfterViewInit, Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creat-customer',
  templateUrl: './creat-customer.component.html',
  styleUrls: ['./creat-customer.component.css']
})
export class CreatCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  constructor(private customerService: CustomerService, private router: Router, private render: Renderer2,private formBuilder: FormBuilder) { }

  onSubmit() {
    console.log(this.customer);
    this.customerService.createCustomre(this.customer).subscribe(data => {
      console.log(data);
      this.router.navigate(['/customer']);
    },
      error => console.log(error));
  }

  form!: FormGroup;

  ngOnInit(): void {
  }
}
