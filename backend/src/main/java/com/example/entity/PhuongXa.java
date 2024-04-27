package com.example.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class PhuongXa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long maPhuong;
    private String tenPhuong;

    @ManyToOne
    @JoinColumn(name = "ma_quan")
    private QuanHuyen quanHuyen;

    private TuyenDuong tuyenDuong;
}
