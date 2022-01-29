import { Button } from '@mui/material';
import React from 'react';

export const Capitulo3 = () => {

    const download = () => {
        const downloadInstance = document.createElement('a');
        downloadInstance.href = "https://shiftedit.net/edit#1089085/1M96hpQPY7TOvQmmbb7lXVCLbIqmzd7Uo"
        downloadInstance.target = '_blank'
        downloadInstance.download = 'Script_sql'
        document.body.appendChild(downloadInstance)
        downloadInstance.click();
    }

  return (
    <div className='derechaColumna'>
        <Button onClick={download} variant='contained'>Descargar Script SQL</Button>
    </div>
  )
};
