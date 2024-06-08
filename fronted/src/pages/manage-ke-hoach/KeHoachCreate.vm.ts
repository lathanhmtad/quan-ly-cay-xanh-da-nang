import {useState} from "react";
import {Form, GetProp, notification, UploadFile, UploadProps} from "antd";
import useCreateApi from "../../hooks/use-create-api";
import {KeHoachRequest} from "../../models/KeHoach";
import useGetAllApi from "../../hooks/use-get-all-api";
import {SelectOption} from "../../types";
import {DonThuResponse} from "../../models/DonThu";
import ResourceUrl from "../../constants/ResouceUrl";

export default function useKeHoachCreateViewModel() {
    const [form] = Form.useForm();

    const [loading, setLoading] = useState<boolean>(false)

    const [donThuChuaXuLy, setDonThuChuaXuLy] = useState<SelectOption[]>([])

    useGetAllApi<DonThuResponse>
    (
        ResourceUrl.DON_THU,
        "donThu",
        {all: true},
        (donThuResponse) => {

            const filteredDonThu = donThuResponse.content.filter(item => item.trangThai === false);

            const selectList: SelectOption[] = filteredDonThu.map(item => ({
                value: String(item.maThongTinPhanAnh),
                label: String(item.maThongTinPhanAnh)
            }))
            setDonThuChuaXuLy(selectList)
        }
    )

    const createApi = useCreateApi<KeHoachRequest, any>
    (ResourceUrl.KE_HOACH)

    const handleSubmit = (values: KeHoachRequest) => {
        setLoading(true)
        const createKeHoach = () => {
            const requestBody: KeHoachRequest = {
                tenKeHoach: values.tenKeHoach,
                hanHoanThanh: values.hanHoanThanh,
                diaDiem: values.diaDiem,
                noiDung: values.noiDung,
                soLuong: values.soLuong,
                maThongTinPhanAnh: values.maThongTinPhanAnh ? values.maThongTinPhanAnh : 0
            }
            createApi.mutate(requestBody, {
                onSuccess: () =>
                    setLoading(false),
                onError: () => setLoading(false)
            })
        }

        createKeHoach()

    }

    return {
        form,
        loading,
        handleSubmit,
        donThuChuaXuLy
    }
}