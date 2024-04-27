package com.example.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class TuyenDuong {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long maTuyenDuong;
    private String tenTuyenDuong;

    @ManyToOne
    @JoinColumn(name = "ma_phuong", referencedColumnName = "maPhuong")
    private PhuongXa phuongXa;

    @JoinTable(
            name = "tuyen_duong_cong_vien",
            joinColumns = @JoinColumn(
                    name = "ma_tuyen_duong",
                    referencedColumnName = "maTuyenDuong"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "ma_cong_vien",
                    referencedColumnName = "maCongVien"
            )
    )
    @ManyToMany
    private List<CongVien> congVien;
}
