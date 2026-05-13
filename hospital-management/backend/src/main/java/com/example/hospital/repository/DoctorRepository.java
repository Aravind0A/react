package com.example.hospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.hospital.model.Doctors;

public interface DoctorRepository extends JpaRepository<Doctors, Long>{

}
