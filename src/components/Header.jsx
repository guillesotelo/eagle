import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function Contacts() {

    const [value, setValue] = useState(null)

    const handleSearch = () => {
        console.log("Searching for: ", value)
    }

    return (
        <div className='header-container'>
            <div className='searchbar'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9167 9.66667H10.2583L10.025 9.44167C10.8417 8.49167 11.3333 7.25833 11.3333 5.91667C11.3333 2.925 8.90833 0.5 5.91667 0.5C2.925 0.5 0.5 2.925 0.5 5.91667C0.5 8.90833 2.925 11.3333 5.91667 11.3333C7.25833 11.3333 8.49167 10.8417 9.44167 10.025L9.66667 10.2583V10.9167L13.8333 15.075L15.075 13.8333L10.9167 9.66667ZM5.91667 9.66667C3.84167 9.66667 2.16667 7.99167 2.16667 5.91667C2.16667 3.84167 3.84167 2.16667 5.91667 2.16667C7.99167 2.16667 9.66667 3.84167 9.66667 5.91667C9.66667 7.99167 7.99167 9.66667 5.91667 9.66667Z" fill="#C2CFE0"/>
                </svg>
                <input
                        type="text"
                        id="search"
                        className="search"
                        placeholder="Global search"
                        onKeyUp={handleSearch}
                        onChange={data => setValue(data)}
                    />
            </div>
            <div>
                <div className='notification-icon'>
                <Link to='notifications'>
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 16.2071V16.5H0.5V16.2071L2.35355 14.3536L2.5 14.2071V14V9C2.5 6.09437 4.02219 3.78092 6.61528 3.16653L7 3.07538V2.68V2C7 1.44614 7.44614 1 8 1C8.55386 1 9 1.44614 9 2V2.68V3.07506L9.38434 3.16644C11.9681 3.78076 13.5 6.10482 13.5 9V14V14.2071L13.6464 14.3536L15.5 16.2071ZM9.41352 18.5C9.20605 19.0806 8.64884 19.5 8 19.5C7.34433 19.5 6.79074 19.0813 6.58536 18.5H9.41352Z" fill="white" stroke="#C2CFE0"/>
                    </svg>
                </Link>
                </div>
            </div>
        </div>
    )
}
