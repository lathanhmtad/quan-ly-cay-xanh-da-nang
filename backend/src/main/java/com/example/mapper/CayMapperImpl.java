package com.example.mapper;

import com.example.dto.UploadImageResponse;
import com.example.dto.tree.CayXanhRequest;
import com.example.dto.tree.CayXanhResponse;
import com.example.entity.Cay;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CayMapperImpl implements CayMapper<Cay, CayXanhRequest, CayXanhResponse> {
    @Override
    public Cay requestToEntity(CayXanhRequest request) {
        return null;
    }

    @Override
    public CayXanhResponse entityToResponse(Cay entity) {
        CayXanhResponse cayXanhResponse = new CayXanhResponse();
        cayXanhResponse.setId(entity.getMaCay());
        cayXanhResponse.setMaCay(entity.getMaCay());
        cayXanhResponse.setTenCay(entity.getTenCay());
        cayXanhResponse.setLoaiCay(entity.getLoaiCay().getTenLoai());
        cayXanhResponse.setNgayTrong(entity.getNgayTrong());
        cayXanhResponse.setTanCayChePhu(entity.getTanCayChePhu());
        cayXanhResponse.setChieuCao(entity.getChieuCao());
        cayXanhResponse.setDuongKinh(entity.getDuongKinh());
        cayXanhResponse.setToaDo(entity.getToaDo());
        cayXanhResponse.setMoTaDiaChi(entity.getChiTietDiaChi().getMoTaDiaChi());
        cayXanhResponse.setTrangThaiCay(entity.getTrangThaiCay().getTinhTrangCay());

        cayXanhResponse.setQuanHuyen(entity.getChiTietDiaChi().getTuyenDuong().getPhuongXa().getQuanHuyen().getTenQuan());
        cayXanhResponse.setPhuongXa(entity.getChiTietDiaChi().getTuyenDuong().getPhuongXa().getTenPhuong());
        cayXanhResponse.setTuyenDuong(entity.getChiTietDiaChi().getTuyenDuong().getTenTuyenDuong());

        cayXanhResponse.setMaTuyenDuong(entity.getChiTietDiaChi().getTuyenDuong().getMaTuyenDuong());

        cayXanhResponse.setImages(entity.getHinhAnh().stream().map(item -> {
            UploadImageResponse u = new UploadImageResponse();
            u.setImageUrl(item.getHinhAnh());
            return u;
        }).collect(Collectors.toList()));

        return cayXanhResponse;
    }

    @Override
    public List<Cay> requestToEntity(List<CayXanhRequest> requests) {
        return List.of();
    }

    @Override
    public List<CayXanhResponse> entityToResponse(List<Cay> entities) {
        return entities.stream().map(this::entityToResponse).collect(Collectors.toList());
    }

    @Override
    public Cay partialUpdate(Cay entity, CayXanhRequest request) {
        return null;
    }
}
