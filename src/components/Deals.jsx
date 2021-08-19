import React from 'react'
import { Line } from 'react-chartjs-2'

export default function Deals() {

    const data = {
        labels: ['','','Aug 1st', '','','Aug 10th','','Aug 15th','', 'Aug 6th'],
        datasets: [
          {
            label: 'Closed deals',
            data: [50, 55, 98, 100, 90, 101, 120, 130, 150, 160, 170, 130, 95, 55, 60, 100, 160, 155, 150, 152],
            fill: false,
            backgroundColor: 'rgb(10,140,255)',
            borderColor: 'rgb(10,140,255)',
            pointRadius: 0
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
      

    return (
        <div className='deals' >
            <h4>Deals</h4>
            <Line data={data} options={options} width={400} height={300}/>
        </div>
    )
}
