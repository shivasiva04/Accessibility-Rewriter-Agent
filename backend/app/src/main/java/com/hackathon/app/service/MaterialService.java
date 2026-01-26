package com.hackathon.app.service;

import com.hackathon.app.entity.Material;
import com.hackathon.app.repository.MaterialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MaterialService {

    @Autowired
    private MaterialRepository materialRepository;

    public Material saveMaterial(Material material) {
        return materialRepository.save(material);
    }

    public List<Material> getMaterialsByClass(Long classId) {
        return materialRepository.findByClassroomId(classId);
    }
}