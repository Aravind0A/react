package com.example.hospital.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.hospital.model.Appointments;

public interface AppoinmentsRepository extends JpaRepository<Appointments, Long>{
	
	@Query("SELECT a FROM Appointments a WHERE a.users.id = :id")
	List<Appointments> findByUsersId(@Param("id") Long id);
	
	@Query()
	List<Appointments> findByAppointmentDate(LocalDate date);
}
