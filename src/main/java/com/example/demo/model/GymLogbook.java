package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Document(collection = "gym_logbook")
public class GymLogbook {
    @Id
    private String id;
    private String userId;
    private LocalDate date;
    private List<WorkoutEntry> workouts;

    public GymLogbook(){

    }
    public GymLogbook(String userId, LocalDate date, List<WorkoutEntry> workouts) {
        this.userId = userId;
        this.date = date;
        this.workouts = workouts;
    }
}
