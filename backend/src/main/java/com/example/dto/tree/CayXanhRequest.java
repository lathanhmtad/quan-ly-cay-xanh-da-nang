package com.example.dto.tree;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

@Getter
@Setter
public class CayXanhRequest {
    private Long maCay;
    private String tenCay;
    private Long maLoaiCay;
    private List<String> hinhAnh;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSX")
    private Date ngayTrong;
    private String tanCayChePhu;
    private String chieuCao;
    private String duongKinh;
    private String toaDo;
    private Long maTrangThaiCay;
    private Long maTuyenDuong;
    private String moTaDiaChi;
}
