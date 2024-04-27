package com.example.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

import java.util.Date;

@Entity
@Getter
@Setter
public class KeHoach {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long maKeHoach;
    private String tenKeHoach;
    private Date hanHoanThanh;
    private Integer soLuong;
    private String diaDiem;
    private String noiDung;
    @OneToOne
    @JoinColumn(name = "ma_thong_tin_phan_anh", referencedColumnName = "maThongTinPhanAnh")
    private ThongTinNguoiDanPhanAnh thongTinNguoiDanPhanAnh;
}
