package com.example.demo.controller;

import com.example.demo.dto.WorkoutRequest;
import com.example.demo.service.WorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Collections;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/workout")
public class WorkoutController {
    @Autowired
    private WorkoutService workoutService;

    @PostMapping("/generateWorkout")
    public Map<String, String> generateWorkout(@RequestBody WorkoutRequest request){
        String plan = workoutService.generateWorkoutPlan(request);

        return Collections.singletonMap("plan", plan);
    }
}
