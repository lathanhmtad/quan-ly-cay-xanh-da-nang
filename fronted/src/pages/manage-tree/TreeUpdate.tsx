import {DatePicker, FormProps, GetProp, InputNumber, UploadFile, UploadProps} from 'antd';
import {Button, Col, Form, Image, Input, Row, Select, Upload, notification} from 'antd';
import {CiCirclePlus} from "react-icons/ci";
import {CayXanhRequest} from "../../models/CayXanh";
import {useParams} from "react-router-dom";
import useTreeUpdateViewModel from "./TreeUpdate.vm";
import moment from 'moment';

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
        cay,
        loading,
        handleSubmit,
        loaiCayOptions,
        handleOpenPreview,
        handleChangeImageFile,
        trangThaiCayOptions,
        imageFiles,
        form,
        handleQuanHuyenChange,
        handleTuyenDuongChange,
        previewOpen,
        previewImage,
        setPreviewOpen,
        setPreviewImage,
        phuongXaSelectList,
        quanHuyenSelectList,
        tuyenDuongSelectList
    } = useTreeUpdateViewModel(Number(id))

    const onFinish: FormProps<CayXanhRequest>['onFinish'] = (values) => {
        handleSubmit(values)
    };

    if (cay) {
        return <div className='client-contact'>
            <div className='container'>
                <h1 className='text-center'>Cập nhập cây / Id: {id}</h1>
                <h4>Thông tin cập nhập về cây</h4>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{span: 24}}
                    wrapperCol={{span: 24}}
                    disabled={loading}
                    style={{width: '100%'}}
                    initialValues={{
                        maCay: cay.maCay,
                        tenCay: cay.tenCay,
                        maLoaiCay: cay.loaiCay,
                        ngayTrong: moment(cay.ngayTrong),
                        tanCayChePhu: cay.tanCayChePhu,
                        chieuCao: cay.chieuCao,
                        duongKinh: cay.duongKinh,
                        toaDo: cay.toaDo,
                        moTaDiaChi: cay.moTaDiaChi,
                        maTrangThaiCay: cay.trangThaiCay,
                        maQuan: cay.quanHuyen,
                        maPhuong: cay.phuongXa,
                        maTuyenDuong: cay.tuyenDuong
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Mã cây"
                        name="maCay"
                    >
                        <Input disabled/>
                    </Form.Item>

                    <Form.Item<CayXanhRequest>
                        label="Tên cây"
                        name="tenCay"
                        rules={[{required: true, message: 'Vui lòng nhập tên!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item<CayXanhRequest>
                        label="Loài cây"
                        name='maLoaiCay'
                        rules={[{required: true, message: 'Vui lòng chọn loài cây!'}]}
                    >
                        <Select
                            style={{width: '100%'}}
                            options={loaiCayOptions}
                        />
                    </Form.Item>

                    <Row gutter={[24, 0]}>
                        <Col span={9}>
                            <Form.Item<CayXanhRequest>
                                label="Ngày trồng"
                                name="ngayTrong"
                                rules={[{required: true, message: 'Vui lòng chọn ngày trồng'}]}
                            >
                                <DatePicker
                                    style={{width: '100%'}}
                                    // locale={}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={5}>
                            <Form.Item<CayXanhRequest>
                                label="Tán cây che phủ"
                                name="tanCayChePhu"
                                rules={[{required: true, message: 'Nhập tán cây che phủ!'}]}
                            >
                                <InputNumber
                                    style={{width: '100%'}}/>
                            </Form.Item>
                        </Col>
                        <Col span={5}>
                            <Form.Item<CayXanhRequest>
                                label="Chiều cao"
                                name="chieuCao"
                                rules={[{required: true, message: 'Vui lòng nhập chiều cao!'}]}
                            >
                                <InputNumber
                                    style={{width: '100%'}}/>
                            </Form.Item>
                        </Col>
                        <Col span={5}>
                            <Form.Item<CayXanhRequest>
                                label="Đường kính"
                                name="duongKinh"
                                rules={[{required: true, message: 'Vui lòng nhập đường kính!'}]}
                            >
                                <InputNumber
                                    style={{width: '100%'}}/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item<CayXanhRequest>
                        label="Tọa độ"
                        name="toaDo"
                        rules={[{required: true, message: 'Vui lòng nhập số tọa độ!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item<CayXanhRequest>
                        label="Mô tả đia chỉ"
                        name="moTaDiaChi"
                        rules={[{required: true, message: 'Vui lòng nhập mô tả địa chỉ!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item<CayXanhRequest>
                        label="Trạng thái cây"
                        name='maTrangThaiCay'
                        rules={[{required: true, message: 'Vui lòng chọn trạng thái!'}]}
                    >
                        <Select
                            style={{width: '100%'}}
                            options={trangThaiCayOptions}
                        />
                    </Form.Item>

                    <Row gutter={[24, 0]}>
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
                            <Form.Item<CayXanhRequest>
                                label="Tuyến đường"
                                name="maTuyenDuong"
                            >
                                <Select
                                    placeholder=""
                                    options={tuyenDuongSelectList}
                                    allowClear
                                >
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={12}>
                            <Form.Item
                                name="imageFiles"
                                label="Hình ảnh"
                                rules={[{required: true, message: 'Vui lòng tải hình ảnh về cây!'}]}
                            >
                                <Upload
                                    multiple
                                    listType="picture-card"
                                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                    fileList={imageFiles}
                                    beforeUpload={() => false}
                                    onChange={handleChangeImageFile}
                                    onPreview={handleOpenPreview}
                                >
                                    <button style={{border: 0, background: 'none'}} type="button">
                                        <CiCirclePlus/>
                                        <div style={{marginTop: 8}}>Upload</div>
                                    </button>
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
                        <Button
                            loading={loading}
                            size='large' type="primary" style={{width: '100%'}} htmlType="submit">
                            Gửi
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    }
    return <div>Loading...</div>
}