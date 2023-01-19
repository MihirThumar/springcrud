package com.crud.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crud.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

	public List<Customer> findAllByOrderByIdDesc();
	
}