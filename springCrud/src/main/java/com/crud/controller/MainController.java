package com.crud.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.crud.model.Customer;
import com.crud.serviceImpl.CustomerServiceImpl;
import com.crud.system.RestResponse;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MainController {

	// need to call service instead of service
	@Autowired
	private CustomerServiceImpl customerServiceImpl;

	@PostMapping("/add-customer")
	public Object registerCustomer(@RequestBody Customer customer) {
		try {
			return customerServiceImpl.addCustomer(customer);
		} catch (Exception e) {
			e.printStackTrace();
			return new RestResponse().setCode(404).setStatus(false)
					.setMessage("Something wrong in sending request, try sometime later").setData(e.getMessage());
		}
	}

	@GetMapping("/view-customer")
	public Object getAllCustomer() {
		try {
			return customerServiceImpl.getCustomer();
		} catch (Exception e) {
			e.printStackTrace();
			return new RestResponse().setCode(404).setStatus(false)
					.setMessage("Something wrong in sending request, try sometime later").setData(e.getMessage());
		}
	}

	@GetMapping("/view-customer/{id}")
	public Object getCustomerById(@PathVariable String id) {
		int parseInt = Integer.parseInt(id);
		try {
			return customerServiceImpl.getCustomerById(parseInt);
		} catch (Exception e) {
			e.printStackTrace();
			return new RestResponse().setCode(404).setStatus(false)
					.setMessage("Something wrong in sending request, try sometime later").setData(e.getMessage());
		}
	}

	@PutMapping("/update-customer/{id}")
	public Object editCustomer(@PathVariable int id, @RequestBody Customer customer) {
		try {
			return customerServiceImpl.updateCustomer(customer, id);
		} catch (Exception e) {
			e.printStackTrace();
			return new RestResponse().setCode(404).setStatus(false)
					.setMessage("Something wrong in sending request, try sometime later").setData(e.getMessage());
		}
	}

	@DeleteMapping("/delete-customer/{id}")
	public Object deleteCustomer(@PathVariable int id) {
		try {
			return customerServiceImpl.deleteCustomer(id);
		} catch (Exception e) {
			e.printStackTrace();
			return new RestResponse().setCode(404).setStatus(false)
					.setMessage("Something wrong in sending request, try sometime later").setData(e.getMessage());
		}
	}

}