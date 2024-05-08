package com.example.repository;

import com.example.entity.PhuongXa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface PhuongXaRepo extends JpaRepository<PhuongXa, Long>, JpaSpecificationExecutor<PhuongXa> {
}
