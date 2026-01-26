package com.hackathon.app.repository;

import com.hackathon.app.entity.Classroom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface ClassroomRepository extends JpaRepository<Classroom, Long> {
    // Custom query to find a class by its unique 6-digit code
    Optional<Classroom> findByClassCode(String classCode);
}