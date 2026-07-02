package com.example.hospital.model;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Doctors implements Serializable {
    private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String doctorName;
	private String experience;
	private String specialization;
	private String qualification;
	private Integer age;
	private String image;
	@JsonIgnore
	@OneToMany(mappedBy = "doctors")
	private List<Appointments> appointments;
	
	public Doctors(String doctorName, String experience, String specialization, String qualification, Integer age,
			String image, List<Appointments> appointments) {
		super();
		this.doctorName = doctorName;
		this.experience = experience;
		this.specialization = specialization;
		this.qualification = qualification;
		this.age = age;
		this.image = image;
		this.appointments = appointments;
	}
	public Doctors() {
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
	public String getDoctorName() {
		return doctorName;
	}
	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	public String getSpecialization() {
		return specialization;
	}
	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	
	

}
