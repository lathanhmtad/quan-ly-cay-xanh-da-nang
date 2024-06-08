package com.example.repository;

import com.example.entity.HinhAnh;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HinhAnhRepo extends JpaRepository<HinhAnh, Long> {
    List<HinhAnh> findByCayMaCay(Long maCay);
}
