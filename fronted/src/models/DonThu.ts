import BaseResponse from "./BaseResponse";
import {ToaDoDto} from "./ToaDo";
import {DiaChiResponse} from "./DiaChi";

export interface DonThuResponse extends BaseResponse {
    maThongTinPhanAnh: number
    hoVaTen: string
    email: string
    sdt: string
    soLuongCay: number
    lyDoPhanAnh: string
    toaDoCayPhanAnh: ToaDoDto[]
    chiTietDiaChi: DiaChiResponse
    trangThai: boolean
}