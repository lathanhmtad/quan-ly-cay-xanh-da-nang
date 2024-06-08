import BaseResponse from "./BaseResponse";
import {UploadedImageResponse} from "./Image";

export interface CayXanhResponse extends BaseResponse {
    maCay: number
    tenCay: string
    ngayTrong: string
    tanCayChePhu: string
    chieuCao: string
    duongKinh: string
    toaDo: string
    moTaDiaChi: string
    loaiCay: string
    trangThaiCay: string
    tuyenDuong: string
    maTuyenDuong: number
    phuongXa: string
    quanHuyen: string
    images: UploadedImageResponse[]
}

export interface CayXanhRequest {
    tenCay: string
    maLoaiCay: number
    ngayTrong: string
    tanCayChePhu: number
    chieuCao: number;
    duongKinh: number
    toaDo: string
    maTrangThaiCay: number
    maTuyenDuong: number
    moTaDiaChi: string
    oldImages?: string[]
    images: UploadedImageResponse[]
}