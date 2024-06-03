import BaseResponse from "./BaseResponse";
import {HinhAnhDto} from "./HinhAnh";

export interface CayXanhResponse extends BaseResponse {
    maCay: number
    toaDo: string
    tenCay: string
    hinhAnh: HinhAnhDto[]
    loaiCay: string
    ngayTrong: string
    tanCayChePhu: string
    chieuCao: string
    duongKinh: string
    diaChi: string
    trangThaiCay: string
}

export interface CayXanhRequest {
    tenCay: string
    maLoaiCay: number
    ngayTrong: Date
    tanCayChePhu: number
    chieuCao: number;
    duongKinh: number
    toaDo: string
    maTrangThaiCay: number;
    maTuyenDuong: number;
    moTaDiaChi: string
}