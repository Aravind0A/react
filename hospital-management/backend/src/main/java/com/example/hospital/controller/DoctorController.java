package com.example.hospital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.hospital.model.Doctors;
import com.example.hospital.repository.DoctorRepository;

@RestController
public class DoctorController {

	  @Autowired
	  private DoctorRepository doctorRepository;
	  
	@GetMapping("/doctorList")
	public List<Doctors> getDoctors() {
		return doctorRepository.findAll();
	}
	
	
}
