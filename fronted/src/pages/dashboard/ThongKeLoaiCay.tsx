import React, {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import {Pie} from 'react-chartjs-2';
import {ChartData, ChartOptions} from 'chart.js';
import ApplicationConstants from "../../constants/ApplicationConstants";

// Register necessary chart elements
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const ThongKeLoaiCay: React.FC = () => {
    const [chartData, setChartData] = useState<ChartData<'pie'>>({
        labels: [],
        datasets: [
            {
                label: 'Số lượng',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    });

    const options: ChartOptions<'pie'> = {
        responsive: true,
    };

    useEffect(() => {
        // Fetch data from the API
        fetch(`${ApplicationConstants.API_PATH}/thong-ke/loai-cay`)
            .then(response => response.json())
            .then(data => {
                // Transform the data to match the Chart.js format
                const labels = data.map((item: any) => item.tenLoai);
                const values = data.map((item: any) => item.soLuongCay);

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'Số lượng',
                            data: values,
                            backgroundColor: [
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(255, 204, 102, 0.6)',  // Light Orange
                            ],
                            borderColor: [
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(255, 204, 102, 0.6)',  // Light Orange
                            ],
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
        <div style={{width: '30%'}} className='d-flex flex-column align-items-center'>
            <h1>Thống kê loài cây</h1>
            <Pie data={chartData} options={options}/>
        </div>
    );
};

export default ThongKeLoaiCay;
