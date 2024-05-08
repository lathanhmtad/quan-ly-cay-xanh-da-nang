package com.example.repository;

import com.example.entity.QuanHuyen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface QuanHuyenRepo extends JpaRepository<QuanHuyen, Long>, JpaSpecificationExecutor<QuanHuyen> {
}
