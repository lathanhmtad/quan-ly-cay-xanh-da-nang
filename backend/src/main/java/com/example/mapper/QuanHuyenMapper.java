package com.example.mapper;

import com.example.dto.address.QuanHuyenResponse;
import com.example.entity.PhuongXa;
import com.example.entity.QuanHuyen;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Mapper(componentModel = "spring")
public interface QuanHuyenMapper extends GenericMapper<QuanHuyen, Object, QuanHuyenResponse> {
    @Override
    @Mapping(target = "tongPhuongXa", expression = "java(getTotalPhuongXa(entity.getPhuongXa()))")
    @Mapping(target = "tongSoCay", expression = "java(getTongSoCay(entity.getPhuongXa()))")
    QuanHuyenResponse entityToResponse(QuanHuyen entity);

    default int getTotalPhuongXa(List<PhuongXa> phuongXaList) {
        if (phuongXaList == null || phuongXaList.isEmpty()) {
            return 0;
        }
        return phuongXaList.size();
    }

    default int getTongSoCay(List<PhuongXa> phuongXaList) {
        if (phuongXaList == null || phuongXaList.isEmpty()) {
            return 0;
        }

        AtomicInteger sum = new AtomicInteger();

        phuongXaList.forEach(phuongXa -> {
            phuongXa.getTuyenDuong().forEach(tuyenDuong -> {
                tuyenDuong.getChiTietDiaChi().forEach(c -> {
                    if(c.getCay() != null)
                        sum.addAndGet(1);
                });
            });
        });
        return sum.get();
    }
}
