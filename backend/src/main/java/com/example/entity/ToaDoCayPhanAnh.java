package com.example.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class ToaDoCayPhanAnh {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long maToaDoCay;
    private String toaDoCay;

    @ManyToOne
    @JoinColumn(name = "ma_thong_tin_phan_anh", referencedColumnName = "maThongTinPhanAnh")
    private ThongTinNguoiDanPhanAnh thongTinNguoiDanPhanAnh;
}
