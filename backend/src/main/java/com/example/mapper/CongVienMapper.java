package com.example.mapper;

import com.example.dto.address.CongVienResponse;
import com.example.entity.ChiTietDiaChi;
import com.example.entity.CongVien;
import com.example.entity.TuyenDuong;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", uses = {TuyenDuongMapper.class})
public interface CongVienMapper extends GenericMapper<CongVien, Object, CongVienResponse> {

    @Override
    @Mapping(target = "tenQuan", expression = "java(getTenQuan(entity.getTuyenDuong()))")
    @Mapping(target = "tenPhuong", expression = "java(getTenPhuong(entity.getTuyenDuong()))")
    @Mapping(target = "tongSoCay", expression = "java(getTongSoCay(entity.getTuyenDuong()))")
    @Mapping(target = "tuyenDuong", expression = "java(getTuyenDuongNames(entity.getTuyenDuong()))")
    CongVienResponse entityToResponse(CongVien entity);

    default String getTenQuan(List<TuyenDuong> tuyenDuong) {
        return tuyenDuong.get(0).getPhuongXa().getQuanHuyen().getTenQuan();
    }

    default String getTenPhuong(List<TuyenDuong> tuyenDuong) {
        return tuyenDuong.get(0).getPhuongXa().getTenPhuong();
    }

    default int getTongSoCay(List<TuyenDuong> input) {
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

    default List<String> getTuyenDuongNames(List<TuyenDuong> tuyenDuong) {
        return tuyenDuong.stream().map(item -> item.getTenTuyenDuong()).collect(Collectors.toList());
    }
}
