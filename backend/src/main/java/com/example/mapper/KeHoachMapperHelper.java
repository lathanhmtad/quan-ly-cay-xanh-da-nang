package com.example.mapper;

import com.example.entity.ThongTinNguoiDanPhanAnh;
import com.example.repository.DonThuRepo;
import org.mapstruct.Named;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Named("KeHoachMapperHelper")
public class KeHoachMapperHelper {
    @Autowired
    private DonThuRepo donThuRepo;

    @Named("mapIdDonThuToDonThu")
    public ThongTinNguoiDanPhanAnh mapIdDonThuToDonThu(Long id) {
        return donThuRepo.findById(id).orElse(null);
    }
}
