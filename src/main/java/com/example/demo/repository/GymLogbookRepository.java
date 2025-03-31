package com.example.demo.repository;

import com.example.demo.model.GymLogbook;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.time.LocalDate;
import java.util.List;

public interface GymLogbookRepository extends MongoRepository<GymLogbook, String> {
    List<GymLogbook> findByUserId(String userId);
    GymLogbook findByUserIdAndDate(String userId, LocalDate date);
}
