import type {FormProps, GetProp, UploadFile, UploadProps} from 'antd';
import {Button, Col, Form, Image, Input, Row, Select, Upload} from 'antd';
import {CiCirclePlus} from "react-icons/ci";

import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';

import './ClientContact.scss'
import {useState} from "react";
import {DonThuRequest} from "../../models/NguoiDan";
import DonThuCreateViewModel from "./DonThuCreate.vm";
import {useForm} from "antd/es/form/Form";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

export default function ClientContact() {
    const {
        quanHuyenSelectList,
        phuongXaSelectList
        , loadSelectListPhuongXaByQuanHuyen
    } = DonThuCreateViewModel()

    const [form] = Form.useForm();

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

    // const handleChange: UploadProps['onChange'] = ({file, fileList: newFileList}) => {
    //     if (!file.response || file.response.status !== 'success') {
    //         const index = newFileList.findIndex(f => f.uid === file.uid);
    //         if (index !== -1) {
    //             newFileList[index].status = 'done';
    //         }
    //     }
    //     setFileList(newFileList);
    // };

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
    const onFinish: FormProps<DonThuRequest>['onFinish'] = (values) => {
        console.log('Success:', values);
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

    return <div className='client-contact py-5'>
        <div className='container'>
            <h1 className='text-center'>LIÊN HỆ</h1>
            <h4>Thông tin về bạn</h4>
            <Form
                form = {form}
                name="basic"
                labelCol={{span: 24}}
                wrapperCol={{span: 24}}
                style={{width: '100%'}}
                initialValues={{
                    toaDoCayPhanAnh: [undefined]
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<DonThuRequest>
                    label="Họ và tên"
                    name="hoVaTen"
                    rules={[{required: true, message: 'Vui lòng nhập tên!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item<DonThuRequest>
                    label="Email"
                    name="email"
                >
                    <Input/>
                </Form.Item>

                <Form.Item<DonThuRequest>
                    label="Số điện thoại"
                    name="sdt"
                    rules={[{required: true, message: 'Vui lòng nhập số đện thoại liên lạc!'}]}
                >
                    <Input/>
                </Form.Item>

                <h5 className='mt-4'>Thông tin cần phản ánh</h5>

                <Form.Item<DonThuRequest>
                    label="Số lượng cây"
                    name="soLuongCay"
                    rules={[{required: true, message: 'Vui lòng nhập số lượng cây!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.List
                    name="toaDoCayPhanAnh"
                    // rules={[
                    //     {
                    //         validator: async (_, names) => {
                    //             if (!names || names.length < 2) {
                    //                 return Promise.reject(new Error('At least 2 passengers'));
                    //             }
                    //         },
                    //     },
                    // ]}
                >
                    {(fields, {add, remove}, {errors}) => (
                        <>
                            {fields.map((field, index) => (
                                <Form.Item
                                    label={index === 0 ? 'Tọa độ' : ''}
                                    required={true}
                                    key={field.key}
                                >
                                    <Form.Item
                                        {...field}
                                        rules={[
                                            {
                                                required: true,
                                                whitespace: true,
                                                message: "Vui lòng nhập tọa độ",
                                            },
                                        ]}
                                        noStyle
                                    >
                                        <Input placeholder="" style={{width: '100%'}}/>
                                    </Form.Item>
                                    {fields.length > 1 ? (
                                        <MinusCircleOutlined
                                            className="dynamic-delete-button"
                                            onClick={() => remove(field.name)}
                                        />
                                    ) : null}
                                </Form.Item>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    style={{width: '100%'}}
                                    icon={<PlusOutlined/>}
                                >
                                    Thêm toa độ
                                </Button>
                                <Form.ErrorList errors={errors}/>
                            </Form.Item>
                        </>
                    )}
                </Form.List>

                <Form.Item<DonThuRequest>
                    label="Địa chỉ gần cây xanh nhất"
                    name="chiTietDiaChi"
                    rules={[{required: true, message: 'Vui lòng nhập địa chỉ!'}]}
                >
                    <Input/>
                </Form.Item>

                <Row gutter={[24, 0]}>
                    <Col span={12}>
                        <Form.Item
                            label="Quận/Huyện"
                            name="maQuan"
                            rules={[{required: true, message: 'Vui lòng chọn quận/huyện!'}]}
                        >
                            <Select
                                placeholder=""
                                onChange={(value) => loadSelectListPhuongXaByQuanHuyen(value)}
                                options={quanHuyenSelectList}
                                allowClear
                            >
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            label="Phường/Xã"
                            name="maPhuong"
                            //rules={[{required: true, message: 'Vui lòng chọn phường/xã!'}]}
                        >
                            <Select
                                placeholder=""
                                options={phuongXaSelectList}
                                // onChange={onGenderChange}
                                allowClear
                            >
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[24, 0]}>
                    <Col span={12}>
                        <Form.Item<DonThuRequest>
                            label="Lý do phản ánh"
                            name="lyDoPhanAnh"
                            rules={[{required: true, message: 'Please nhập lý do!'}]}
                        >
                            <Input.TextArea autoSize={{minRows: 4}}/>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            name="images"
                            label="Hình ảnh minh chứng"
                            valuePropName="fileList"
                            // getValueFromEvent={normFile}
                            rules={[{required: true, message: 'Please tải hình ảnh minh chứng!'}]}
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