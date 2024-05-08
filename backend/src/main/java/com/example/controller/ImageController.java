package com.example.controller;

import com.example.dto.ListResponse;
import com.example.dto.UploadImageResponse;
import com.example.service.ImageService;
import lombok.AllArgsConstructor;
import org.hibernate.type.format.jaxb.JaxbXmlFormatMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@RequestMapping("/api/images")
@AllArgsConstructor
public class ImageController {
    private ImageService imageService;

    @PostMapping("/upload-single")
    public ResponseEntity<UploadImageResponse> uploadSingleImage(@RequestParam("image") MultipartFile image) {
        return ResponseEntity.ok(imageService.store(image));
    }

    @PostMapping("/upload-multiple")
    public ResponseEntity<List<UploadImageResponse>> uploadMultipleImages(@RequestParam("images") MultipartFile[] images) {
        return ResponseEntity.ok(Stream.of(images)
                .map(imageService::store)
                .collect(Collectors.toList()));
    }
}
