import React from 'react'
import { users } from '../store/Dummy'

export default function Email() {



    return (
        <div className='email-list'>
            <h1>Email List</h1>
            {
                users.map(user => (
                    <div className='div-email'>
                        <h3>{user.email}</h3>
                        <h3>({user.name})</h3>
                    </div>
                ))
            }
        </div>
    )
}
