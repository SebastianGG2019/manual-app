import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css';

export const Nav = () => {
    return (
        <header>
            <div className="container">
                <nav className="navbar" id="NavBack">
                    <Link 
                        className="navbar-brand" id="texto1"
                        to="/main"
                    >
                        MANUAL DE USUARIO
                    </Link>
                </nav>
            </div>
        </header>
    )
}