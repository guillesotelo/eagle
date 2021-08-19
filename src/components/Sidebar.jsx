import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {users} from '../store/Dummy'

export default function Sidebar() {

    const [toggle, setToggle] = useState(false)

    return (
        <div className={toggle ? 'sidebar-toggled' : 'sidebar'}>
            <Link to='/'>
                <img src='https://i.postimg.cc/bJJ7WNkq/eagle-logo-h.png' alt='logo' className={toggle ? 'logo-toggled' : 'logo'}/>
            </Link> 
            <div className='separator'></div>

            <Link to='/me' className='side-user-link'>
                <div className='side-user'>
                    <img src={users[0].img} alt='userIMG' className={toggle ? 'user-img-toggled' : 'user-img'}/>
                    {toggle ? '' : 
                    <div>
                        <h3 className='user-name'>{users[0].name}</h3>
                        <h3 className='user-email'>{users[0].email}</h3>
                    </div>
                    }
                </div>
            </Link>
            <Link to='/' className={toggle ? 'side-item-toggled' : 'side-item'}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 8.13333C1.33431 8.13333 1.2 7.99902 1.2 7.83333V1.5C1.2 1.33431 1.33431 1.2 1.5 1.2H6.16667C6.33235 1.2 6.46667 1.33431 6.46667 1.5V7.83333C6.46667 7.99902 6.33235 8.13333 6.16667 8.13333H1.5ZM1.5 14.8C1.33431 14.8 1.2 14.6657 1.2 14.5V11.5C1.2 11.3343 1.33431 11.2 1.5 11.2H6.16667C6.33235 11.2 6.46667 11.3343 6.46667 11.5V14.5C6.46667 14.6657 6.33235 14.8 6.16667 14.8H1.5ZM9.83333 14.8C9.66765 14.8 9.53333 14.6657 9.53333 14.5V8.16667C9.53333 8.00098 9.66765 7.86667 9.83333 7.86667H14.5C14.6657 7.86667 14.8 8.00098 14.8 8.16667V14.5C14.8 14.6657 14.6657 14.8 14.5 14.8H9.83333ZM9.53333 1.5C9.53333 1.33431 9.66765 1.2 9.83333 1.2H14.5C14.6657 1.2 14.8 1.33431 14.8 1.5V4.5C14.8 4.66569 14.6657 4.8 14.5 4.8H9.83333C9.66765 4.8 9.53333 4.66569 9.53333 4.5V1.5Z" stroke="#C2CFE0" strokeWidth="1.4"/>
                </svg>
                {toggle ? '' : 
                <h4>Dashboard</h4>}
            </Link>

            <Link to='/tasks' className={toggle ? 'side-item-toggled' : 'side-item'}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.49996 1.2H15.6666C15.7384 1.2 15.8 1.2616 15.8 1.33333V6.33333C15.8 6.40507 15.7384 6.46667 15.6666 6.46667H1.49996C1.42823 6.46667 1.36663 6.40507 1.36663 6.33333V1.33333C1.36663 1.2616 1.42823 1.2 1.49996 1.2ZM1.49996 9.53333H15.6666C15.7384 9.53333 15.8 9.59493 15.8 9.66667V14.6667C15.8 14.7384 15.7384 14.8 15.6666 14.8H1.49996C1.42823 14.8 1.36663 14.7384 1.36663 14.6667V9.66667C1.36663 9.59493 1.42823 9.53333 1.49996 9.53333Z" stroke="#C2CFE0" strokeWidth="1.4"/>
            </svg>
            {toggle ? '' : 
                <h4>Courses</h4>}
            </Link>

            <Link to='/email' className={toggle ? 'side-item-toggled' : 'side-item'}>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.37496 2.0005V1.99992C1.37496 1.46528 1.80778 1.03325 2.33329 1.03325H15.6666C16.1967 1.03325 16.6333 1.46985 16.6333 1.99992V11.9999C16.6333 12.53 16.1967 12.9666 15.6666 12.9666H2.33329C1.80331 12.9666 1.36677 12.5301 1.36663 12.0002C1.36663 12.0001 1.36663 12 1.36663 11.9999L1.37496 2.0005Z" stroke="#C2CFE0" strokeWidth="1.4"/>
            <path d="M1.5 2L9 7L16.5 2" stroke="#C2CFE0" strokeWidth="1.4"/>
            </svg>
            {toggle ? '' : 
                <h4>Email</h4>}
            </Link>

            <Link to='/contacts' className={toggle ? 'side-item-toggled' : 'side-item'}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.81118 4.11106C4.81118 2.34905 6.23806 0.922168 8.00007 0.922168C9.76208 0.922168 11.189 2.34904 11.189 4.11106C11.189 5.87307 9.76208 7.29995 8.00007 7.29995C6.23806 7.29995 4.81118 5.87307 4.81118 4.11106ZM0.92229 12.8611C0.92229 12.4716 1.11181 12.0787 1.54729 11.6768C1.98752 11.2705 2.63079 10.904 3.39805 10.5966C4.9337 9.98144 6.78966 9.67217 8.00007 9.67217C9.21048 9.67217 11.0664 9.98144 12.6021 10.5966C13.3693 10.904 14.0126 11.2705 14.4528 11.6768C14.8883 12.0787 15.0778 12.4716 15.0778 12.8611V15.0777H0.92229V12.8611Z" stroke="#C2CFE0" strokeWidth="1.4"/>
            </svg>
            {toggle ? '' : 
                <h4>Contacts</h4>}
            </Link>

            <Link to='/chats' className={toggle ? 'side-item-toggled' : 'side-item'}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.99996 13.3001H3.71001L3.50499 13.5051L1.36663 15.6435V2.33342C1.36663 1.80335 1.80323 1.36675 2.33329 1.36675H15.6666C16.1967 1.36675 16.6333 1.80335 16.6333 2.33342V12.3334C16.6333 12.8635 16.1967 13.3001 15.6666 13.3001H3.99996Z" stroke="#C2CFE0" strokeWidth="1.4"/>
            </svg>
            {toggle ? '' : 
                <h4>Chats</h4>}
            </Link>

            <Link to='/deals' className={toggle ? 'side-item-toggled' : 'side-item'}>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.49996 1.03325H16.5C16.5717 1.03325 16.6333 1.09485 16.6333 1.16659V12.8333C16.6333 12.905 16.5717 12.9666 16.5 12.9666H1.49996C1.42823 12.9666 1.36663 12.905 1.36663 12.8333V1.16659C1.36663 1.09485 1.42823 1.03325 1.49996 1.03325Z" stroke="#C2CFE0" strokeWidth="1.4"/>
                <rect x="5.5" y="0.333252" width="1.16667" height="13.3333" fill="#C2CFE0"/>
                <rect x="11.3334" y="0.333252" width="1.16667" height="13.3333" fill="#C2CFE0"/>
            </svg>
            {toggle ? '' : 
                <h4>Deals</h4>}
            </Link>

            <div className='separator'></div>

            <Link to='/settings' className={toggle ? 'side-item-toggled' : 'side-item'}>
            <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00004 0.333252C1.08337 0.333252 0.333374 1.08325 0.333374 1.99992C0.333374 2.91658 1.08337 3.66658 2.00004 3.66658C2.91671 3.66658 3.66671 2.91658 3.66671 1.99992C3.66671 1.08325 2.91671 0.333252 2.00004 0.333252ZM12 0.333252C11.0834 0.333252 10.3334 1.08325 10.3334 1.99992C10.3334 2.91658 11.0834 3.66658 12 3.66658C12.9167 3.66658 13.6667 2.91658 13.6667 1.99992C13.6667 1.08325 12.9167 0.333252 12 0.333252ZM7.00004 0.333252C6.08337 0.333252 5.33337 1.08325 5.33337 1.99992C5.33337 2.91658 6.08337 3.66658 7.00004 3.66658C7.91671 3.66658 8.66671 2.91658 8.66671 1.99992C8.66671 1.08325 7.91671 0.333252 7.00004 0.333252Z" fill="#C2CFE0"/>
            </svg>
            {toggle ? '' : 
                <h4>Settings</h4>}
            </Link>

            <button className='toggle' onClick={() => setToggle(!toggle)}>
            {toggle ? '◧◨' :  
                `◧◨  Toggle Sidebar`}
            </button>
        </div>
    )
}
