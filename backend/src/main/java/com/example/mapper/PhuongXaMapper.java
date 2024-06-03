package com.example.mapper;

import com.example.dto.address.PhuongXaResponse;
import com.example.entity.PhuongXa;
import com.example.entity.TuyenDuong;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Mapper(componentModel = "spring")
public interface PhuongXaMapper extends GenericMapper<PhuongXa, Object, PhuongXaResponse> {

    @Override
    @Mapping(source = "quanHuyen.tenQuan", target = "tenQuan")
    @Mapping(target = "tongTuyenDuong", expression = "java(getTongTuyenDuong(entity.getTuyenDuong()))")
    @Mapping(target = "tongSoCayTrongPhuongXa", expression = "java(getTotalCayInPhuongXa(entity.getTuyenDuong()))")
    PhuongXaResponse entityToResponse(PhuongXa entity);

    default int getTotalCayInPhuongXa(List<TuyenDuong> input) {
        if (input == null || input.isEmpty()) {
            return 0;
        }

        AtomicInteger sum = new AtomicInteger();

        input.forEach(tuyenDuong -> {
            tuyenDuong.getChiTietDiaChi().forEach(c -> {
                if (c.getCay() != null)
                    sum.addAndGet(1);
            });
        });
        return sum.get();
    }

    default int getTongTuyenDuong(List<TuyenDuong> input) {
        if (input == null || input.isEmpty()) {
            return 0;
        }
        return input.size();
    }
}
