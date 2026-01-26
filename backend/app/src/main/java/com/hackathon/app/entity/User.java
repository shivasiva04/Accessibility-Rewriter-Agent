package com.hackathon.app.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    
    @Column(unique = true, nullable = false)
    private String email;
    
    private int gridSize;
    private String gridShape;
    private String patternString; 
    private String role;
}