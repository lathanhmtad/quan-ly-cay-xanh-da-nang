package com.example.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class CongVien {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long maCongVien;
    private String tenCongVien;

    @ManyToMany(mappedBy = "congVien")
    private List<TuyenDuong> tuyenDuong;
}
