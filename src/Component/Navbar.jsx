import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav">
            <ul>
                <li> <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "notactive")}>Home</NavLink></li>
                <li><NavLink to='/Students' className={({ isActive }) => (isActive ? "active" : "notactive")}>Students</NavLink></li>
                <li><NavLink to='/ContactUs' className={({ isActive }) => (isActive ? "active" : "notactive")}>ContactUs</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar