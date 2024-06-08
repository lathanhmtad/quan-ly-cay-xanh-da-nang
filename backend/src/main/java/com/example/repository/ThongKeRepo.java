package com.example.repository;

import com.example.dto.thongke.ThongKeTinhTrangCayDto;
import com.example.entity.Cay;
import com.example.entity.ThongKe;
import com.example.projection.ThongKeLoaiProjection;
import com.example.projection.ThongKeNhiemVuProjection;
import com.example.projection.ThongKeTinhTrangCayProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ThongKeRepo extends JpaRepository<Cay, Long> {
    @Query(value = "SELECT COUNT(ma_cay) AS tongSoCayXanh FROM cay", nativeQuery = true)
    Integer demCayXanh();

    @Query(value = "SELECT COUNT(ma_thong_tin_phan_anh) AS tongDonThu FROM thong_tin_nguoi_dan_phan_anh", nativeQuery = true)
    Integer demDonThu();

    @Query(value = "SELECT COUNT(ma_ke_hoach) AS tongSoKeHoach from ke_hoach", nativeQuery = true)
    Integer demKeHoach();

    @Query(value = "SELECT COUNT(ma_ke_hoach) AS soKeHoachHoanThanh\n" +
            "FROM ke_hoach\n" +
            "LEFT JOIN nhiem_vu USING(ma_ke_hoach)\n" +
            "WHERE ma_trang_thai_nv = 3\n" +
            "GROUP BY ma_trang_thai_nv", nativeQuery = true)
    Integer demKeHoachHoanThanh();

    @Query(value = "SELECT tinh_trang_cay AS tinhTrangCay, COUNT(ma_cay) AS soLuongCay\n" +
            "FROM trang_thai_cay\n" +
            "LEFT JOIN cay USING(ma_trang_thai_cay)\n" +
            "GROUP BY ma_trang_thai_cay", nativeQuery = true)
    List<ThongKeTinhTrangCayProjection> thongKeTinhTrangCay();

    @Query(value = "SELECT ten_loai AS tenLoai, COUNT(ma_cay) AS soLuongCay " +
            "FROM loai_cay " +
            "LEFT JOIN cay USING(ma_loai) " +
            "GROUP BY ma_loai", nativeQuery = true)
    List<ThongKeLoaiProjection> thongKeLoaiCay();


    @Query(value = "SELECT ten_trang_thai AS tenTrangThai, COUNT(ma_nhiem_vu) AS soLuong\n" +
            "FROM trang_thai_nhiem_vu\n" +
            "LEFT JOIN nhiem_vu USING(ma_trang_thai_nv)\n" +
            "GROUP BY ma_trang_thai_nv", nativeQuery = true)
    List<ThongKeNhiemVuProjection> thongKeNV();
}
