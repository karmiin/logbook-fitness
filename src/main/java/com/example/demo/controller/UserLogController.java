// File: /src/main/java/com/example/demo/controller/UserLogController.java
package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repository.GymLogbookRepository;
import com.example.demo.repository.NutritionDiaryRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

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

    // GET /api/user?userId=${userId}
    @GetMapping("")
    public ResponseEntity<User> getUser(@RequestParam String userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        return optionalUser.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User newUser) {
        if(userRepository.existsById(newUser.getUserId())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        User savedUser = userRepository.save(newUser);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }

    @GetMapping("/{userId}/gymLogs")
    public ResponseEntity<?> saveGymLog(@PathVariable String userId, @RequestBody com.example.demo.model.GymLogbook gymLogbook) {
        gymLogbook.setUserId(userId);
        if(gymLogbook.getDate() == null) {
            gymLogbook.setDate(LocalDate.now());
        }
        return ResponseEntity.ok(gymLogbookRepository.save(gymLogbook));
    }

    @GetMapping("/{userId}/nutritionDiary")
    public ResponseEntity<?> saveNutritionDiary(@PathVariable String userId, @RequestBody com.example.demo.model.NutritionDiary nutritionDiary) {
        nutritionDiary.setUserId(userId);
        if(nutritionDiary.getDate() == null) {
            nutritionDiary.setDate(LocalDate.now());
        }
        return ResponseEntity.ok(nutritionDiaryRepository.save(nutritionDiary));
    }

    @GetMapping("/{userId}/nutritionDiaries")
    public List<com.example.demo.model.NutritionDiary> getNutritionDiaries(@PathVariable String userId) {
        return nutritionDiaryRepository.findByUserId(userId);
    }

    @GetMapping("/{userId}/updateWeight")
    public ResponseEntity<User> updateWeight(@PathVariable String userId, @RequestBody User updateUser) {
        User user = userRepository.findById(userId).orElse(null);
        if(user != null){
            user.setWeight(updateUser.getWeight());
            return ResponseEntity.ok(userRepository.save(user));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}