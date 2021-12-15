import React from 'react'
import { Nav } from '../nav/Nav'
import { LateralBar } from '../lateralBar/LateralBar'
import './Main.css'

export const Main = () => {
    return (
        <>
            <Nav></Nav>
            <main className="principio container background">
                <LateralBar></LateralBar>
                <div className='derechaColumna'>
                    <h3>Bienvenido A nuestro manual de usuario</h3>
                    <h5>Este manual ha sido creado con la finalidad de que usted entienda el funcionamiento del sistema por lo cual se este manual contara con diferentes capitulos que lo guiaran para poder entender el funcionamiento</h5>
                </div>
            </main>
        </>
    )
}