import {useState} from "react";
import {Form, GetProp, notification, UploadFile, UploadProps} from "antd";
import {KeHoachRequest, KeHoachResponse} from "../../models/KeHoach";
import useGetAllApi from "../../hooks/use-get-all-api";
import {SelectOption} from "../../types";
import {DonThuResponse} from "../../models/DonThu";
import ResourceUrl from "../../constants/ResouceUrl";
import useGetByIdApi from "../../hooks/use-get-by-id-api";
import useUpdateApi from "../../hooks/use-update-api";

export default function useKeHoachUpdateViewModel(id: number) {
    const [form] = Form.useForm();

    const [keHoach, setKeHoach] = useState<KeHoachResponse>()
    const [loading, setLoading] = useState<boolean>(false)

    const [donThuChuaXuLy, setDonThuChuaXuLy] = useState<SelectOption[]>([])

    useGetByIdApi<KeHoachResponse>(
        ResourceUrl.KE_HOACH,
        "ke-hoach", id,
        async (keHoachResponse) => {
            setKeHoach(keHoachResponse);
            form.setFieldValue('maThongTinPhanAnh', keHoachResponse.maThongTinPhanAnh)
        }
    );

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
            selectList.unshift({
                value: '',
                label: ''
            })
            setDonThuChuaXuLy(selectList)
        }
    )

    const updateApi =
        useUpdateApi<KeHoachRequest, any>(ResourceUrl.KE_HOACH,
            "keHoach", id);


    const handleSubmit = (values: KeHoachRequest) => {
        setLoading(true)
        const update = () => {
            const requestBody: KeHoachRequest = {
                maKeHoach: id,
                tenKeHoach: values.tenKeHoach,
                hanHoanThanh: values.hanHoanThanh,
                diaDiem: values.diaDiem,
                noiDung: values.noiDung,
                soLuong: values.soLuong,
                maThongTinPhanAnh: values.maThongTinPhanAnh ? values.maThongTinPhanAnh : 0
            }
            updateApi.mutate(requestBody, {
                onSuccess: () =>
                    setLoading(false),
                onError: () => setLoading(false)
            })
        }

        update()

    }

    return {
        form,
        keHoach,
        loading,
        handleSubmit,
        donThuChuaXuLy
    }
}