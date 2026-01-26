package com.hackathon.app.service;

import com.hackathon.app.dto.UserDto;
import com.hackathon.app.entity.User;
import com.hackathon.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public boolean emailExists(String email) {
        return userRepository.findByEmail(email).isPresent();
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }

    public String registerUser(UserDto dto) {
        if (emailExists(dto.getEmail())) {
            return "Email exists";
        }
        
        User user = new User();
        user.setUsername(dto.getUsername());
        user.setEmail(dto.getEmail());
        user.setGridSize(dto.getGridSize());
        user.setGridShape(dto.getGridShape());

        user.setRole(dto.getRole());
        
        if (dto.getPattern() != null) {
            String patternStr = dto.getPattern().stream()
                    .map(String::valueOf)
                    .collect(Collectors.joining(","));
            user.setPatternString(patternStr);
        }
        
        userRepository.save(user);
        return "Success";
    }

    // --- UPDATED DEBUG VERSION ---
    public boolean verifyLogin(UserDto dto) {
        System.out.println("--- LOGIN ATTEMPT: " + dto.getEmail() + " ---");
        
        User user = userRepository.findByEmail(dto.getEmail()).orElse(null);
        if (user == null) {
            System.out.println("FAIL: Email not found in DB");
            return false;
        }

        String inputPattern = "";
        if (dto.getPattern() != null) {
            inputPattern = dto.getPattern().stream()
                    .map(String::valueOf)
                    .collect(Collectors.joining(","));
        }

        // DEBUG LOGS (Check your console after running this!)
        boolean patternMatch = user.getPatternString().equals(inputPattern);
        boolean sizeMatch = user.getGridSize() == dto.getGridSize();
        boolean shapeMatch = user.getGridShape().equals(dto.getGridShape());

        if (!patternMatch) {
            System.out.println("FAIL: Pattern Mismatch");
            System.out.println("DB Pattern: " + user.getPatternString());
            System.out.println("Input Pattern: " + inputPattern);
        }
        if (!sizeMatch) {
            System.out.println("FAIL: Grid Size Mismatch");
            System.out.println("DB Size: " + user.getGridSize());
            System.out.println("Input Size: " + dto.getGridSize());
        }
        if (!shapeMatch) {
            System.out.println("FAIL: Grid Shape Mismatch");
            System.out.println("DB Shape: " + user.getGridShape());
            System.out.println("Input Shape: " + dto.getGridShape());
        }

        return patternMatch && sizeMatch && shapeMatch;
    }
}