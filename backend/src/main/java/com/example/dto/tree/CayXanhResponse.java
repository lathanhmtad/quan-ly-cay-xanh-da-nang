package com.example.dto.tree;

import com.example.dto.HinhAnhDto;
import com.example.entity.HinhAnh;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
public class CayXanhResponse {
    private Long id;
    private Long maCay;
    private String toaDo;
    private String tenCay;
    private String loaiCay;
    @JsonFormat(pattern="dd-MM-yyyy")
    private Date ngayTrong;
    private String tanCayChePhu;
    private String chieuCao;
    private String duongKinh;
    private String diaChi;
    private String trangThaiCay;
    private List<HinhAnhDto> hinhAnh;
}
