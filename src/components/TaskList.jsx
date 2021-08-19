import React from 'react'
import { tasks, users } from '../store/Dummy'
import { styleStatus } from '../utils/styling'

export default function TaskList() {

    return ( 
        <div className='tasks'>
            {tasks.map((task, i) => 
            <div key={i} className='task-container'>
                <div className='task-col1'>
                    <div>
                        <h3 className='task-title'>{task.title}</h3>
                    </div>
                    <div>
                        <h5 className='task-due'>Due date: {task.duedate}</h5>
                    </div>
                    <div className='user-task'>
                        <img className='user-task-img' src={users[i].img} alt='img'/>
                        <h5 className='user-task-name'>{users[i].name}</h5>
                    </div>
                </div>
                <div className='task-col2'>
                    <div>
                        <h3 className='task-type'>{task.type}</h3>
                    </div>
                    <div>
                        <button style={{ backgroundColor: styleStatus(task) }}
                                className='task-btn'>
                                {task.status}
                        </button>
                    </div>
                </div>
            </div>
            )
            }
        </div>
    )
}
