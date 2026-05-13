package com.example.hospital.controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.example.hospital.model.UserDetails;
import com.example.hospital.repository.UserRepository;
import com.example.hospital.service.CustomUserDetailsService;
import com.example.hospital.service.TokenGenerator;

@RestController
public class UserController {

    private final CustomUserDetailsService customUserDetailsService;
	
	
	@Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private TokenGenerator tokenGenerator;


    UserController(CustomUserDetailsService customUserDetailsService) {
        this.customUserDetailsService = customUserDetailsService;
    }
       

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDetails user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully");
    }
   
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDetails user) {
        String token = tokenGenerator.generateToken(user.getEmail(), user.getPassword());
        UserDetails details = userRepository.findByEmail(user.getEmail());
        if (token != null) {
            return ResponseEntity.ok(Map.of(
            		"token", token,
            		"userId", details.getId()));
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }

    @PostMapping("/logout")
    public String logout(@RequestHeader("Authorization") String authHeader) {
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            tokenGenerator.invalidateToken(token);
            return "Logout successful";
        }
        return "Invalid token";
    }
    
    @GetMapping("/user/{id}")
    public ResponseEntity<?> getUser(@PathVariable Long id) {
    	Optional<UserDetails> details = userRepository.findById(id);
    	if(details.isPresent())
    		return ResponseEntity.ok(details.get());
    	else
    		return ResponseEntity.status(404).body("user not found");
    }
    
    @PutMapping("/user/passwordChange/{id}")
    public String changePassword(@PathVariable Long id, @RequestBody UserDetails details) {
    	
    	Optional<UserDetails> user = userRepository.findById(id);
    	if(user.isPresent()) {
    		UserDetails userDetails = user.get();
    		
    		if (passwordEncoder.matches(details.getPassword(),userDetails.getPassword())) {
    			 
                return "New password cannot be same as last password";
            } else {
    		userDetails.setPassword(passwordEncoder.encode(details.getPassword()));
            userRepository.save(userDetails);
            return "Password changed successfully";
            }
    		
    	} else {
    		return "user not found";
    	}
    	
    }
    
    
	@GetMapping("/user")
	public String getUser() {
		return "user";
	}
	
	
	@GetMapping("/bookAppointments")
	public String bookAppointments() {
		return "bookAppointments";
	}
	
	@GetMapping("/myAppointments")
	public String myAppointments() {
		return "myAppointments";
	}
	
	@GetMapping("/profile")
	public String getProfile() {
		return "userProfile";
	}
}
