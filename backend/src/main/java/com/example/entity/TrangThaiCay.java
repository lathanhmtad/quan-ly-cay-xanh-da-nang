package com.example.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class TrangThaiCay {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long maTrangThaiCay;
    private String tinhTrangCay;
}
