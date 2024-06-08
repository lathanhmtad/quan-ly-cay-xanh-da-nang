package com.example.dto.tree;

import com.example.dto.HinhAnhDto;
import com.example.dto.UploadImageResponse;
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
    private String tenCay;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    private Date ngayTrong;

    private String tanCayChePhu;
    private String chieuCao;
    private String duongKinh;
    private String toaDo;
    private String moTaDiaChi;
    private String loaiCay;
    private String trangThaiCay;
    private String tuyenDuong;
    private String phuongXa;
    private String quanHuyen;

    private Long maTuyenDuong;
    private List<UploadImageResponse> images;
}
