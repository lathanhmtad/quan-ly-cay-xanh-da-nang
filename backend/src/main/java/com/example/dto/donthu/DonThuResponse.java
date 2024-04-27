package com.example.dto.donthu;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class DonThuResponse {
    private Long maThongTinPhanAnh;
    private String hoVaTen;
    private String email;
    private String sdt;
    private Integer soLuongCay;
    private String lyDoPhanAnh;
    private List<ToaDoResponse> toaDoCayPhanAnh;
    private DiaChiResponse chiTietDiaChi;
    private List<HinhAnhResponse> hinhAnh;
    private boolean trangThai;
}
