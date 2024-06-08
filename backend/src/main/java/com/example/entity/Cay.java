package com.example.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
public class Cay {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long maCay;
    private String tenCay;
    @ManyToOne
    @JoinColumn(name = "ma_loai", referencedColumnName = "maLoai")
    private LoaiCay loaiCay;
    @JsonFormat(pattern="dd-MM-yyyy")
    private Date ngayTrong;
    private String tanCayChePhu;
    private String chieuCao;
    private String duongKinh;
    private String toaDo;
    @ManyToOne
    @JoinColumn(name = "ma_trang_thai_cay", referencedColumnName = "maTrangThaiCay")
    private TrangThaiCay trangThaiCay;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "ma_dia_chi", referencedColumnName = "maDiaChi")
    private ChiTietDiaChi chiTietDiaChi;

    @OneToMany(mappedBy = "cay", cascade = CascadeType.ALL)
    private List<HinhAnh> hinhAnh;
}
