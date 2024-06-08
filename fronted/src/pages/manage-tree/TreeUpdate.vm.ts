import {useState} from "react";
import {SelectOption} from "../../types/SelectOption";
import useGetAllApi from "../../hooks/use-get-all-api";
import {PhuongXaResponse, QuanHuyenResponse, TuyenDuongResponse} from "../../models/DiaDiem";
import ManageDiaDiemConfig from "../manage-dia-diem/ManageDiaDiemConfig";
import ApplicationConstants from "../../constants/ApplicationConstants";
import {Form, GetProp, notification, UploadFile, UploadProps} from "antd";
import useCreateApi from "../../hooks/use-create-api";
import {CayXanhRequest, CayXanhResponse} from "../../models/CayXanh";
import useUploadMultipleImagesApi from "../../hooks/use-upload-multiple-images-api";
import {UploadedImageResponse} from "../../models/Image";
import useGetByIdApi from "../../hooks/use-get-by-id-api";
import ResourceUrl from "../../constants/ResouceUrl";
import useUpdateApi from "../../hooks/use-update-api";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

export default function useTreeUpdateViewModel(id: number) {
    const [form] = Form.useForm();

    const [cay, setCay] = useState<CayXanhResponse>()

    const [loading, setLoading] = useState<boolean>(false)

    const [imageFiles, setImageFiles] =
        useState<UploadFile[]>([])

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');

    const [quanHuyenSelectList, setQuanHuyenSelectList] = useState<SelectOption[]>([])
    const [phuongXaSelectList, setPhuongXaSelectList] = useState<SelectOption[]>([])
    const [tuyenDuongSelectList, setTuyenDuongSelectList] = useState<SelectOption[]>([])

    const [loaiCayOptions, setLoaiCayOptions] = useState([
        {value: '1', label: 'Cây Cảnh Quan Đô Thị'},
        {value: '2', label: 'Cây Xanh Giao Thông'},
        {value: '3', label: 'Cây Xanh Công Nghiệp và Cây Rừng Đô Thị'},
    ])

    const [trangThaiCayOptions, setTrangThaiCayOptions] =
        useState([
            {value: '1', label: 'Tốt'},
            {value: '2', label: 'Bình thường'},
            {value: '3', label: 'Kém'},
        ])

    const handleOpenPreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }
        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    useGetByIdApi<CayXanhResponse>(
        ResourceUrl.TREE,
        "cays", id,
        async (cayXanhResponse) => {
            setCay(cayXanhResponse);

            const fileList: UploadFile[] = cayXanhResponse.images.map((value, index) => ({
                uid: `${index}`,
                name: `image.png`,
                status: 'done',
                url: value.imageUrl,
            }))
            setImageFiles(fileList)
            form.setFieldValue('imageFiles', fileList)

            const loaiCayOption =
                loaiCayOptions.find(option => option.label === cayXanhResponse.loaiCay);
            form.setFieldValue('maLoaiCay', loaiCayOption?.value)

            const trangThaiCayOption =
                trangThaiCayOptions.find(option => option.label === cayXanhResponse.trangThaiCay);
            form.setFieldValue('maTrangThaiCay', trangThaiCayOption?.value)
        }
    );

    const updateApi =
        useUpdateApi<CayXanhRequest, CayXanhResponse>(`${ApplicationConstants.API_PATH}/cay`,
            "cay", id);

    const uploadImagesApi = useUploadMultipleImagesApi()

    const handleChangeImageFile: UploadProps['onChange'] =
        ({fileList: newFileList}) => {

            setImageFiles(newFileList);
            form.setFieldValue("imageFiles", newFileList);
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

    const handleQuanHuyenChange = (value: string) => {
        loadSelectListPhuongXaByQuanHuyen(value)
    };

    const handleTuyenDuongChange = (value: string) => {
        loadSelectListTuyenDuongByPhuongXa(value)
    };

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
        }
    };

    const handleSubmit = (values: CayXanhRequest) => {
        setLoading(true)
        const createCay = (imageUrls: UploadedImageResponse[]) => {
            // @ts-ignore
            const requestBody: CayXanhRequest = {
                tenCay: values.tenCay,
                maLoaiCay: values.maLoaiCay,
                ngayTrong: values.ngayTrong,
                tanCayChePhu: values.tanCayChePhu,
                chieuCao: values.chieuCao,
                duongKinh: values.duongKinh,
                toaDo: values.toaDo,
                maTrangThaiCay: values.maTrangThaiCay,
                maTuyenDuong: !isNaN(values.maTuyenDuong) ? values.maTuyenDuong : cay?.maTuyenDuong ? cay.maTuyenDuong : 1,
                moTaDiaChi: values.moTaDiaChi,
                images: imageUrls,
                oldImages: imageFiles
                    .map(value => value.url)
                    .filter((url): url is string => Boolean(url))
            }
            updateApi.mutate(requestBody, {
                onSuccess: () =>
                    setLoading(false),
                onError: () => setLoading(false)
            })
        }

        const filesToUpload = imageFiles.filter(item => item.originFileObj).map(item => item.originFileObj);

        if (filesToUpload.length > 0) {
            // @ts-ignore
            uploadImagesApi.mutate(filesToUpload, {
                onSuccess: (imageCollectionResponse) =>
                    createCay(imageCollectionResponse.content),
                onError: () => setLoading(false)
            })
        } else {
            createCay([])
        }

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
        cay,
        handleQuanHuyenChange,
        handleTuyenDuongChange,
        handleChangeImageFile,
        imageFiles,
        handleOpenPreview,
        loading,
        handleSubmit,
        loaiCayOptions,
        trangThaiCayOptions
    }
}