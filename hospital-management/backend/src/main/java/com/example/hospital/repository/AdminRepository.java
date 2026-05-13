package com.example.hospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.hospital.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long>{

	Admin findByEmail(String email);
}
