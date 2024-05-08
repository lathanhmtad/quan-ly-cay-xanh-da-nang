package com.example.repository;

import com.example.entity.CongVien;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CongVienRepo extends JpaRepository<CongVien, Long>, JpaSpecificationExecutor<CongVien> {
}
