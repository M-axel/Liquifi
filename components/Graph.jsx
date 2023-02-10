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

const Graph = ({ data }) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: false,
            },
            arbitraryLine: {
                arbitraryLineColor: 'red',
                xPositionLow: data.range.low || null,
                xPositionMid: data.range.mid || null,
                xPositionHigh: data.range.high || null,
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                type: 'linear'
            }
        },
    };
    
    const arbitraryLine = {
        id: 'arbitraryLine',
        beforeDraw(chart, args, options) {
            const { ctx, chartArea: { top, right, bottom, left, width, height }, scales:
                { x, y } } = chart;
            ctx.save();
            ctx.strokeStyle = options.arbitraryLineColor;
            ctx.strokeRect(x.getPixelForValue(options.xPositionLow), top, 0, height)
            ctx.strokeRect(x.getPixelForValue(options.xPositionMid), top, 0, height)
            ctx.strokeRect(x.getPixelForValue(options.xPositionHigh), top, 0, height)
    
            ctx.restore();
        }
    };

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


    return <Line options={options} data={formattedData} plugins={[arbitraryLine]} />;
}

export default Graph;