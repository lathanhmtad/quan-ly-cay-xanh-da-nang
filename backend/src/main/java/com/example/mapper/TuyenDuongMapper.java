package com.example.mapper;

import com.example.dto.address.TuyenDuongResponse;
import com.example.entity.ChiTietDiaChi;
import com.example.entity.CongVien;
import com.example.entity.TuyenDuong;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Mapper(componentModel = "spring")
public interface TuyenDuongMapper extends GenericMapper<TuyenDuong, Object, TuyenDuongResponse> {

    @Override
    @Mapping(source = "phuongXa.tenPhuong", target = "tenPhuongXa")
    @Mapping(source = "phuongXa.quanHuyen.tenQuan", target = "tenQuan")
    @Mapping(target = "tongSoCay", expression = "java(getTongSoCay(entity.getChiTietDiaChi()))")
    @Mapping(target = "tongCongVien", expression = "java(getTongCongVien(entity.getCongVien()))")
    TuyenDuongResponse entityToResponse(TuyenDuong entity);

    default int getTongSoCay(List<ChiTietDiaChi> input) {
        if (input == null || input.isEmpty()) {
            return 0;
        }
        AtomicInteger sum = new AtomicInteger();

        input.forEach(c -> {
            if (c.getCay() != null)
                sum.addAndGet(1);
        });
        return sum.get();
    }


    default int getTongCongVien(List<CongVien> input) {
        if (input == null || input.isEmpty()) {
            return 0;
        }
        return input.size();
    }
}
