import React from 'react'
import { users } from '../store/Dummy'

export default function Chats() {

    return (
        <div className='email-list'>
                <h1>Chats</h1>
            <div className='div-chat'>
                <h3>{users[1].name}</h3>
                <p>Ya mandé todos los mails de los cursos.</p>
            </div>
            <div className='div-chat'>
                <h3>{users[3].name}</h3>
                <p>Te sumás a la reunión de hoy ?</p>
            </div>
            <div className='div-chat'>
                <h3>{users[7].name}</h3>
                <p>Bienvenida a la plataforma!!</p>
            </div>
        </div>
    )
}
