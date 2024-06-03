package com.example.repository;

import com.example.entity.HinhAnh;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HinhAnhRepo extends JpaRepository<HinhAnh, Long> {
}
