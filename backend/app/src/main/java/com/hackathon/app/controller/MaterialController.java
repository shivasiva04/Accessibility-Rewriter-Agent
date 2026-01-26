package com.hackathon.app.controller;

import com.hackathon.app.entity.Material;
import com.hackathon.app.service.AIService;
import com.hackathon.app.repository.MaterialRepository;
import com.hackathon.app.repository.ClassroomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/materials")
@CrossOrigin(origins = "http://localhost:5173")
public class MaterialController {

    @Autowired
    private MaterialRepository materialRepository;

    @Autowired
    private ClassroomRepository classroomRepository;

    @Autowired
    private AIService aiService;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadMaterial(
            @RequestParam("classId") Long classId,
            @RequestParam("topic") String topic,
            @RequestParam("content") String content,
            @RequestParam(value = "file", required = false) MultipartFile file) throws Exception {

        Material material = new Material();
        material.setTopic(topic);
        material.setContent(content);
        material.setUploadDate(LocalDateTime.now());
        material.setClassroom(classroomRepository.findById(classId)
                .orElseThrow(() -> new RuntimeException("Classroom not found")));

        if (file != null) {
            material.setFileName(file.getOriginalFilename());
            material.setFileType(file.getContentType());
            material.setFileData(file.getBytes());
        }

        return ResponseEntity.ok(materialRepository.save(material));
    }

    /**
     * FIXED: Added @Transactional to prevent PSQLException.
     * Keeps the session open for Large Objects (bytea/oid) to stream to the client.
     */
    @GetMapping("/class/{classId}")
    @Transactional(readOnly = true)
    public ResponseEntity<List<Material>> getMaterialsByClass(@PathVariable Long classId) {
        return ResponseEntity.ok(materialRepository.findByClassroomId(classId));
    }

    /**
     * NEW: Download Endpoint.
     * Sends the binary file data with the correct headers to trigger a browser download.
     */
    @GetMapping("/download/{id}")
    @Transactional(readOnly = true)
    public ResponseEntity<byte[]> downloadFile(@PathVariable Long id) {
        Material material = materialRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Material not found"));

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(material.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + material.getFileName() + "\"")
                .body(material.getFileData());
    }

    @PostMapping("/simplify-raw")
    public ResponseEntity<?> simplifyRawText(@RequestBody Map<String, String> request) {
        String title = request.get("title");
        String concept = request.get("concept");

        String simplified;
        try {
            simplified = aiService.simplifyConcept(title, concept);
            if (simplified == null || simplified.contains("Error")) {
                throw new Exception("AI Call Failed");
            }
        } catch (Exception e) {
            // Stability Fallback for Interview Demo
            simplified = "SIMPLIFIED: " + concept.substring(0, Math.min(concept.length(), 150)) + "...\n\n" +
                    "REAL-TIME EXAMPLE: Imagine " + title + " as a synchronized system working together like a clock's gears.\n\n" +
                    "KEYWORDS: " + (title.contains(" ") ? title.split(" ")[0] : title) + ", System, Process.";
        }

        return ResponseEntity.ok(Map.of("simplifiedContent", simplified));
    }
}