package com.crud.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.crud.dao.CustomerRepository;
import com.crud.model.Customer;
import com.crud.service.CustomerService;
import com.crud.system.RestResponse;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository customerRepository;

	// adding customer
	@Override
	public Object addCustomer(Customer customer) {
		try {
			Object addCustomer = customerRepository.save(customer);
			return addCustomer;
		} catch (Exception e) {
			e.getMessage();
			return new ResponseEntity<Object>(e.getMessage(), new HttpHeaders(), 404);
		}
	}

	// getting list of all customer adding customer
	@Override
	public Object getCustomer() {
		try {
			List<Customer> findAll = customerRepository.findAll();
			return findAll;
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Object>(e.getMessage(), new HttpHeaders(), 404);
		}
	}

	// get customer by id
	public Object getCustomerById(int id) {
		try {
			Optional<Customer> customer = customerRepository.findById(id);
			return customer;
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Object>(e.getMessage(), new HttpHeaders(), 404);
		}
	}

	// updating customer
	@Override
	public Object updateCustomer(Customer newCustomer, int id) {
		try {
			Optional<Customer> optional = customerRepository.findById(id);
			Customer customer = optional.get();
			customer.setFirstName(newCustomer.getFirstName());
			customer.setLastName(newCustomer.getLastName());
			customer.setAddressOne(newCustomer.getAddressOne());
			customer.setAddressTwo(newCustomer.getAddressTwo());
			customer.setAge(newCustomer.getAge());
			customer.setDateOfBirth(newCustomer.getDateOfBirth());
			customer.setEmail(newCustomer.getEmail());
			customer.setMobileNumber(newCustomer.getMobileNumber());
			customer.setGender(newCustomer.getGender());
			Customer save = customerRepository.save(customer);
			return new RestResponse().setCode(202).setStatus(true).setMessage("Succesfully updated the customer")
					.setData(save);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Object>(e.getMessage(), new HttpHeaders(), 404);
		}
	}

	// deleting customer
	@Override
	public Object deleteCustomer(Integer id) {
		try {
			Optional<Customer> customer = customerRepository.findById(id);
			customerRepository.delete(customer.get());
			return new RestResponse().setCode(202).setStatus(true).setMessage("Succesfully delete the customer")
					.setData(customer);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Object>(e.getMessage(), new HttpHeaders(), 404);
		}
	}

}
