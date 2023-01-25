package com.crud.serviceImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.dao.CustomerRepository;
import com.crud.model.Customer;
import com.crud.service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository customerRepository;

	// adding customer
	@Override
	public Customer addCustomer(Customer customer) {
		try {
			boolean existsByEmail = customerRepository.existsByEmail(customer.getEmail());
			boolean existsByMobileNumber = customerRepository.existsByMobileNumber(customer.getMobileNumber());

			String errorMssg = "";
			if (existsByEmail == true) {
				errorMssg = "This email is already exists";
				throw new RuntimeException(errorMssg);
			}
			if (existsByMobileNumber == true) {
				errorMssg = "This mobile number is already exists";
				throw new RuntimeException(errorMssg);
			}

			return customerRepository.save(customer);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

	// getting list of all customer adding customer
	@Override
	public List<Customer> getCustomer() {
		try {
			List<Customer> findAllByDescId = customerRepository.findAllByOrderByIdDesc();
			return findAllByDescId;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

	// get customer by id
	public Customer getCustomerById(int id) {
		try {
			Optional<Customer> findById = customerRepository.findById(id);
			return findById.get();
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

	// updating customer
	@Override
	public Customer updateCustomer(Customer newCustomer, int id) {
		try {
			Optional<Customer> optional = customerRepository.findById(id);
			Customer customer = optional.get();
			boolean exitsByEmail = customerRepository.existsByEmail(newCustomer.getEmail());
			boolean existsByMobileNumber = customerRepository.existsByMobileNumber(newCustomer.getMobileNumber());
			String errorMssg = "";
			if (exitsByEmail && !(customer.getEmail().equals(newCustomer.getEmail()))) {
				errorMssg = "This email is already exists";
				throw new RuntimeException(errorMssg);
			}
			if (existsByMobileNumber && !(customer.getMobileNumber().equals(newCustomer.getMobileNumber()))) {
				errorMssg = "This mobile number is already exists";
				throw new RuntimeException(errorMssg);
			}
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
			return save;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

	// deleting customer
	@Override
	public Map<String, Boolean> deleteCustomer(Integer id) {
		try {
			Optional<Customer> customer = customerRepository.findById(id);
			customerRepository.delete(customer.get());
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return response;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

}
