import {DatePicker, FormProps, InputNumber} from 'antd';
import {Button, Col, Form, Image, Input, Row, Select, Upload} from 'antd';
import {CiCirclePlus} from "react-icons/ci";

import useTreeCreateViewModel from "./TreeCreate.vm";
import {CayXanhRequest} from "../../models/CayXanh";

export default function TreeCreate() {

    const {
        loading,
        handleSubmit,
        handleOpenPreview,
        handleChangeImageFile,
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
    } = useTreeCreateViewModel()

    const onFinish: FormProps<CayXanhRequest>['onFinish'] = (values) => {
        handleSubmit(values)
    };

    return <div className='client-contact'>
        <div className='container'>
            <h1 className='text-center'>Tạo cây</h1>
            <h4>Thông tin về cây</h4>
            <Form
                form={form}
                name="basic"
                labelCol={{span: 24}}
                wrapperCol={{span: 24}}
                disabled={loading}
                style={{width: '100%'}}
                initialValues={{}}
                onFinish={onFinish}
                autoComplete="off"
            >
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
                        options={[
                            {value: '1', label: 'Cây Cảnh Quan Đô Thị'},
                            {value: '2', label: 'Cây Xanh Giao Thông'},
                            {value: '3', label: 'Cây Xanh Công Nghiệp và Cây Rừng Đô Thị'},
                        ]}
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
                        options={[
                            {value: '1', label: 'Tốt'},
                            {value: '2', label: 'Bình thường'},
                            {value: '3', label: 'Kém'},
                        ]}
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