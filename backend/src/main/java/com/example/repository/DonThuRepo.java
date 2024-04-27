package com.example.repository;

import com.example.entity.ThongTinNguoiDanPhanAnh;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface DonThuRepo extends JpaRepository<ThongTinNguoiDanPhanAnh, Long>, JpaSpecificationExecutor<ThongTinNguoiDanPhanAnh> {
}
