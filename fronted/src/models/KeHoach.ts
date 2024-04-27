import BaseResponse from "./BaseResponse";

export interface KeHoachResponse extends BaseResponse {
    maKeHoach: number
    tenKeHoach: string
    hanHoanThanh: string
    soLuong: number
    diaDiem: string
    noiDung: string
}