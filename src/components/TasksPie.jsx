import React from 'react'
import { Doughnut } from 'react-chartjs-2';

export default function TaskPie() {

    const data = {
        labels: ['Active', 'Completed', 'Ended'],
        datasets: [
          {
            label: '',
            data: [40, 40, 20],
            backgroundColor: [
              '#FFB946',
              '#2ED47A',
              '#F7685B'
            ],
            borderColor: [
                '#FFB946',
                '#2ED47A',
                '#F7685B'
            ],
            // borderWidth: 0.2,
          },
        ],
      };

    return (
        <div>
            <h4 className='task-pie-title'>Tasks</h4>
        <div className='task-pie'>
            <Doughnut data={data}  width={1} height={1}/>
        </div>
        </div>
    )
    }