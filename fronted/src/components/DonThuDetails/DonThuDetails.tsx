import {DonThuResponse} from "../../models/DonThu";
import {Button, Col, Form, Image, Input, Row, Select, Upload} from "antd";
import useGetByIdApi from "../../hooks/use-get-by-id-api";
import ManageDonThuConfig from "../../pages/manage-don-thu/ManageDonThuConfig";
import {useParams} from "react-router-dom";

import './DonThuDetails.scss'

interface DonThuFieldForm extends DonThuResponse {
    diaChiGanCayXanhNhat: string
    tenPhuong: string
    tenQuan: string
    toaDo: string
}

export default function DonThuDetails() {

    const params = useParams();

    const {id: maThongTinPhanAnh} = params

    const {
        isSuccess,
        isLoading,
        data: donThu
    } = useGetByIdApi<DonThuResponse>(ManageDonThuConfig.resourceUrl, ManageDonThuConfig.resourceKey, Number(maThongTinPhanAnh))

    if (isSuccess) {
        return <div className='container'>
            <h3>Chi tiết đơn thư / {donThu.maThongTinPhanAnh}</h3>

            <h5>Thông tin người phản ánh</h5>
            <Form
                name="basic"
                labelCol={{span: 24}}
                wrapperCol={{span: 24}}
                style={{width: '100%'}}
                disabled
                initialValues={{
                    hoVaTen: donThu.hoVaTen,
                    email: donThu.email,
                    sdt: donThu.sdt,
                    soLuongCay: donThu.soLuongCay,
                    chiTietDiaChi: donThu.chiTietDiaChi.diaChiGanCayXanhNhat,
                    lyDoPhanAnh: donThu.lyDoPhanAnh,
                    tenPhuong: donThu?.chiTietDiaChi.phuongXa.tenPhuong,
                    // tenQuan: donThu?.chiTietDiaChi.phuongXa.quanHuyen.tenQuan
                }}
                autoComplete="off"
            >
                <Form.Item<DonThuResponse>
                    label="Họ và tên"
                    name="hoVaTen"
                >
                    <Input/>
                </Form.Item>

                <Form.Item<DonThuResponse>
                    label="Email"
                    name="email"
                >
                    <Input/>
                </Form.Item>

                <Form.Item<DonThuResponse>
                    label="Số điện thoại"
                    name="sdt"
                >
                    <Input/>
                </Form.Item>

                <h5 className='mt-4'>Thông tin cần phản ánh</h5>
                <Form.Item<DonThuResponse>
                    label="Số lượng cây"
                    name="soLuongCay"
                >
                    <Input/>
                </Form.Item>

                <span className='fs-6 mb-1 d-block'>Tọa độ</span>
                {donThu.toaDoCayPhanAnh.map((item, index) => <div key={index}><Form.Item<DonThuFieldForm>
                    label=""
                    name="toaDo"
                    initialValue={item.toaDoCay}
                >
                    <Input/>
                </Form.Item></div>)}

                <Form.Item<DonThuResponse>
                    label="Địa chỉ gần cây xanh nhất"
                    name="chiTietDiaChi"
                >
                    <Input/>
                </Form.Item>

                <Row>
                    <Col span={12}>
                        <Form.Item<DonThuFieldForm>
                            label="Quận/Huyện"
                            name="tenQuan"
                        >
                            <Input/>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item<DonThuFieldForm>
                            label="Phường/Xã"
                            name="tenPhuong"
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <Form.Item<DonThuResponse>
                            label="Lý do phản ánh"
                            name="lyDoPhanAnh"
                        >
                            <Input.TextArea autoSize={{minRows: 4}}/>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        {/*<Form.Item*/}
                        {/*    name="upload"*/}
                        {/*    label="Hình ảnh minh chứng"*/}
                        {/*    valuePropName="fileList"*/}
                        {/*    rules={[{required: true, message: 'Please input!'}]}*/}
                        {/*>*/}
                        {/*    <Upload*/}
                        {/*        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"*/}
                        {/*        listType="picture-card"*/}
                        {/*        fileList={fileList}*/}
                        {/*        onPreview={handlePreview}*/}
                        {/*        onChange={handleChange}*/}
                        {/*    >*/}
                        {/*        {fileList.length >= 8 ? null : uploadButton}*/}
                        {/*    </Upload>*/}
                        {/*    {previewImage && (*/}
                        {/*        <Image*/}
                        {/*            wrapperStyle={{display: 'none'}}*/}
                        {/*            preview={{*/}
                        {/*                visible: previewOpen,*/}
                        {/*                onVisibleChange: (visible) => setPreviewOpen(visible),*/}
                        {/*                afterOpenChange: (visible) => !visible && setPreviewImage(''),*/}
                        {/*            }}*/}
                        {/*            src={previewImage}*/}
                        {/*        />*/}
                        {/*    )}*/}
                        {/*</Form.Item>*/}
                    </Col>
                </Row>
            </Form>
            <Button size='large' type="primary">
                Xử lý đơn thư
            </Button>
        </div>
    }
    return <div>Đang tải</div>
}