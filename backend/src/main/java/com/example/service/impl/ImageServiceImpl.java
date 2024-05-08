package com.example.service.impl;

import com.example.dto.UploadImageResponse;
import com.example.service.ImageService;
import com.example.utils.CloudinaryUtils;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@AllArgsConstructor
public class ImageServiceImpl implements ImageService {
    private CloudinaryUtils cloudinaryUtils;

    @Override
    public UploadImageResponse store(MultipartFile image) {
        String url = cloudinaryUtils.upload(image);
        return new UploadImageResponse(url);
    }

    @Override
    public void delete(String imageName) {

    }
}
