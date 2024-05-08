package com.example.dto.address;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CongVienResponse {
    private Long maCongVien;
    private String tenCongVien;
    private List<TuyenDuongResponse> tuyenDuong;
}
