package com.crud.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(length = 30, nullable = false)
	@Size(min = 2,max = 30)
	private String firstName;

	@Column(length = 30, nullable = false)
	@Size(min = 2,max = 30)
	private String lastName;

	@Column(nullable = false, columnDefinition = "DATE")
	@Temporal(TemporalType.DATE)
	private String dateOfBirth;

	@Column(length = 17, nullable = false, unique = true)
	@Size(min = 10, max = 17)
	private String mobileNumber;

	@Column(columnDefinition = "TEXT")
	private String addressOne;

	@Column(columnDefinition = "TEXT")
	private String addressTwo;

	@Column(columnDefinition = "SMALLINT", nullable = false)
	@Min(1)
	@Max(150)
	private int age;   

	@Column(nullable = false, columnDefinition = "ENUM('male','female')")
	private String gender;

	@Column(length = 50, nullable = false, unique = true)
	private String email;

}