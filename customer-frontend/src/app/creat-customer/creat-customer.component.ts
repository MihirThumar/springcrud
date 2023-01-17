import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creat-customer',
  templateUrl: './creat-customer.component.html',
  styleUrls: ['./creat-customer.component.css']
})
export class CreatCustomerComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    let today: any = new Date();
    let day: string | number= today.getDate();
    let month: any = today.getMonth() + 1;
    let year: string | number = today.getFullYear();

    if(day < 10){
      day = '0' + day;
    }
    if(month < 10) {
      month = '0' + month;
    }
    today = year + '-' + month + '-' + day;
    document.getElementById('dateofbirth')?.setAttribute('max',today);
    this.maxDate = today;
  }

  mssg: string = "";
  isSubmitted: boolean = false;
  minDate: any = "1900-01-01";
  maxDate: any;
  dateMssg: any = "";
  newDate: any;
  m_Date: any;
  email_error_mssg: any;
  number_error_mssg: any;
  // this.minDate < !this.dateOfBirth < this.maxDate
  onSubmit() {
    this.email_error_mssg = "";
    this.number_error_mssg = "";
    this.newDate = this.dateOfBirth?.value;
    let now_Date = new Date();
    let d_input = new Date(this.newDate);
    this.m_Date = d_input.getFullYear();
    
    if (this.form.valid) {
      if (this.newDate <= this.maxDate) {
        if (this.m_Date >= 1950) {
          this.customerService.createCustomre(this.customer).subscribe(data => {
            console.log(data);
            this.router.navigate(['/customer']);
          },
            error => {
              console.log(error.error);
              if(error.error == 'could not execute statement; SQL [n/a]; constraint [customer.UK_dwk6cx0afu8bs9o4t536v1j5v]'){
                this.email_error_mssg = "This emial is already exist";
              }
              if(error.error == 'could not execute statement; SQL [n/a]; constraint [customer.UK_5v8hijx47m783qo8i4sox2n5t]'){
                this.number_error_mssg = 'This number is already exist';
              }
            });

        } else {
          this.dateMssg = "Below 1950 date is not allowed";
        }
      } else {
        this.dateMssg = "Future date is not allowed";
      }
    } else {
      this.mssg = 'Please fill all the fields with valid information';
    }
  }

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl(new Date(), [Validators.required]),
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

  first_name_pattern: any = new RegExp(/^[a-zA-Z!@#$%\^&*)(+=._-]*$/);
  previous_pattern: any = "";
  first_func(e: any) {
    let first = this.firstName?.value;
    if(this.first_name_pattern.test(first)){
      this.previous_pattern = first;
    }
    e.target.value = this.previous_pattern;
  }

  last_func(e:any) {
    let last = this.lastName?.value;
    if(this.first_name_pattern.test(last)){
      this.previous_pattern = last;
    }
    e.target.value = this.previous_pattern;
  }

}
