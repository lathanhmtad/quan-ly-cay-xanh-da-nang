package com.example.controller;

import com.example.entity.ThongKe;
import com.example.projection.ThongKeLoaiProjection;
import com.example.projection.ThongKeNhiemVuProjection;
import com.example.projection.ThongKeTinhTrangCayProjection;
import com.example.repository.ThongKeRepo;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/thong-ke")
@AllArgsConstructor
public class ThongKeController {

    ThongKeRepo thongKeRepo;

    @GetMapping("/so-luong")
    public ResponseEntity<ThongKe> getThongKeSoLuong() {
        int soCayXanh = thongKeRepo.demCayXanh();
        int soKeHoach = thongKeRepo.demKeHoach();
        int soDonThu = thongKeRepo.demDonThu();
        int soKeHoachHoanThanh = thongKeRepo.demKeHoachHoanThanh();

        ThongKe thongKe = new ThongKe();
        thongKe.setTongDonThu(soDonThu);
        thongKe.setTongSoKeHoach(soKeHoach);
        thongKe.setTongSoCayXanh(soCayXanh);
        thongKe.setTongSoKeHoachHoanThanh(soKeHoachHoanThanh);

        return ResponseEntity.ok(thongKe);
    }

    @GetMapping("/tinh-trang-cay")
    public ResponseEntity<List<ThongKeTinhTrangCayProjection>> getThongKeTinhTrang() {
        return ResponseEntity.ok(thongKeRepo.thongKeTinhTrangCay());
    }

    @GetMapping("/loai-cay")
    public ResponseEntity<List<ThongKeLoaiProjection>> getThongKeLoaiCay() {
        return ResponseEntity.ok(thongKeRepo.thongKeLoaiCay());
    }

    @GetMapping("/nhiem-vu")
    public ResponseEntity<List<ThongKeNhiemVuProjection>> getThongKeNhiemVu() {
        return ResponseEntity.ok(thongKeRepo.thongKeNV());
    }
}
