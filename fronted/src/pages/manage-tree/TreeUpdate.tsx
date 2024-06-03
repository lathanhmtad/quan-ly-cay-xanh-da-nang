import {DatePicker, FormProps, GetProp, InputNumber, UploadFile, UploadProps} from 'antd';
import {Button, Col, Form, Image, Input, Row, Select, Upload, notification} from 'antd';
import {CiCirclePlus} from "react-icons/ci";

import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';

// import './ClientContact.scss'
import {useEffect, useState} from "react";
import {DonThuRequest} from "../../models/NguoiDan";
import {useForm} from "antd/es/form/Form";
import useTreeCreateViewModel from "./TreeCreate.vm";
import {CayXanhRequest} from "../../models/CayXanh";
import useCreateApi from "../../hooks/use-create-api";
import ApplicationConstants from "../../constants/ApplicationConstants";
import useNotification from "antd/es/notification/useNotification";
import {useParams} from "react-router-dom";
import useTreeUpdateViewModel from "./TreeUpdate.vm";
import useUpdateApi from "../../hooks/use-update-api";
import ManageTreeConfig from "./ManageTreeConfig";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

export default function TreeUpdate() {

    const {id} = useParams();

    const {
        updateApi,
        form,
        phuongXaSelectList,
        quanHuyenSelectList,
        tuyenDuongSelectList,
        loadSelectListPhuongXaByQuanHuyen,
        loadSelectListTuyenDuongByPhuongXa
    } = useTreeUpdateViewModel(Number(id))

    const [maQuan, setMaQuan] = useState<string | null>(null);


    const handleQuanHuyenChange = (value: string) => {
        loadSelectListPhuongXaByQuanHuyen(value)
    };

    const handleTuyenDuongChange = (value: string) => {
        loadSelectListTuyenDuongByPhuongXa(value)
    };

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([])
    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }
        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };


    const handleChange: UploadProps['onChange'] = ({fileList: newFileList}) => {
        setFileList(newFileList);
        form.setFieldsValue({images: newFileList});
    }

    const uploadButton = (
        <button style={{border: 0, background: 'none'}} type="button">
            <CiCirclePlus/>
            <div style={{marginTop: 8}}>Upload</div>
        </button>
    );

    const onFinish: FormProps<CayXanhRequest>['onFinish'] = (values) => {
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
        updateApi.mutate(requestBody, {
            onSuccess: async () => {
                notification.success({
                    message: 'Cập nhập thành công'
                });
            }
        })

    };

    const onFinishFailed: FormProps<DonThuRequest>['onFinishFailed'] = (errorInfo) => {
        //console.log(fileList)
        console.log('Failed:', errorInfo);
    };

    const normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return <div className='client-contact'>
        <div className='container'>
            <h1 className='text-center'>Cập nhập cây / Id: {id}</h1>
            <h4>Thông tin cập nhập về cây</h4>
            <Form
                form={form}
                name="basic"
                labelCol={{span: 24}}
                wrapperCol={{span: 24}}
                style={{width: '100%'}}
                initialValues={{}}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Mã cây"
                    name="maCay"
                    rules={[{required: true, message: 'Vui lòng nhập tên!'}]}
                >
                    <Input disabled/>
                </Form.Item>

                <Form.Item
                    label="Tên cây"
                    name="tenCay"
                    rules={[{required: true, message: 'Vui lòng nhập tên!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Loài cây"
                    name='maLoaiCay'
                    rules={[{required: true, message: 'Vui lòng chọn loài cây!'}]}
                >
                    <Select
                        style={{width: '100%'}}
                        options={[
                            {value: '1', label: 'Cây Cảnh Quan Đô Thị'},
                            {value: '2', label: 'Cây Xanh Giao Thông'},
                            {value: '3', label: 'Cây Xanh Công Nghiệp và Cây Rừng Đô Thị'},
                        ]}
                    />
                </Form.Item>

                <Row>
                    <Col span={9}>
                        <Form.Item
                            label="Ngày trồng"
                            name="ngayTrong"
                            rules={[{required: true, message: 'Vui lòng chọn ngày trồng'}]}
                        >
                            <DatePicker
                                style={{width: '100%'}}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            label="Tán cây che phủ"
                            name="tanCayChePhu"
                            rules={[{required: true, message: 'Nhập tán cây che phủ!'}]}
                        >
                            <InputNumber
                                style={{width: '100%'}}/>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            label="Chiều cao"
                            name="chieuCao"
                            rules={[{required: true, message: 'Vui lòng nhập chiều cao!'}]}
                        >
                            <InputNumber
                                style={{width: '100%'}}/>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            label="Đường kính"
                            name="duongKinh"
                            rules={[{required: true, message: 'Vui lòng nhập đường kính!'}]}
                        >
                            <InputNumber
                                style={{width: '100%'}}/>
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item
                    label="Tọa độ"
                    name="toaDo"
                    rules={[{required: true, message: 'Vui lòng nhập số tọa độ!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Mô tả đia chỉ"
                    name="moTaDiaChi"
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Trạng thái cây"
                    name='maTrangThaiCay'
                    rules={[{required: true, message: 'Vui lòng chọn trạng thái!'}]}
                >
                    <Select
                        style={{width: '100%'}}
                        // onChange={handleChange}
                        options={[
                            {value: '1', label: 'Tốt'},
                            {value: '2', label: 'Bình thường'},
                            {value: '3', label: 'Kém'},
                        ]}
                    />
                </Form.Item>

                <Row>
                    <Col span={8}>
                        <Form.Item
                            label="Quận/Huyện"
                            name="maQuan"
                            rules={[{required: true, message: 'Vui lòng chọn quận/huyện!'}]}
                        >
                            <Select
                                placeholder=""
                                onChange={handleQuanHuyenChange}
                                options={quanHuyenSelectList}
                                allowClear
                            >
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item
                            label="Phường/Xã"
                            name="maPhuong"
                        >
                            <Select
                                placeholder=""
                                options={phuongXaSelectList}
                                onChange={handleTuyenDuongChange}
                                allowClear
                            >
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item
                            label="Tuyến đường"
                            name="maTuyenDuong"
                        >
                            <Select
                                placeholder=""
                                options={tuyenDuongSelectList}
                                // onChange={onGenderChange}
                                allowClear
                            >
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <Form.Item
                            name="images"
                            label="Hình ảnh"
                            valuePropName="fileList"
                            // getValueFromEvent={normFile}
                            rules={[{required: true, message: 'Please tải hình ảnh về cây!'}]}
                        >
                            <Upload
                                multiple
                                // name='file'
                                listType="picture-card"
                                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                fileList={fileList}
                                beforeUpload={() => false}
                                onChange={handleChange}
                                onPreview={handlePreview}
                            >
                                {fileList.length >= 8 ? null : uploadButton}
                            </Upload>
                            {previewImage && (
                                <Image
                                    wrapperStyle={{display: 'none'}}
                                    preview={{
                                        visible: previewOpen,
                                        onVisibleChange: (visible) => setPreviewOpen(visible),
                                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                                    }}
                                    src={previewImage}
                                />
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item wrapperCol={{offset: 22, span: 16}}>
                    <Button size='large' type="primary" style={{width: '100%'}} htmlType="submit">
                        Gửi
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
}