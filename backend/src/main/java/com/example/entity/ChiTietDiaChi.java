package com.example.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class ChiTietDiaChi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long maDiaChi;

    @OneToOne
    @JoinColumn(name = "ma_thong_tin_phan_anh", referencedColumnName = "maThongTinPhanAnh")
    private ThongTinNguoiDanPhanAnh thongTinNguoiDanPhanAnh;

    private String moTaDiaChi;

    @ManyToOne
    @JoinColumn(name = "ma_tuyen_duong", referencedColumnName = "maTuyenDuong")
    private TuyenDuong tuyenDuong;

    @OneToOne(mappedBy = "chiTietDiaChi")
    private Cay cay;
}
