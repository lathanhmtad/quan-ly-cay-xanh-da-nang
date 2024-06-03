package com.example.repository;

import com.example.entity.TrangThaiCay;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrangThaiRepo extends JpaRepository<TrangThaiCay, Long> {
}
