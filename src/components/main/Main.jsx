import React from 'react'
import './Main.css'
import {  Link } from 'react-router-dom'

export const Main = () => {
    return (
        <main className="principio">
            <div className="container background">
                <div className='izquierdaColumna'>
                    <ul>
                        <Link to="/main"> <li>CAPITULO 1</li> </Link>
                        <li>CAPITULO 2</li>
                        <li>CAPITULO 3</li>
                        <li>CAPITULO 4</li>
                        <li>CAPITULO 5</li>
                    </ul>
                </div>
                <div className='derechaColumna'>
                    <h3>Bienvvenido A nuestro manual de usuario</h3>
                    <h5>Este manual ha sido creado con la finalidad de que usted entienda el funcionamiento del sistema por lo cual se este manual contara con diferentes capitulos que lo guiaran para poder entender el funcionamiento</h5>
                </div>
            </div>
        </main>
    )
}