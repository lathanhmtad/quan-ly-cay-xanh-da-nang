package com.example.repository;

import com.example.entity.ChiTietDiaChi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ChiTietDiaChiRepo extends JpaRepository<ChiTietDiaChi, Long>, JpaSpecificationExecutor<ChiTietDiaChi> {
}
