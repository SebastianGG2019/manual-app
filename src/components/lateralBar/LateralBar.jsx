import React from 'react'
import { Link } from 'react-router-dom'

export const LateralBar = () => {
    return (
        <div className='izquierdaColumna'>
            <ul>
                <Link to="/capitulo1"> <li>CAPITULO 1</li> </Link>
                <Link to="/capitulo2"> <li>CAPITULO 2</li> </Link>
                <Link to="/main"> <li>CAPITULO 3</li> </Link>
                <Link to="/main"> <li>CAPITULO 4</li> </Link>
                <Link to="/main"> <li>CAPITULO 5</li> </Link>
            </ul>
        </div>
    )
}