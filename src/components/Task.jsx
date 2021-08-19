import React from 'react'
import { tasks, users } from '../store/Dummy'
import styleStatus from '../utils/styling'

export default function Task() {

    return ( tasks.map((task, i) => 
        <div className='task-container'>
            <div className='task-col1'>
                <div>
                    <h3>{task.title}</h3>
                </div>
                <div>
                    <h5>Due date: {task.duedate}</h5>
                </div>
                <div>
                    <img src={users[i].img}/>
                    <h5>{users[i].name}</h5>
                </div>
            </div>
            <div className='task-col2'>
                <div>
                    <h3>{task.title}</h3>
                </div>
                <div>
                    <button style={{ backgroundColor: styleStatus(task) }}className='task-btn'>{task.status}</button>
                </div>
            </div>
        </div>
        ) 
    )
}
