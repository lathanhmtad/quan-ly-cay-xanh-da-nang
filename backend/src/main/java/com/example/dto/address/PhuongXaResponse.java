package com.example.dto.address;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PhuongXaResponse {
    private Long maPhuong;
    private String tenPhuong;
    private QuanHuyenResponse quanHuyen;
    private Integer tongSoCayTrongPhuongXa;
    private Integer tongTuyenDuongCongVien;
}
