package com.example.dto.user;

import com.example.entity.VaiTroType;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class NguoiDungResponse {
    private Long maNguoiDung;
    private String hoVaTen;
    @JsonFormat(pattern="dd-MM-yyyy")
    private Date ngaySinh;
    private String email;
    private String sdt;
    private String tenDangNhap;
    private String vaiTro;
    private String diaChi;
    private String doiNgu;
}
