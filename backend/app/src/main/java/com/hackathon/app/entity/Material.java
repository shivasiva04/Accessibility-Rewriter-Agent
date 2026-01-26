package com.hackathon.app.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.JdbcTypeCode;
import java.sql.Types;
import java.time.LocalDateTime;

@Entity
@Data
public class Material {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String topic;
    
    @Column(columnDefinition = "TEXT")
    private String content; 
    
    private String fileName;
    private String fileType;
    
    @Lob
    @JdbcTypeCode(Types.BINARY)
    @Column(name = "file_data")
    private byte[] fileData; 

    private LocalDateTime uploadDate;

    @ManyToOne
    @JoinColumn(name = "classroom_id")
    private Classroom classroom;
}