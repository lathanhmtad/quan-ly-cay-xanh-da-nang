import {ToaDoCayPhanAnhRequest} from "./ToaDo";
import {HinhAnhDto} from "./HinhAnh";

export interface DonThuRequest {
    hoVaTen: string
    email: string
    sdt: string
    soLuongCay: number
    toaDoCayPhanAnh: ToaDoCayPhanAnhRequest
    chiTietDiaChi: ChiTietDiaChi
    lyDoPhanAnh: string
    hinhAnh: HinhAnhDto[]
}

interface ChiTietDiaChi {
    moTaDiaChi: string
    maPhuong: number
}