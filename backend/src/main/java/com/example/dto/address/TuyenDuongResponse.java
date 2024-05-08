package com.example.dto.address;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class TuyenDuongResponse {
    private Long maTuyenDuong;
    private String tenTuyenDuong;
    private PhuongXaResponse phuongXa;
}
