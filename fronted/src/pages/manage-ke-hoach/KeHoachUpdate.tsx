import {DatePicker, FormProps, InputNumber} from 'antd';
import {Button, Col, Form, Image, Input, Row, Select, Upload} from 'antd';

import {KeHoachRequest} from "../../models/KeHoach";
import TextArea from "antd/es/input/TextArea";
import useKeHoachUpdateViewModel from "./KeHoachUpdate.vm";
import {useParams} from "react-router-dom";
import moment from "moment";

export default function KeHoachUpdate() {

    const {id} = useParams()

    const {
        keHoach,
        loading,
        handleSubmit,
        form,
        donThuChuaXuLy
    } = useKeHoachUpdateViewModel(Number(id))

    const onFinish: FormProps<KeHoachRequest>['onFinish'] = (values) => {
        handleSubmit(values)
    };

    if (keHoach)
        return <div className='client-contact'>
            <div className='container'>
                <h1 className='text-center'>Cập nhập kế hoạch</h1>
                <h4>Thông tin về kế hoạch</h4>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{span: 24}}
                    wrapperCol={{span: 24}}
                    disabled={loading}
                    style={{width: '100%'}}
                    initialValues={{
                        tenKeHoach: keHoach?.tenKeHoach,
                        hanHoanThanh: moment(keHoach?.hanHoanThanh),
                        diaDiem: keHoach.diaDiem,
                        soLuong: keHoach.soLuong,
                        noiDung: keHoach.noiDung
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >

                    <Row gutter={[24, 0]}>
                        <Col span={14}>
                            <Form.Item<KeHoachRequest>
                                label="Tên kế hoạch"
                                name="tenKeHoach"
                                rules={[{required: true, message: 'Vui lòng nhập tên kế hoạch!'}]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={10}>
                            <Form.Item<KeHoachRequest>
                                label="Hạn hoàn thành"
                                name="hanHoanThanh"
                                rules={[{required: true, message: 'Vui lòng điền hạn hoàn thành'}]}
                            >
                                <DatePicker
                                    style={{width: '100%'}}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={[24, 0]}>
                        <Col span={10}>
                            <Form.Item<KeHoachRequest>
                                label="Địa điểm"
                                name="diaDiem"
                                rules={[{required: true, message: 'Vui lòng nhập địa điểm'}]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item<KeHoachRequest>
                                label="Số lượng"
                                name="soLuong"
                                rules={[{required: true, message: 'Vui lòng điền số lượng'}]}
                            >
                                <InputNumber
                                    style={{width: '100%'}}/>
                            </Form.Item>
                        </Col>

                        <Col span={6}>
                            <Form.Item<KeHoachRequest>
                                label="Chọn mã đơn thư cần sử lý (nếu có)"
                                name='maThongTinPhanAnh'
                            >
                                <Select
                                    style={{width: '100%'}}
                                    options={donThuChuaXuLy}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item<KeHoachRequest>
                        label="Nội dung"
                        name="noiDung"
                        rules={[{required: true, message: 'Vui lòng nhập nội dung'}]}
                    >
                        <TextArea/>
                    </Form.Item>

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

    return <div>Loading...</div>
}