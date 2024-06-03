import {useEffect, useState} from "react";
import {SelectOption} from "../../types/SelectOption";
import useGetAllApi from "../../hooks/use-get-all-api";
import {PhuongXaResponse, QuanHuyenResponse, TuyenDuongResponse} from "../../models/DiaDiem";
import ManageDiaDiemConfig from "../manage-dia-diem/ManageDiaDiemConfig";
import ApplicationConstants from "../../constants/ApplicationConstants";
import {useForm} from "antd/es/form/Form";
import useGetByIdApi from "../../hooks/use-get-by-id-api";
import {CayXanhRequest, CayXanhResponse} from "../../models/CayXanh";
import ResouceUrl from "../../constants/ResouceUrl";
import ManageTreeConfig from "./ManageTreeConfig";
import useUpdateApi from "../../hooks/use-update-api";

export default function useTreeUpdateViewModel(id: number) {
    const [form] = useForm()

    const [quanHuyenSelectList, setQuanHuyenSelectList] = useState<SelectOption[]>([])
    const [phuongXaSelectList, setPhuongXaSelectList] = useState<SelectOption[]>([])
    const [tuyenDuongSelectList, setTuyenDuongSelectList] = useState<SelectOption[]>([])
    const [congVienSelectList, setCongVienSelectList] = useState<SelectOption[]>([])


    const updateApi =
        useUpdateApi<CayXanhRequest, any>(`${ApplicationConstants.API_PATH}/cay`, ManageTreeConfig.resourceKey, id)

    const {isLoading, data} = useGetByIdApi<CayXanhResponse>
    (
        ResouceUrl.TREE,
        ManageTreeConfig.resourceKey,
        id
    )

    // Cập nhật form khi có data
    useEffect(() => {
        if (data) {
            form.setFieldsValue({
                maCay: data.maCay,
                tenCay: data.tenCay,
                // maLoaiCay: data.loaiCay
                // ngayTrong: data.ngayTrong,
                tanCayChePhu: data.tanCayChePhu,
                chieuCao: data.chieuCao,
                duongKinh: data.duongKinh,
                toaDo: data.toaDo,
                moTaDiaChi: data.diaChi,
                // maTrangThaiCay: data.trangThaiCay
            });
        }
    }, [data, form]);

    useGetAllApi<QuanHuyenResponse>
    (
        ManageDiaDiemConfig.resourceUrlDiaDiemQuanHuyen,
        ManageDiaDiemConfig.resourceKeyDiaDiemQuanHuyen,
        {all: true},
        (quanHuyenListResponse) => {
            const selectList: SelectOption[] = quanHuyenListResponse.content.map(item => ({
                value: String(item.maQuan),
                label: item.tenQuan
            }))
            setQuanHuyenSelectList(selectList)
        }
    )

    const loadSelectListPhuongXaByQuanHuyen = async (maQuan: string) => {
        try {
            const response: Response = await fetch(`${ApplicationConstants.API_PATH}/phuong-xa/${maQuan}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data: PhuongXaResponse[] = await response.json();
            const phuongXaOptions = data.map(item => ({
                value: String(item.maPhuong),
                label: item.tenPhuong
            }));
            setPhuongXaSelectList(phuongXaOptions);
        } catch (error) {
            console.error('Failed to fetch phuong xa:', error);
            // Handle errors as appropriate for your application
        }
    };

    const loadSelectListTuyenDuongByPhuongXa = async (maPhuong: string) => {
        try {
            const response: Response = await fetch(`${ApplicationConstants.API_PATH}/tuyen-duong/${maPhuong}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data: TuyenDuongResponse[] = await response.json();
            const tuyenDuongOptions = data.map(item => ({
                value: String(item.maTuyenDuong),
                label: item.tenTuyenDuong
            }));
            setTuyenDuongSelectList(tuyenDuongOptions);
        } catch (error) {
            console.error('Failed to fetch phuong xa:', error);
            // Handle errors as appropriate for your application
        }
    };

    return {
        quanHuyenSelectList,
        loadSelectListPhuongXaByQuanHuyen,
        loadSelectListTuyenDuongByPhuongXa,
        phuongXaSelectList,
        tuyenDuongSelectList,
        form, updateApi
    }
}