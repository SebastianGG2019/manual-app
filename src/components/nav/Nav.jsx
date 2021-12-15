import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './nav.css';

export const Nav = () => {
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-light bg-light" id="NavBack">
                    <Link 
                        className="navbar-brand" id="texto1"
                        to="/"
                    >
                        DomiApp
                    </Link>
                    <ul className='menu'>
                    <li><NavLink activeClassName="active" className="texto nav-item nav-link" exact to="/inicio">Inicio</NavLink></li>
                        <li><NavLink activeClassName="active" className="texto nav-item nav-link" exact to="/Categoria">Categorias</NavLink></li>
                        <li><NavLink activeClassName="active" className="texto nav-item nav-link" exact to="/inicio">Cuenta</NavLink></li>
                        <li><NavLink activeClassName="active" className="texto nav-item nav-link" exact to="/login">Logout</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}