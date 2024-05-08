package com.example.dto.address;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class QuanHuyenResponse {
    private Long maQuan;
    private String tenQuan;
    private Integer tongSoCay;
    private Integer tongPhuongXa;
//    private List<PhuongXaWithTuyenDuongResponse> phuongXa;
}
