package com.hackathon.app.dto;

import lombok.Data;

@Data
public class OtpRequest {
    private String email;
    private String otp;
    private UserDto userDto; // Needed to pass user details for final registration
}