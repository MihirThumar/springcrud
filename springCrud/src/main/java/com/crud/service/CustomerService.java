package com.crud.service;

import com.crud.model.Customer;

public interface CustomerService {

//	adding customer
	public Object addCustomer(Customer customer);

//	getting list of all customeradding customer
	public Object getCustomer();

//	get customer by id	
	public Object getCustomerById(int id);
	
//	updatting customer
	public Object updateCustomer(Customer customer,int id);

//	deletting customer
	public Object deleteCustomer(Integer id);

}