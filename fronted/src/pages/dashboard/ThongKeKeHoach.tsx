import React, {useEffect, useState} from "react";
import {Bar} from "react-chartjs-2";
import {ChartData, ChartOptions} from "chart.js";
import ApplicationConstants from "../../constants/ApplicationConstants";

export default function ThongKeKeHoach() {
    // Dữ liệu cho biểu đồ
    const [chartData, setChartData] = useState<ChartData<'bar'>>({
        labels: [],
        datasets: [
            {
                label: 'Số lượng',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    });

    const options: ChartOptions<'bar'> = {
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };


    useEffect(() => {
        // Gọi API để lấy dữ liệu
        fetch(`${ApplicationConstants.API_PATH}/thong-ke/nhiem-vu`)
            .then(response => response.json())
            .then(data => {
                // Chuyển đổi dữ liệu từ API thành định dạng cho biểu đồ
                const labels = data.map((item: any) => item.tenTrangThai);
                const values = data.map((item: any) => item.soLuong);

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'Số lượng',
                            data: values,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='w-50 d-flex flex-column align-items-center'>
            <h1>Thống kê kế hoạch</h1>
            <Bar data={chartData} options={options}/>
        </div>
    );
}
