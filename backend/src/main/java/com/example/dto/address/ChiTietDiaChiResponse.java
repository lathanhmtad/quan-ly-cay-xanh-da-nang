package com.example.dto.address;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChiTietDiaChiResponse {
    private Long maDiaChi;
    private String moTaDiaChi;
    private CayResponse cay;
}
