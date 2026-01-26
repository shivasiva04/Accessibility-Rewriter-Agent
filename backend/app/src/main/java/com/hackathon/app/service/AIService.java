package com.hackathon.app.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

@Service
public class AIService {

    @Value("${gemini.api.key}")
    private String apiKey;

    // Fixed URL: gemini-pro is the most stable model for v1beta generateContent
    private static final String GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=";

    public String simplifyConcept(String title, String concept) {
        try {
            HttpClient client = HttpClient.newBuilder()
                    .connectTimeout(Duration.ofSeconds(10))
                    .build();

            String prompt = String.format("""
                    Simplify this academic concept for a student. Keep it 100%% accurate.
                    Topic: %s
                    Text: %s
                    
                    Format:
                    1. SIMPLE EXPLANATION: (2 sentences)
                    2. REAL-TIME EXAMPLE: (One example)
                    3. KEYWORDS: (3 words)
                    """, title, concept);

            JSONObject textPart = new JSONObject().put("text", prompt);
            JSONArray partsArray = new JSONArray().put(textPart);
            JSONObject userMessage = new JSONObject().put("role", "user").put("parts", partsArray);
            JSONObject requestBody = new JSONObject().put("contents", new JSONArray().put(userMessage));

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(GEMINI_URL + apiKey))
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody.toString()))
                    .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            
            if (response.statusCode() == 200) {
                JSONObject jsonResponse = new JSONObject(response.body());
                return jsonResponse.getJSONArray("candidates")
                        .getJSONObject(0)
                        .getJSONObject("content")
                        .getJSONArray("parts")
                        .getJSONObject(0)
                        .getString("text");
            } else {
                return null; // Trigger frontend fallback
            }
        } catch (Exception e) {
            return null; // Trigger frontend fallback
        }
    }
}