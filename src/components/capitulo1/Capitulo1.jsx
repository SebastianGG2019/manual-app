import React from 'react'
import { StepperComponent } from '../stepper/Stepper'

import { data } from './dataSql'
import './caiputlo1.css'

export const Capitulo1 = () => {


    return (
        <div className='derechaColumna'>
            <StepperComponent data={data}/>
        </div>
    )
}