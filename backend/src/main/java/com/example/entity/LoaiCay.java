package com.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class LoaiCay {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long maLoai;
    private String tenLoai;
}
