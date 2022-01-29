import { Button } from '@mui/material';
import React from 'react';

export const Capitulo3 = () => {

    const download = () => {
        const downloadInstance = document.createElement('a');
        downloadInstance.href = "https://github.com/SebastianGG2019/manual-app/blob/main/ScriptBd/administrador_base.sql"
        downloadInstance.target = '_blank'
        downloadInstance.download = 'Script_sql'
        document.body.appendChild(downloadInstance)
        downloadInstance.click();
    }

  return (
    <div className='derechaColumna'>
        <h3>Script Base de datos</h3>
        <Button style={{margin: '10px'}} onClick={download} variant='contained'>Descargar Script SQL</Button>
    </div>
  )
};
