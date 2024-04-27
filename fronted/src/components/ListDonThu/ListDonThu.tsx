import Card from "react-bootstrap/Card";
import PageConfigs from "../../pages/PageConfigs";
import {ListResponse} from "../../utils/FetchUtils";
import useGetAllApi from "../../hooks/use-get-all-api";
import {DonThuResponse} from "../../models/DonThu";
import ManageDonThuConfig from "../../pages/manage-don-thu/ManageDonThuConfig";
import useResetManagePageState from "../../hooks/use-reset-manage-page-state";
import {useNavigate} from "react-router-dom";

interface ListDonThuProps {
    status: boolean
}

export default function ListDonThu(props: ListDonThuProps) {

    useResetManagePageState()
    const navigate = useNavigate();

    const {
        isLoading,
        data: listResponse = PageConfigs.initListResponse as ListResponse<DonThuResponse>
    } = useGetAllApi<DonThuResponse>(ManageDonThuConfig.resourceUrl, ManageDonThuConfig.resourceKey)

    return <div>
        {listResponse.content.map(item => <Card key={item.maThongTinPhanAnh}
                                                style={{width: '100%', marginBottom: '16px'}}>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <div className='d-flex align-items-center my-1'>
                        <p style={{width: '200px'}} className='mb-0 fs-6 ms-2'>Mã đơn thư:</p>
                        <strong>{item.maThongTinPhanAnh}</strong>
                    </div>
                    <div className='d-flex align-items-center mb-1'>
                        <p style={{width: '200px'}} className='mb-0 fs-6 ms-2'>Email người gửi:</p>
                        <strong>{item.email}</strong>
                    </div>
                    <div className='d-flex align-items-center mb-1'>
                        <p style={{width: '200px'}} className='mb-0 fs-6 ms-2'>Lý do gửi:</p>
                        <strong>{item.lyDoPhanAnh}</strong>
                    </div>
                </div>
                <button onClick={() => navigate(`/admin/chi-tiet-don-thu/${item.maThongTinPhanAnh}`)}
                        className='btn btn-primary me-2 mt-5'>Xem chi tiết
                </button>
            </div>
        </Card>)}
    </div>
}