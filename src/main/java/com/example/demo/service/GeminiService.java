package com.example.demo.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import org.springframework.http.*;
import java.util.Collections;
import java.util.Map;

@Service
public class GeminiService {
    private static final String PYTHON_API_URL = "http://127.0.0.1:5000/api/gemini";

    public String getGeneratedText(String prompt){
        RestTemplate restTemplate = new RestTemplate();

        Map<String, String> requestBody = Collections.singletonMap("prompt",prompt);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String,String>> request = new HttpEntity<>(requestBody, headers);

        ResponseEntity<Map> response = restTemplate.postForEntity(PYTHON_API_URL, request, Map.class);

        if(response.getStatusCode() == HttpStatus.OK && response.getBody() != null){
            return (String) response.getBody().get("text");
        }else{
            throw new RuntimeException("Error calling the Gemini API");
        }
    }
}
