import {useState} from "react";
import {SelectOption} from "../../types/SelectOption";
import useGetAllApi from "../../hooks/use-get-all-api";
import {PhuongXaResponse, QuanHuyenResponse, TuyenDuongResponse} from "../../models/DiaDiem";
import ManageDiaDiemConfig from "../manage-dia-diem/ManageDiaDiemConfig";
import ApplicationConstants from "../../constants/ApplicationConstants";
import {Form, GetProp, notification, UploadFile, UploadProps} from "antd";
import useCreateApi from "../../hooks/use-create-api";
import {CayXanhRequest} from "../../models/CayXanh";
import useUploadMultipleImagesApi from "../../hooks/use-upload-multiple-images-api";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

export default function useTreeCreateViewModel() {
    const [form] = Form.useForm();

    const [loading, setLoading] = useState<boolean>(false)

    const [imageFiles, setImageFiles] =
        useState<UploadFile[]>([])

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');

    const [quanHuyenSelectList, setQuanHuyenSelectList] = useState<SelectOption[]>([])
    const [phuongXaSelectList, setPhuongXaSelectList] = useState<SelectOption[]>([])
    const [tuyenDuongSelectList, setTuyenDuongSelectList] = useState<SelectOption[]>([])
    const [congVienSelectList, setCongVienSelectList] = useState<SelectOption[]>([])

    const handleOpenPreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }
        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    const createApi = useCreateApi<CayXanhRequest, any>
    (`${ApplicationConstants.API_PATH}/cay`)

    const handleQuanHuyenChange = (value: string) => {
        loadSelectListPhuongXaByQuanHuyen(value)
    };

    const handleTuyenDuongChange = (value: string) => {
        loadSelectListTuyenDuongByPhuongXa(value)
    };

    const uploadImagesApi = useUploadMultipleImagesApi()

    const handleChangeImageFile: UploadProps['onChange'] =
        ({fileList: newFileList}) => {
            setImageFiles(newFileList);
            form.setFieldsValue({images: newFileList});
        }

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

    const handleSubmit = (values: CayXanhRequest) => {
        const requestBody: CayXanhRequest = {
            tenCay: values.tenCay,
            maLoaiCay: values.maLoaiCay,
            ngayTrong: values.ngayTrong,
            tanCayChePhu: values.tanCayChePhu,
            chieuCao: values.chieuCao,
            duongKinh: values.duongKinh,
            toaDo: values.toaDo,
            maTrangThaiCay: values.maTrangThaiCay,
            maTuyenDuong: values.maTuyenDuong,
            moTaDiaChi: values.moTaDiaChi
        }
        createApi.mutate(requestBody, {
            onSuccess: async () => {
                notification.success({
                    message: 'Tạo thành công'
                });
            }
        })

        // uploadImagesApi.mutate(fileList.map(item => item.originFileObj as File))

    }

    return {
        previewImage,
        previewOpen,
        setPreviewImage,
        setPreviewOpen,
        quanHuyenSelectList,
        phuongXaSelectList,
        tuyenDuongSelectList,
        form,
        handleQuanHuyenChange,
        handleTuyenDuongChange,
        handleChangeImageFile,
        imageFiles,
        handleOpenPreview
    }
}