package com.example.dto.address;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PhuongXaResponse {
    private Long maPhuong;
    private String tenPhuong;
    private String tenQuan;
    private int tongTuyenDuong;
    private int tongSoCayTrongPhuongXa;
}
