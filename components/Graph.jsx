import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: false,
        },
    },
    scales: {
        y: 
            {
                beginAtZero: true,
                type: 'linear'
        }
    }
};

const Graph = ({ data }) => {
    const formattedData = {
        labels: data.series.map(({ x, y }) => x),
        datasets: [
            {
                fill: true,
                data: data.series.map(({ x, y }) => y),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };


    return <Line options={options} data={formattedData} />;
}

export default Graph;