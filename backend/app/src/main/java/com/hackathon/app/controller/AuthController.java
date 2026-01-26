package com.hackathon.app.controller;

import com.hackathon.app.dto.UserDto;
import com.hackathon.app.dto.OtpRequest; 
import com.hackathon.app.service.EmailService;
import com.hackathon.app.service.UserService;
import com.hackathon.app.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired private UserService userService;
    @Autowired private EmailService emailService;

    // In-memory OTP storage (Use Redis in production)
    private Map<String, String> otpStorage = new ConcurrentHashMap<>();

    // 1. Send OTP Endpoint
    @PostMapping("/send-otp")
    public ResponseEntity<?> sendOtp(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        System.out.println("--- DEBUG: Request received for: " + email + " ---"); // Log 1

        if(userService.emailExists(email)) { 
             System.out.println("--- DEBUG: Email found in DB. Stopping. ---"); // Log 2
             return ResponseEntity.badRequest().body("Email already registered");
        }

        System.out.println("--- DEBUG: Email is new. Sending OTP... ---"); // Log 3
        try {
            String otp = emailService.generateOtp();
            otpStorage.put(email, otp);
            emailService.sendOtpEmail(email, otp);
            System.out.println("--- DEBUG: Email Sent Successfully! ---"); // Log 4
        } catch (Exception e) {
            System.out.println("--- DEBUG: Error sending email: " + e.getMessage()); // Log 5
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("Error: " + e.getMessage());
        }
        
        return ResponseEntity.ok(Map.of("success", true, "message", "OTP Sent"));
    }

    // 2. Verify OTP & Register Endpoint
    @PostMapping("/verify-register")
    public ResponseEntity<?> verifyAndRegister(@RequestBody OtpRequest request) {
        String serverOtp = otpStorage.get(request.getEmail());

        if (serverOtp != null && serverOtp.equals(request.getOtp())) {
            String result = userService.registerUser(request.getUserDto());
            otpStorage.remove(request.getEmail()); 
            
            // RETURN USERNAME HERE
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Registered");
            response.put("username", request.getUserDto().getUsername()); // <--- ADD THIS
            
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.badRequest().body(Map.of("success", false, "message", "Invalid OTP"));
    }

    @PostMapping("/signin")
    public ResponseEntity<Map<String, Object>> signin(@RequestBody UserDto userDto) {
        boolean isValid = userService.verifyLogin(userDto);
        Map<String, Object> response = new HashMap<>();

        if (isValid) {
            // Now this will work because we added the method to UserService
            User user = userService.findByEmail(userDto.getEmail()); 
            
            response.put("success", true);
            response.put("message", "Login Successful");
            response.put("username", user.getUsername()); 
            response.put("role", user.getRole());
            return ResponseEntity.ok(response);
        } else {
            response.put("success", false);
            response.put("message", "Invalid email or pattern");
            return ResponseEntity.status(401).body(response);
        }
    }
    
    
}