package com.example.controller;

import com.example.dto.ListResponse;
import com.example.dto.address.PhuongXaResponse;
import com.example.entity.PhuongXa;
import com.example.entity.QuanHuyen;
import com.example.mapper.PhuongXaMapper;
import com.example.repository.QuanHuyenRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/phuong-xa")
public class PhuongXaController {
    @Autowired
    QuanHuyenRepo quanHuyenRepo;

    @Autowired
    PhuongXaMapper phuongXaMapper;

    @GetMapping("/{maQuan}")
    public ResponseEntity<List<PhuongXaResponse>> getPhuongXaByMaQuan(@PathVariable("maQuan") Long maQuan) {
        QuanHuyen quanHuyen = quanHuyenRepo.findById(maQuan).get();
        List<PhuongXa> phuongXa = quanHuyen.getPhuongXa();

        List<PhuongXaResponse> response = phuongXaMapper.entityToResponse(phuongXa);

        return ResponseEntity.ok(response);
    }
}
