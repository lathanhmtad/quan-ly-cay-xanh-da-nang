package com.example.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
public class XuLyDonThu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    @JoinColumn(name = "ma_thong_tin_phan_anh", referencedColumnName = "maThongTinPhanAnh")
    private ThongTinNguoiDanPhanAnh thongTinNguoiDanPhanAnh;
    private Date hanHoanThanh;
    private boolean trangThai;
}
