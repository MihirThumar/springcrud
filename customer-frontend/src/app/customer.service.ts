import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // private subject = new Subject<any>();

  // sendClickEvent(){
  //   this.subject.next();
  // }
  // getClickEvent(): Observable<any> {
  //   return this.subject.asObservable();
  // }

  private url = {
    getData: "http://localhost:8080/view-customer",
    getById: "http://localhost:8080/view-customer",
    post: "http://localhost:8080/add-customer",
    put: "http://localhost:8080/update-customer",
    delete: "http://localhost:8080/delete-customer"
  };

  constructor(private httpclient: HttpClient) { }

  getCustomers(): Observable<any> {
    return this.httpclient.get(`${this.url.getData}`);
  }

  getCustomerById(id: number): Observable<Customer>{
    return this.httpclient.get<Customer>(`${this.url.getById}/${id}`);
  }

  createCustomre(customer: Customer): Observable<Object>{
    return this.httpclient.post(`${this.url.post}`,customer);
  }

  updateCustomer(id: number,customer: Customer): Observable<Object>{
    return this.httpclient.put(`${this.url.put}/${id}`,customer);
  }

  deleteCustomer(id: number): Observable<Object>{
    return this.httpclient.delete(`${this.url.delete}/${id }`)
  }

}
