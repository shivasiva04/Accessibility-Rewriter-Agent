package com.hackathon.app.service;

import com.hackathon.app.entity.Classroom;
import com.hackathon.app.entity.User;
import com.hackathon.app.repository.ClassroomRepository;
import com.hackathon.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;

@Service
public class ClassroomService {

    @Autowired
    private ClassroomRepository classroomRepository;

    @Autowired
    private UserRepository userRepository;

    public Classroom createClassroom(Classroom classroom) {
        String code = UUID.randomUUID().toString().substring(0, 6).toUpperCase();
        classroom.setClassCode(code);
        return classroomRepository.save(classroom);
    }

    public List<Classroom> getAllClassrooms() {
        return classroomRepository.findAll();
    }

    public String joinClassroom(String classCode, String studentEmail) {
        Classroom classroom = classroomRepository.findByClassCode(classCode)
                .orElseThrow(() -> new RuntimeException("Class not found"));

        // FIX: Added .orElse(null) to match the Optional return type
        User student = userRepository.findByEmail(studentEmail).orElse(null);
        
        if (student == null) {
            return "User not found";
        }

        classroom.getStudents().add(student);
        classroomRepository.save(classroom);
        return "Joined Successfully";
    }
}