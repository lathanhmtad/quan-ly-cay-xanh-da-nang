package com.example.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
public class NguoiDung {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long maNguoiDung;
    private String hoVaTen;
    private Date ngaySinh;
    private String email;
    private String sdt;
    private String tenDangNhap;
    private String matKhau;
    private String vaiTro;
    private String diaChi;

    @ManyToOne
    @JoinColumn(name = "ma_doi_ngu", referencedColumnName = "maDoiNgu")
    private DoiNgu doiNgu;
}
