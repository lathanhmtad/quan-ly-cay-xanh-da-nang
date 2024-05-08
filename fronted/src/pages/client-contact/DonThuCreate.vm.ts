import {useState} from "react";
import {SelectOption} from "../../types/SelectOption";
import useCreateApi from "../../hooks/use-create-api";
import {DonThuRequest} from "../../models/NguoiDan";
import {DonThuResponse} from "../../models/DonThu";
import ClientContactConfigs from "./ClientContactConfigs";
import useGetAllApi from "../../hooks/use-get-all-api";
import ManageDiaDiemConfig from "../manage-dia-diem/ManageDiaDiemConfig";
import useGetByIdApi from "../../hooks/use-get-by-id-api";
import {QuanHuyenResponse} from "../../models/DiaDiem";

export default function DonThuCreateViewModel() {
    const [quanHuyenResponse, setQuanHuyenResponse] =
        useState<QuanHuyenResponse[]>([])
    const [quanHuyenSelectList, setQuanHuyenSelectList] = useState<SelectOption[]>([]);
    const [phuongXaSelectList, setPhuongXaSelectList] = useState<SelectOption[]>([])

    const createApi = useCreateApi<DonThuRequest, DonThuResponse>(ClientContactConfigs.resourceUrl)

    useGetAllApi<QuanHuyenResponse>(ManageDiaDiemConfig.resourceUrlDiaDiemQuanHuyen, ManageDiaDiemConfig.resourceKeyDiaDiemQuanHuyen, {all: true},
        (quanHuyenListResponse) => {
            const selectList: SelectOption[] = quanHuyenListResponse.content.map(item => ({
                value: String(item.maQuan),
                label: item.tenQuan
            }))
            setQuanHuyenSelectList(selectList)
            setQuanHuyenResponse(quanHuyenListResponse.content)
        })

    const loadSelectListPhuongXaByQuanHuyen = (maQuan: string | number) => {
        // const quanHuyen = quanHuyenResponse.find(item => item.maQuan == maQuan)
        // const selectList: SelectOption[] | undefined = quanHuyen?.phuongXa.map(item => ({
        //     value: String(item.maPhuong),
        //     label: item.tenPhuong
        // }))
        // setPhuongXaSelectList(selectList ? selectList : [])
    }

    return {
        quanHuyenSelectList,
        phuongXaSelectList,
        loadSelectListPhuongXaByQuanHuyen
    }
}