package com.example.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;
import java.util.List;

@Getter
@Setter
@Entity
public class ThongTinNguoiDanPhanAnh {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long maThongTinPhanAnh;
    private String hoVaTen;
    private String email;
    private String sdt;
    private Integer soLuongCay;
    private String lyDoPhanAnh;
    private Date ngayGui;

    @OneToMany(mappedBy = "thongTinNguoiDanPhanAnh")
    private List<ToaDoCayPhanAnh> toaDoCayPhanAnh;

    @OneToMany(mappedBy = "thongTinNguoiDanPhanAnh")
    private List<HinhAnh> hinhAnh;

    @OneToOne(mappedBy = "thongTinNguoiDanPhanAnh")
    private ChiTietDiaChi chiTietDiaChi;

    @OneToOne(mappedBy = "thongTinNguoiDanPhanAnh")
    private XuLyDonThu xuLyDonThu;
}
