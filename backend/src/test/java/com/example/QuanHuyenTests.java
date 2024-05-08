package com.example;

import com.example.entity.QuanHuyen;
import com.example.mapper.QuanHuyenMapper;
import com.example.repository.QuanHuyenRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
public class QuanHuyenTests {

    @Autowired
    QuanHuyenRepo quanHuyenRepo;

    @Autowired
    QuanHuyenMapper quanHuyenMapper;
    @Test
//    @Transactional
    void testGetQuanHuyen() {
        QuanHuyen q = quanHuyenRepo.findById(2L).get();
        System.out.println(  quanHuyenMapper.entityToResponse(q));
        System.out.println(q);
    }
}
