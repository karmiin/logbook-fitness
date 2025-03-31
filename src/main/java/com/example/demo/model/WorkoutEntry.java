package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WorkoutEntry {
    private String exercise;
    private int sets;
    private int reps;
    private float weight;

    public WorkoutEntry(){

    }
    public WorkoutEntry(String exercise, int sets, int reps, float weight) {
        this.exercise = exercise;
        this.sets = sets;
        this.reps = reps;
        this.weight = weight;
    }
}
