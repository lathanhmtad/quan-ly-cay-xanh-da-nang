package com.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class DoiNgu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long maDoiNgu;
    private String tenDoiNgu;
}
