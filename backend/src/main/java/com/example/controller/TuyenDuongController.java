package com.example.controller;

import com.example.dto.address.TuyenDuongResponse;
import com.example.entity.PhuongXa;
import com.example.mapper.TuyenDuongMapper;
import com.example.repository.PhuongXaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/tuyen-duong")
public class TuyenDuongController {
    @Autowired
    TuyenDuongMapper tuyenDuongMapper;

    @Autowired
    PhuongXaRepo phuongXaRepo;

    @GetMapping("/{maPhuong}")
    public ResponseEntity<List<TuyenDuongResponse>> getAllByPhuongXa(@PathVariable("maPhuong") Long maPhuong) {
        PhuongXa phuongXa = phuongXaRepo.findById(maPhuong).get();

        List<TuyenDuongResponse> res = tuyenDuongMapper.entityToResponse(phuongXa.getTuyenDuong());
        return ResponseEntity.ok(res);
    }
}
