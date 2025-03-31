package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Getter
@Setter
@Document(collection = "nutrition_diary")
public class NutritionDiary {
    @Id
    private String id;
    private String userId;
    private LocalDate date;
    private float calories;
    private float protein;
    private float carbs;
    private float fats;

    public NutritionDiary(){

    }
    public NutritionDiary(String userId, LocalDate date, float calories, float protein, float carbs, float fats) {
        this.userId = userId;
        this.date = date;
        this.calories = calories;
        this.protein = protein;
        this.carbs = carbs;
        this.fats = fats;
    }
}
