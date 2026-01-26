package com.hackathon.app.dto;

import lombok.Data;

@Data
public class ClassroomDto {
    private String className;
    private String subject;
    private String teacherEmail;
    private String studentEmail;
    private String classCode;
}