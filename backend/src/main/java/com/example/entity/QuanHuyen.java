package com.example.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
public class QuanHuyen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long maQuan;
    private String tenQuan;
    private Integer tongSoCay;

    @OneToMany(mappedBy = "quanHuyen")
    private List<PhuongXa> phuongXa;
}
