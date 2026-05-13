package com.example.hospital.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.hospital.model.Admin;
import com.example.hospital.model.Appointments;
import com.example.hospital.model.Doctors;
import com.example.hospital.model.UserDetails;
import com.example.hospital.repository.AdminRepository;
import com.example.hospital.repository.AppoinmentsRepository;
import com.example.hospital.repository.DoctorRepository;
import com.example.hospital.repository.UserRepository;

import jakarta.servlet.http.HttpSession;

@Controller
public class AdminController {
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private DoctorRepository doctorRepository;
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private AppoinmentsRepository appoinmentsRepository;
	
	@GetMapping("/admin")
	public String getHomePAge(Model model) {
	
		return "admin";
	}
	@GetMapping("/createAdmin")
	public String getAdminPage(Model model) {
		
		model.addAttribute("admin", "Admin page");
		return "adminLogin";
	}
	
	@PostMapping("/createAdmin")
	public String createAdmin(Admin admin, Model model) {

		Admin admin1 = new Admin();
		admin1.setEmail(admin.getEmail());
		admin1.setPassword(passwordEncoder.encode(admin.getPassword()));
		adminRepository.save(admin1);
		model.addAttribute("message", "admin saved successfully");
		
		return "adminLogin";
	}
	
	@GetMapping("/loginAdmin")
	public String getLogin() {		
		return "login";	
	}
	
	@PostMapping("/loginAdmin")  
	public String loginAdmin(Admin admin, Model model) {
	    Admin existingAdmin = adminRepository.findByEmail(admin.getEmail());
	    if (existingAdmin != null && passwordEncoder.matches(admin.getPassword(), existingAdmin.getPassword())) {
	        return "redirect:/addDoctor";  
	    }
	    model.addAttribute("message", "Invalid email or password");
	    return "login";
	}
	
	
	@GetMapping("/addDoctor")
	public String getAddDoctors() {
		return "addEditDoctor";
	}
	
	@PostMapping("/addDoctor")
	public String addDoctors(Doctors doctors, Model model) {
		Doctors doc = new Doctors();
		doc.setDoctorName(doctors.getDoctorName());
		doc.setAge(doctors.getAge());
		doc.setExperience(doctors.getExperience());
		doc.setQualification(doctors.getQualification());
		doc.setSpecialization(doctors.getSpecialization());
		doc.setImage(doctors.getImage());
		doctorRepository.save(doc);
		model.addAttribute("message", "Doctor saved successfully");
		return "addEditDoctor";
	}
	
	@GetMapping("/doctors")
	public String viewAllDoctor(Doctors doctor, Model model) {
		List<Doctors> doctors = doctorRepository.findAll();
		model.addAttribute("doctors", doctors);
		return "doctors";
	}
	
	
	@GetMapping("/view/doctor/{id}")
	public String viewDoctor(@PathVariable Long id, Model model) {
		Optional<Doctors> doctor = doctorRepository.findById(id);
		if(doctor.isPresent()) {
			model.addAttribute("doctors", doctor.get());
			return "viewDeleteDoctor";

		}else {
			model.addAttribute("message", "Doctor not found");
			return "viewDeleteDoctor";
		}
	}
	
	@GetMapping("/edit/doctor/{id}")
	public String editDoctor(@PathVariable Long id, Model model) {
		Optional<Doctors> doctor1 = doctorRepository.findById(id);
		if(doctor1.isPresent()) {
			
			model.addAttribute("doctors", doctor1.get());
			return "editDoctor";

		}else {
			model.addAttribute("message", "Doctor not found");
			return "redirect:/doctors";
		}
	}
	@PostMapping("/edit/doctor/{id}")
	public String editDoctor(@PathVariable Long id, Doctors doctor, Model model) {
		Optional<Doctors> doctor1 = doctorRepository.findById(id);
		if(doctor1.isPresent()) {
			Doctors doc = doctor1.get();
			doc.setDoctorName(doctor.getDoctorName());
			doc.setAge(doctor.getAge());
			doc.setExperience(doctor.getExperience());
			doc.setQualification(doctor.getQualification());
			doc.setSpecialization(doctor.getSpecialization());
			doctorRepository.save(doc);
			model.addAttribute("message", "Doctor updated successfully");
			model.addAttribute("doctors", doc);
			return "redirect:/doctors";

		}else {
			model.addAttribute("message", "Doctor not found");
			return "editDoctor";
		}
	}
	
	@GetMapping("/users")
	public String getUsers(Model model) {
		List<UserDetails> users = userRepository.findAll();
		model.addAttribute("users", users);
		return "users";
	}
	
	@GetMapping("/view/user/{id}")
	public String viewUser(@PathVariable Long id, Model model) {
		Optional<UserDetails> user = userRepository.findById(id);
		if(user.isPresent()) {
			List<Appointments> appointments = appoinmentsRepository.findByUsersId(id);
			model.addAttribute("user", user.get());

			model.addAttribute("appointments", appointments);
			return "viewUser";
		}else
			model.addAttribute("message", "User not found");
			return "redirect:/users";
	}
	
	@GetMapping("/delete/doctor/{id}")
	public String deleteDoctor(@PathVariable Long id, Model model) {
		Optional<Doctors> doctor = doctorRepository.findById(id);
		if(doctor.isPresent()) {
			model.addAttribute("doctor", doctor.get());
			return "deleteDoctor";
		}
		return "redirect:/doctors";
	}
	@PostMapping("/delete/doctor/{id}")
	public String deleteDoctor(@PathVariable Long id) {
		doctorRepository.deleteById(id);
		return "redirect:/doctors";
	}
	
	
	@GetMapping("/appointments")
	public String getAppointmentsByDate(@RequestParam(required = false) String keyword, Model model) {
	    List<Appointments> appointments = null;
	    
	    if (keyword != null && !keyword.isEmpty()) {
	        LocalDate date = LocalDate.parse(keyword);  
	        if (!date.isBefore(LocalDate.now())) {  
	            appointments = appoinmentsRepository.findByAppointmentDate(date);
	        } else {
	            appointments = List.of();
	            model.addAttribute("message", "Cannot search for past dates");
	        }
	    } else {
	        appointments = appoinmentsRepository.findAll();  
	    }

	    model.addAttribute("appointments", appointments);
	    model.addAttribute("keyword", keyword);  
	    return "appointments";
	}
	
	@GetMapping("/logout")
	public String getAdminLogout(HttpSession session) {
	    session.invalidate();
	    return "redirect:/loginAdmin";
	}
}
