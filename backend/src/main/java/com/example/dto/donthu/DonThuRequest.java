package com.example.dto.donthu;

import com.example.dto.HinhAnhDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class DonThuRequest {
    private String hoVaTen;
    private String email;
    private String sdt;
    private Integer soLuongCay;
    private List<ToaDoCayPhanAnhDto> toaDoCayPhanAnh;
    private ChiTietDiaChi chiTietDiaChi;
    private String lyDoPhanAnh;
    private List<HinhAnhDto> hinhAnh;

    @Getter
    @Setter
    public static class ChiTietDiaChi {
        private String moTaDiaChi;
        private Long maPhuong;
    }
}
