package com.example.hospital.dto;

import java.time.LocalDate;
import java.util.List;

import com.example.hospital.model.Appointments;
import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.OneToMany;

public class UserDto {
	private Long id;
	private String name;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate dob;
	private String address;
	private String email;
	private String password;
	@OneToMany(mappedBy = "users")
	private List<Appointments> appointments;
	private String token;
	public UserDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserDto(String name, LocalDate dob, String address, String email, String password,
			List<Appointments> appointments) {
		super();
		this.name = name;
		this.dob = dob;
		this.address = address;
		this.email = email;
		this.password = password;
		this.appointments = appointments;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public List<Appointments> getAppointments() {
		return appointments;
	}
	public void setAppointments(List<Appointments> appointments) {
		this.appointments = appointments;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	
	
}
