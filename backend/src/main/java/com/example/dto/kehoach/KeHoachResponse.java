package com.example.dto.kehoach;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class KeHoachResponse {
    private Long id;
    private Long maKeHoach;
    private String tenKeHoach;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    private Date hanHoanThanh;
    private Integer soLuong;
    private String diaDiem;
    private String noiDung;
    private Long maThongTinPhanAnh;
}
