import {useEffect, useState} from "react";
import ApplicationConstants from "../../constants/ApplicationConstants";

export default function () {
    const [data, setData] = useState({
        tongSoCayXanh: 0,
        tongDonThu: 0,
        tongSoKeHoach: 0,
        tongSoKeHoachHoanThanh: 0
    });

    useEffect(() => {
        fetch(`${ApplicationConstants.API_PATH}/thong-ke/so-luong`)
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return <div className='d-flex align-items-center gap-5'>
        <div className="card" style={{width: '100%'}}>
            <div className="card-body">
                <h5 className="card-title fs-6 fw-bold">Tổng số cây xanh</h5>
                <p className="card-text">{data.tongSoCayXanh}</p>
            </div>
        </div>
        <div className="card" style={{width: '100%'}}>
            <div className="card-body">
                <h5 className="card-title fs-6 fw-bold">Tổng số đơn thư</h5>
                <p className="card-text">{data.tongDonThu}</p>
            </div>
        </div>
        <div className="card" style={{width: '100%'}}>
            <div className="card-body">
                <h5 className="card-title fs-6 fw-bold">Tổng số kế hoạch</h5>
                <p className="card-text">{data.tongSoKeHoach}</p>
            </div>
        </div>
        <div className="card" style={{width: '100%'}}>
            <div className="card-body">
                <h5 className="card-title fs-6 fw-bold">Tổng số kế hoạch hoàn thành</h5>
                <p className="card-text">{data.tongSoKeHoachHoanThanh}</p>
            </div>
        </div>
    </div>
}