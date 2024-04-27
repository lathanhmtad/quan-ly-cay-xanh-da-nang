package com.example.repository;

import com.example.entity.NguoiDung;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface NguoiDungRepo extends JpaRepository<NguoiDung, Long>, JpaSpecificationExecutor<NguoiDung> {
    Optional<NguoiDung> findByTenDangNhap(String username);
}
