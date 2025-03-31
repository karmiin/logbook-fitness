package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Setter
@Getter
@Document(collection = "users")
public class User {
    @Id
    private String userId;
    private int age;
    private float weight;
    private float height;

    public User(String userId, int age, float weight, float height) {
        this.userId = userId;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }
}
