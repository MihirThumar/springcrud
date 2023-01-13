package com.crud.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crud.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

}