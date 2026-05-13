package com.example.hospital.model;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Appointments {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private LocalDate appointmentDate;
	private LocalTime time;
	@ManyToOne
	@JoinColumn(name = "docId")
	private Doctors doctors;
	@ManyToOne
	@JoinColumn(name = "userId")
	private UserDetails users;
	public Appointments() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Appointments(LocalDate appointmentDate, LocalTime time, Doctors doctors, UserDetails users) {
		super();
		this.appointmentDate = appointmentDate;
		this.time = time;
		this.doctors = doctors;
		this.users = users;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public LocalDate getAppointmentDate() {
		return appointmentDate;
	}
	public void setAppointmentDate(LocalDate appointmentDate) {
		this.appointmentDate = appointmentDate;
	}
	public LocalTime getTime() {
		return time;
	}
	public void setTime(LocalTime time) {
		this.time = time;
	}
	public Doctors getDoctors() {
		return doctors;
	}
	public void setDoctors(Doctors doctors) {
		this.doctors = doctors;
	}
	public UserDetails getUsers() {
		return users;
	}
	public void setUsers(UserDetails users) {
		this.users = users;
	}
	
	
}
