package com.example.demo.service;

import com.example.demo.dto.WorkoutRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkoutService {

    @Autowired
    private GeminiService geminiService;

    public String generateWorkoutPlan(WorkoutRequest request){
        String prompt = "Genera una scheda di allenamento in formato JSON standardizzato " +
                "strutturata per giorni (es. 'giorno1', 'giorno2', etc.) e senza testo o elementi extra. " +
                "Deve contenere solo le informazioni utili per costruire la response\n per una persona di " +
                request.getAge() + " anni, " +
                request.getHeight() + " cm di altezza, " +
                request.getWeight() + " kg, che si allena " +
                request.getTrainingDays() + " giorni a settimana, livello "
                +request.getLevel() + ".";

        return geminiService.getGeneratedText(prompt);

    }
}
