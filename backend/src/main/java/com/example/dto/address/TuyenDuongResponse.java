package com.example.dto.address;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class TuyenDuongResponse {
    private Long maTuyenDuong;
    private String tenTuyenDuong;
    private String tenPhuongXa;
    private String tenQuan;
    private int tongCongVien;
    private int tongSoCay;
}
