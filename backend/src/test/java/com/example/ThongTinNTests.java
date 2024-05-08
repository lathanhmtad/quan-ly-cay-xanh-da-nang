package com.example;

import com.example.entity.ThongTinNguoiDanPhanAnh;
import com.example.repository.DonThuRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
public class ThongTinNTests {

    @Autowired
    DonThuRepo donThuRepo;

    @Test
    @Transactional
    void testGet() {
        ThongTinNguoiDanPhanAnh thongTinNguoiDanPhanAnh = donThuRepo.findById(1L).get();
        System.out.println(thongTinNguoiDanPhanAnh);
    }
}
