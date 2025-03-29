package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WorkoutRequest {
    private int age;
    private double height;
    private double weight;
    private int trainingDays;
    private String level;
}
