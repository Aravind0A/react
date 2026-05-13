package com.example.hospital.model;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class UserDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate dob;
	private String address;
	private String email;
	private String password;
	@JsonIgnore
	@OneToMany(mappedBy = "users")
	private List<Appointments> appointments;
	private String token;
	
	public UserDetails(String name, LocalDate dob, String address, String email, String password,
			List<Appointments> appointments) {
		super();
		this.name = name;
		this.dob = dob;
		this.address = address;
		this.email = email;
		this.password = password;
		this.appointments = appointments;
	}
	public UserDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public List<Appointments> getAppointments() {
		return appointments;
	}
	public void setAppointments(List<Appointments> appointments) {
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
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	
	
}
