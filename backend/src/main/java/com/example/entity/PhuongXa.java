package com.example.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "phuong_xa")
public class PhuongXa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long maPhuong;
    private String tenPhuong;

    @ManyToOne
    @JoinColumn(name = "ma_quan", referencedColumnName = "maQuan")
    private QuanHuyen quanHuyen;

    @OneToMany(mappedBy = "phuongXa")
    private List<TuyenDuong> tuyenDuong;
}
