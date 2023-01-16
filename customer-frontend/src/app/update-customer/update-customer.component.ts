import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id!: number;
  customer: Customer = new Customer();
  mssg: string = "";
  minDate: any = "1900-01-01";
  maxDate: any = "2023-01-31";
  dateMssg: any = "";
  newDate: any;
  m_Date: any;

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data => {
      this.customer = data;
    }, error => console.log(error));
  }

  onUpdate() {
    this.newDate = this.dateOfBirth?.value;
    let now_Date = new Date();
    let d_input = new Date(this.newDate);
    this.m_Date = d_input.getFullYear();


    if (this.form.valid) {
      if (d_input.getFullYear() <= now_Date.getFullYear()) {
        if (this.m_Date >= 1940) {
          console.log(this.customer);
          this.customerService.createCustomre(this.customer).subscribe(data => {
            console.log(data);
            this.router.navigate(['/customer']);
          },
            error => console.log(error));
        } else {
          this.dateMssg = "Below 1950 date is not allowed";
        }
      } else {
        this.dateMssg = "Futuredate is not allowed";
      }
    } else {
      this.mssg = 'Please fill all the fields with valid information';
    }
  }


  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    mobileNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(17)]),
    addressOne: new FormControl('', [Validators.required]),
    addressTwo: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(1), Validators.minLength(1), Validators.maxLength(11)]),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  get control() {
    return this.form.controls;
  }
  get firstName() {
    return this.form.get('firstName');
  }
  get lastName() {
    return this.form.get('lastName');
  }
  get dateOfBirth() {
    return this.form.get('dateOfBirth');
  }
  get mobileNumber() {
    return this.form.get('mobileNumber');
  }
  get addressOne() {
    return this.form.get('addressOne');
  }
  get addressTwo() {
    return this.form.get('addressTwo');
  }
  get age() {
    return this.form.get('age');
  }
  get gender() {
    return this.form.get('gender');
  }
  get email() {
    return this.form.get('email');
  }


}
