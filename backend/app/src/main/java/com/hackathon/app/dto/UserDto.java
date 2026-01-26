package com.hackathon.app.dto;

import lombok.Data;
import java.util.List;

@Data
public class UserDto {
    private String username;
    private String email;
    private int gridSize;
    private String gridShape;
    private List<Integer> pattern; 
    private String role;
}