import React from 'react'
import { users } from '../store/Dummy'

export default function Profile() {

    return (
        <div className='profile'>
            <img className='user-profile-img' alt='userprofile' src={users[0].img}/>
            <h1>Andrea Lamas</h1>
            <h3>andrealamas@mail.com</h3>
        </div>
    )
}
