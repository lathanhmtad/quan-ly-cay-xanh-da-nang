import BaseResponse from "./BaseResponse";

export interface CayXanhResponse extends BaseResponse {
    maCay: number
    toaDo: string
    tenCay: string
    loaiCay: string
    ngayTrong: string
    tanCayChePhu: string
    chieuCao: string
    duongKinh: string
    diaChi: string
    trangThaiCay: string
}