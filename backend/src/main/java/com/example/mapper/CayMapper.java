package com.example.mapper;

import com.example.dto.tree.CayXanhRequest;
import com.example.dto.tree.CayXanhResponse;
import com.example.entity.Cay;
import com.example.entity.ChiTietDiaChi;
import com.example.entity.PhuongXa;
import com.example.entity.QuanHuyen;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper(componentModel = "spring")
public interface CayMapper extends GenericMapper<Cay, CayXanhRequest, CayXanhResponse> {

    @Override
    @Mapping(source = "loaiCay.tenLoai", target = "loaiCay")
    @Mapping(source = "trangThaiCay.tinhTrangCay", target = "trangThaiCay")
    @Mapping(source = "chiTietDiaChi.moTaDiaChi", target = "diaChi")//qualifiedByName = "mapDiaChi")
    CayXanhResponse entityToResponse(Cay entity);

//    @Named("mapDiaChi")
//    static String mapDiaChi(ChiTietDiaChi diaChi) {
//        QuanHuyen quanHuyen = diaChi.g
//        PhuongXa phuongXa =  diaChi.getPhuongXa();
//        return diaChi.getMoTaDiaChi() + ", " + diaChi.getPhuongXa() + ", " + diaChi.getPhuongXa().get;
//    }
}
