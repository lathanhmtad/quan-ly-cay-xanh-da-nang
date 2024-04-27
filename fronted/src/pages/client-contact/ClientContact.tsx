import type {FormProps, GetProp, UploadFile, UploadProps} from 'antd';
import {Button, Checkbox, Col, Form, Image, Input, Row, Select, Upload} from 'antd';
import {CiCirclePlus} from "react-icons/ci";

import {IoCloudUploadOutline} from "react-icons/io5";
import './ClientContact.scss'
import {Option} from "antd/es/mentions";
import {useState} from "react";

type FieldType = {
    fullName?: string;
    password?: string;
    email?: string;
    phoneNumber?: string;
    remember?: string;
    numberTrees?: number;
    reason?: string;
};

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

export default function ClientContact() {
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

    const handleChange: UploadProps['onChange'] = ({file, fileList: newFileList}) => {
        if (!file.response || file.response.status !== 'success') {
            const index = newFileList.findIndex(f => f.uid === file.uid);
            if (index !== -1) {
                newFileList[index].status = 'done';
            }
        }
        setFileList(newFileList);
    };


    const uploadButton = (
        <button style={{border: 0, background: 'none'}} type="button">
            <CiCirclePlus/>
            <div style={{marginTop: 8}}>Upload</div>
        </button>
    );

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return <div className='client-contact py-5'>
        <div className='container'>
            <h1 className='text-center'>LIÊN HỆ</h1>
            <h4>Thông tin về bạn</h4>
            <Form
                name="basic"
                labelCol={{span: 24}}
                wrapperCol={{span: 24}}
                style={{width: '100%'}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Họ và tên"
                    name="fullName"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Email"
                    name="email"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Số điện thoại"
                    name="phoneNumber"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>

                <h5 className='mt-4'>Thông tin cần phản ánh</h5>

                <Form.Item<FieldType>
                    label="Số lượng cây"
                    name="numberTrees"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Địa chỉ gần cây xanh nhất"
                    name="numberTrees"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>

                <Row>
                    <Col span={12}>
                        <Form.Item<FieldType>
                            label="Quận/Huyện"
                            name="numberTrees"
                            rules={[{required: true, message: 'Please input your username!'}]}
                        >
                            <Select
                                placeholder="Select a option and change input text above"
                                // onChange={onGenderChange}
                                allowClear
                            >
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                                <Option value="other">other</Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item<FieldType>
                            label="Phường/Xã"
                            name="numberTrees"
                            rules={[{required: true, message: 'Please input your username!'}]}
                        >
                            <Select
                                placeholder="Select a option and change input text above"
                                // onChange={onGenderChange}
                                allowClear
                            >
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                                <Option value="other">other</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <Form.Item<FieldType>
                            label="Lý do phản ánh"
                            name="reason"
                            rules={[{required: true, message: 'Please input!'}]}
                        >
                            <Input.TextArea autoSize={{minRows: 4}}/>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            name="upload"
                            label="Hình ảnh minh chứng"
                            valuePropName="fileList"
                            rules={[{required: true, message: 'Please input!'}]}
                        >
                            <Upload
                                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handleChange}
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