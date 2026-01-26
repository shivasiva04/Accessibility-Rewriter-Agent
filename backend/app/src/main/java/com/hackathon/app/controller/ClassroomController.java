package com.hackathon.app.controller;

import com.hackathon.app.entity.Classroom;
import com.hackathon.app.dto.ClassroomDto;
import com.hackathon.app.service.ClassroomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/classrooms")
@CrossOrigin(origins = "http://localhost:5173")
public class ClassroomController {

    @Autowired
    private ClassroomService classroomService;

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody ClassroomDto dto) {
        // 1. Create the entity object
        Classroom classroom = new Classroom();

        // 2. Map fields from DTO to Entity
        classroom.setClassName(dto.getClassName());
        classroom.setSubject(dto.getSubject());
        classroom.setTeacherEmail(dto.getTeacherEmail());

        // 3. Save via service
        try {
            Classroom savedClass = classroomService.createClassroom(classroom);
            return ResponseEntity.ok(savedClass);
        } catch (Exception e) {
            // This will show the error in your Spring Boot console
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("Error: " + e.getMessage());
        }
    }

    @GetMapping("/all")
    public List<Classroom> getAll() {
        return classroomService.getAllClassrooms();
    }

    @PostMapping("/join")
    public ResponseEntity<?> join(@RequestBody ClassroomDto dto) {
        String result = classroomService.joinClassroom(dto.getClassCode(), dto.getStudentEmail());
        return ResponseEntity.ok(Map.of("message", result, "success", result.equals("Joined Successfully")));
    }
}