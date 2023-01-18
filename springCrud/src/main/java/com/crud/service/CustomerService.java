package com.crud.service;

import com.crud.model.Customer;

public interface CustomerService {

	// adding customer
	public Object addCustomer(Customer customer);

	// getting list of all customer adding customer
	public Object getCustomer();

	// get customer by id
	public Object getCustomerById(int id);

	// updating customer
	public Object updateCustomer(Customer customer, int id);

	// deleting customer
	public Object deleteCustomer(Integer id);

}