package com.example.dto.donthu;

import com.example.dto.HinhAnhDto;
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
    private List<ToaDoCayPhanAnhDto> toaDoCayPhanAnh;
    private List<HinhAnhDto> hinhAnh;
    private ChiTietDiaChiResponse chiTietDiaChi;
    private boolean trangThai;
}
