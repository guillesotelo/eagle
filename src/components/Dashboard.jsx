import React from 'react'
import TaskList from './TaskList'
import Deals from './Deals'
import TasksPie from './TasksPie'

export default function Dashboard() {

    return (
        <div className='dashboard'>
                <TaskList className='tasklist-dashboard'/>
                <div>
                    <Deals/>
                    <TasksPie/>
                </div>
        </div>
    )
}
