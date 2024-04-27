package com.example.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class HinhAnh {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long maHinhAnh;
    private String hinhAnh;
    @ManyToOne
    @JoinColumn(name = "ma_thong_tin_phan_anh", referencedColumnName = "maThongTinPhanAnh")
    private ThongTinNguoiDanPhanAnh thongTinNguoiDanPhanAnh;

    @ManyToOne
    @JoinColumn(name = "ma_cay", referencedColumnName = "maCay")
    private Cay cay;
}
