package com.example.controller;

import com.example.dto.tree.CayXanhRequest;
import com.example.entity.Cay;
import com.example.entity.ChiTietDiaChi;
import com.example.entity.HinhAnh;
import com.example.repository.*;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping("/api/cay")
public class CayController {
    LoaiCayRepo loaiCayRepo;
    TrangThaiRepo trangThaiRepo;
    TuyenDuongRepo tuyenDuongRepo;
    CayRepo cayRepo;
    HinhAnhRepo hinhAnhRepo;


    @PostMapping
    public ResponseEntity<Map<String, String>> taoCay(@RequestBody CayXanhRequest cayXanhRequest) {
        try {
            Cay entity = new Cay();
            entity.setTenCay(cayXanhRequest.getTenCay());
            entity.setLoaiCay(loaiCayRepo.findById(cayXanhRequest.getMaLoaiCay()).get());
            entity.setNgayTrong(cayXanhRequest.getNgayTrong());
            entity.setTanCayChePhu(cayXanhRequest.getTanCayChePhu());
            entity.setChieuCao(cayXanhRequest.getChieuCao());
            entity.setDuongKinh(cayXanhRequest.getDuongKinh());
            entity.setToaDo(cayXanhRequest.getToaDo());
            entity.setTrangThaiCay(trangThaiRepo.findById(cayXanhRequest.getMaTrangThaiCay()).get());

            ChiTietDiaChi chiTietDiaChi = new ChiTietDiaChi();
            chiTietDiaChi.setTuyenDuong(tuyenDuongRepo.findById(cayXanhRequest.getMaTuyenDuong()).get());
            chiTietDiaChi.setMoTaDiaChi(cayXanhRequest.getMoTaDiaChi());

            entity.setChiTietDiaChi(chiTietDiaChi);

            List<HinhAnh> images = cayXanhRequest.getImages().stream().map(item -> {
                HinhAnh h = new HinhAnh();
                h.setCay(entity);
                h.setHinhAnh(item.getImageUrl());
                return h;
            }).collect(Collectors.toList());

            entity.setHinhAnh(images);
            cayRepo.save(entity);

            Map<String, String> res = Map.of("success", "Tạo thành công");
            return ResponseEntity.ok(res);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, String>> updateCay(@PathVariable("id") Long maCay, @RequestBody CayXanhRequest cayXanhRequest) {
        try {
            Cay cayCu = cayRepo.findById(maCay).get();
            cayCu.setMaCay(maCay);
            cayCu.setTenCay(cayXanhRequest.getTenCay());
            cayCu.setLoaiCay(loaiCayRepo.findById(cayXanhRequest.getMaLoaiCay()).get());
            cayCu.setNgayTrong(cayXanhRequest.getNgayTrong());
            cayCu.setTanCayChePhu(cayXanhRequest.getTanCayChePhu());
            cayCu.setChieuCao(cayXanhRequest.getChieuCao());
            cayCu.setDuongKinh(cayXanhRequest.getDuongKinh());
            cayCu.setToaDo(cayXanhRequest.getToaDo());
            cayCu.setTrangThaiCay(trangThaiRepo.findById(cayXanhRequest.getMaTrangThaiCay()).get());

            ChiTietDiaChi chiTietDiaChi = cayCu.getChiTietDiaChi();
            chiTietDiaChi.setTuyenDuong(tuyenDuongRepo.findById(cayXanhRequest.getMaTuyenDuong()).get());
            chiTietDiaChi.setMoTaDiaChi(cayXanhRequest.getMoTaDiaChi());

            List<HinhAnh> hA = hinhAnhRepo.findByCayMaCay(cayCu.getMaCay());
            hinhAnhRepo.deleteAll(hA);

            List<HinhAnh> newHa = cayXanhRequest.getOldImages().stream().map(item -> {
                HinhAnh h = new HinhAnh();
                h.setCay(cayCu);
                h.setHinhAnh(item);
                return h;
            }).collect(Collectors.toList());

            cayXanhRequest.getImages().forEach(item -> {
                HinhAnh h = new HinhAnh();
                h.setCay(cayCu);
                h.setHinhAnh(item.getImageUrl());

                newHa.add(h);
            });

            cayCu.setHinhAnh(newHa);

            cayRepo.save(cayCu);

            Map<String, String> res = Map.of("success", "Update thành công");
            return ResponseEntity.ok(res);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
