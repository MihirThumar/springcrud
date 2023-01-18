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
	private String firstName;

	@Column(length = 30, nullable = false)
	private String lastName;

	@Column(nullable = false, columnDefinition = "DATE")
	@Temporal(TemporalType.DATE)
	private String dateOfBirth;

	@Column(length = 17, nullable = false, unique = true)
	@Size(min = 10, max = 17)
	private String mobileNumber;

	@Column(length = 255)
	private String addressOne;

	@Column(length = 255)
	private String addressTwo;

	@Column(columnDefinition = "SMALLINT", nullable = false)
	@Min(1)
	@Max(99)
	private int age;

	@Column(nullable = false, columnDefinition = "ENUM('male','female')")
	private String gender;

	@Column(length = 50, nullable = false, unique = true)
	private String email;

}