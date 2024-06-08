package com.example.mapper;

import com.example.dto.kehoach.KeHoachRequest;
import com.example.dto.kehoach.KeHoachResponse;
import com.example.entity.KeHoach;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {KeHoachMapperHelper.class})
public interface KeHoachMapper extends GenericMapper<KeHoach, KeHoachRequest, KeHoachResponse> {

    @Override
    @Mapping(source = "maKeHoach", target = "maKeHoach")
    @Mapping(source = "maKeHoach", target = "id")
    @Mapping(source = "thongTinNguoiDanPhanAnh.maThongTinPhanAnh", target = "maThongTinPhanAnh")
    KeHoachResponse entityToResponse(KeHoach entity);

    @Override
    @Mapping(source = "maThongTinPhanAnh", target = "thongTinNguoiDanPhanAnh", qualifiedByName = "mapIdDonThuToDonThu")
    KeHoach requestToEntity(KeHoachRequest request);
}

