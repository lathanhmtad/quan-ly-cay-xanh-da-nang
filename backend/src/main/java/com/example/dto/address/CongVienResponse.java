package com.example.dto.address;

import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
public class CongVienResponse {
    private Long maCongVien;
    private String tenCongVien;
    private String tenQuan;
    private String tenPhuong;
    private List<String> tuyenDuong;
    private int tongSoCay;
}
