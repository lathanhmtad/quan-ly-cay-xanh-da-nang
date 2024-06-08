import React from 'react';
import {Bar, Line} from 'react-chartjs-2';
import {ArcElement, BarElement, ChartData, ChartOptions} from 'chart.js';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import {Chart} from 'react-chartjs-2'
import ThongKeTinhTrangCay from "./ThongKeTinhTrangCay";
import ThongKeCards from "./ThongKeCards";
import ThongKeLoaiCay from "./ThongKeLoaiCay";
import ThongKeKeHoach from "./ThongKeKeHoach";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
)

const Dashboard: React.FC = () => {
    return <div>
        <ThongKeCards/>
        <h1 className='text-primary text-center my-4'>Cây xanh thành phố Đà Nẵng</h1>
        <div className='d-flex align-items-center gap-5 justify-content-center'>
            <ThongKeTinhTrangCay/>
            <ThongKeKeHoach/>
        </div>
        <div className='d-flex justify-content-center'>
            <ThongKeLoaiCay/>
        </div>
    </div>
};

export default Dashboard;
