package com.example.demo.controller;

import com.example.demo.model.GymLogbook;
import com.example.demo.model.NutritionDiary;
import com.example.demo.model.User;
import com.example.demo.repository.GymLogbookRepository;
import com.example.demo.repository.NutritionDiaryRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/user")
public class UserLogController {

    @Autowired
    private GymLogbookRepository gymLogbookRepository;

    @Autowired
    private NutritionDiaryRepository nutritionDiaryRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/{userId}/gymLogs")
    public GymLogbook saveGymLog(@PathVariable String userId, @RequestBody GymLogbook gymLogbook){
        gymLogbook.setUserId(userId);
        if(gymLogbook.getDate() == null) {
            gymLogbook.setDate(LocalDate.now());
        }
        return gymLogbookRepository.save(gymLogbook);
    }

    @GetMapping("/{userId}/nutritionDiary")
    public NutritionDiary saveNutritionDiary(@PathVariable String userId, @RequestBody NutritionDiary nutritionDiary){
        nutritionDiary.setUserId(userId);
        if(nutritionDiary.getDate() == null) {
            nutritionDiary.setDate(LocalDate.now());
        }
        return nutritionDiaryRepository.save(nutritionDiary);
    }

    @GetMapping("/{userId}/nutritionDiaries")
    public List<NutritionDiary> getNutritionDiaries(@PathVariable String userId) {
        return nutritionDiaryRepository.findByUserId(userId);
    }

    @GetMapping("/{userId}/updateWeight")
    public User updateWeight(@PathVariable String userId, @RequestBody User updateUser){
        User user = userRepository.findById(userId).orElse(null);
        if(user != null){
            user.setWeight(updateUser.getWeight());
            return userRepository.save(user);
        }
        return null;
    }
}
