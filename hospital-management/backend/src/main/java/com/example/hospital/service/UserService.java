package com.example.hospital.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.hospital.dto.UserDto;
import com.example.hospital.model.UserDetails;
import com.example.hospital.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private UserRepository userRepository;
	
	public UserDetails save(UserDto userDto) {
		UserDetails details = new UserDetails(userDto.getName(), userDto.getDob(), userDto.getAddress(), userDto.getEmail(),
				passwordEncoder.encode(userDto.getPassword()), userDto.getAppointments());
		return userRepository.save(details);
	}
}
