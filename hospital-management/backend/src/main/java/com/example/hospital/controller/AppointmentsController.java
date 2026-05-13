package com.example.hospital.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.hospital.dto.AppointmentsDto;
import com.example.hospital.model.Appointments;
import com.example.hospital.model.Doctors;
import com.example.hospital.model.UserDetails;
import com.example.hospital.repository.AppoinmentsRepository;
import com.example.hospital.repository.DoctorRepository;
import com.example.hospital.repository.UserRepository;

@RestController
public class AppointmentsController {
	
	@Autowired
	private AppoinmentsRepository appointmentsRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private DoctorRepository doctorRepository;
	
	@PostMapping("/bookappointments")
	public Appointments bookAppointment(@RequestBody AppointmentsDto dto) {
		
		UserDetails user = userRepository.findById(dto.getUserId()).orElse(null);
        Doctors doctor = doctorRepository.findById(dto.getDoctorId()).orElse(null);

        if (user == null) System.out.println("User not found");
        if (doctor == null) System.out.println("Doctor not found");
        
        Appointments appointments2 = new Appointments();
        appointments2.setUsers(user);
        appointments2.setDoctors(doctor);
        appointments2.setAppointmentDate(dto.getAppointmentDate());
        appointments2.setTime(dto.getTime());
        
		return appointmentsRepository.save(appointments2);
        
		
	}
	
	@GetMapping("/allAppointments/{id}")
	public List<Appointments> getAllAppointments(@PathVariable Long id) {
		
		return appointmentsRepository.findByUsersId(id);
	}
	
	
	
	@DeleteMapping("/appointments/{id}")
	public String cancelAppointmentsByDate(@PathVariable Long id){
		Appointments appointments = appointmentsRepository.findById(id).get();
		
		if(appointments.getAppointmentDate().isAfter(LocalDate.now())) {
			appointmentsRepository.deleteById(id);
			return "Appointment Cancelled";
		} else {
			return "Appointment already over";
		}
		
		
	}
}
