package com.example.repository;

import com.example.entity.TuyenDuong;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface TuyenDuongRepo extends JpaRepository<TuyenDuong, Long>, JpaSpecificationExecutor<TuyenDuong> {
}
