package com.hackathon.app.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
public class Classroom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String className;
    private String subject;
    
    @Column(unique = true)
    private String classCode; // Unique code for students to join

    private String teacherEmail; // Owner of the class

    @ManyToMany
    @JoinTable(
      name = "classroom_students", 
      joinColumns = @JoinColumn(name = "classroom_id"), 
      inverseJoinColumns = @JoinColumn(name = "user_id"))
    private Set<User> students = new HashSet<>();
}   