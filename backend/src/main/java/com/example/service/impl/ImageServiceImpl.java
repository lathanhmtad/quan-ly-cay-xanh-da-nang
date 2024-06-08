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
        UploadImageResponse uploadImageResponse = new UploadImageResponse();
        uploadImageResponse.setImageUrl(url);
        return uploadImageResponse;
    }

    @Override
    public void delete(String imageName) {

    }
}
