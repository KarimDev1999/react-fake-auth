import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div>
                <Link to='/login' className="navbar-brand" href="#">Login</Link>
                <Link to='/news' className="navbar-brand" href="#">News</Link>
                <Link to='/profile' className="navbar-brand" href="#">Profile</Link>
                <Link to='/gallery' className="navbar-brand" href="#">Gallery</Link>
            </div>
        </nav>
    )
}

export default Header
