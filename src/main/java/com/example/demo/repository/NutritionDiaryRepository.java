package com.example.demo.repository;

import com.example.demo.model.NutritionDiary;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.time.LocalDate;
import java.util.List;

public interface NutritionDiaryRepository extends MongoRepository<NutritionDiary, String> {
    List<NutritionDiary> findByUserId(String userId);
    NutritionDiary findByUserIdAndDate(String userId, LocalDate date);
}
