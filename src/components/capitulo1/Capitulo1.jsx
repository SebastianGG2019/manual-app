import React from 'react'
import './caiputlo1.css'
import image1 from '../../assets/captura1.png'
import image2 from '../../assets/captura2.png'
import image3 from '../../assets/captura3.png'
import image4 from '../../assets/captura4.png'
import image5 from '../../assets/captura5.png'
import image6 from '../../assets/captura6.png'
import image7 from '../../assets/captura7.png'
import image8 from '../../assets/captura8.png'
import image9 from '../../assets/captura9.png'
import image10 from '../../assets/captura10.png'
import image11 from '../../assets/captura11.png'
import image12 from '../../assets/captura12.png'
import image13 from '../../assets/captura13.png'
import image14 from '../../assets/captura14.png'
import image15 from '../../assets/captura15.png'
import image16 from '../../assets/captura16.png'
import image17 from '../../assets/captura17.png'
import image18 from '../../assets/captura18.png'

export const Capitulo1 = () => {
    return (
        <div className='derechaColumna'>
            <h3>Instalación Mysql Community</h3>
            <ul>
                <li>1. Accedemos al siguiente enlace <a href="https://dev.mysql.com/downloads/windows/installer/8.0.html">https://dev.mysql.com/downloads/windows/installer/8.0.html</a> y hacemos clic archivo más pesado de los dos (Es el archivo que contiene todos los archivos necesarios para la instalación de los diferentes componentes). </li>
                <li className='imagenesCap'><img src={image1} alt="" /></li>
                <li>2. Una vez descargado abrimos el archivo aceptamos términos y damos clic en next. </li>
                <li className='imagenesCap'><img src={image2} alt="" /></li>
                <li>3. Seleccionamos la opción custom para seleccionar únicamente el servidor de mysql y mysql Workbench. </li>
                <li className='imagenesCap'><img src={image3} alt="" /></li>
                <li>4. Desplegamos las pestañas de MySQL Servers y seleccionamos la arquitectura deseada en este caso seleccionamos x64 y damos clic en la flecha que apunta a la derecha. </li>
                <li className='imagenesCap'><img src={image4} alt="" /></li>
                <li>5. Desplegamos las pestañas de Applications y MySQL Workbench, seleccionamos la arquitectura deseada en este caso seleccionamos x64 y damos clic en la flecha que apunta a la derecha. </li>
                <li className='imagenesCap'><img src={image5} alt="" /></li>
                <li>6. Desplegamos las pestañas de MySQL Connectors y Connector/ODBC y seleccionamos la arquitectura deseada en este caso seleccionamos x64 y damos clic en la flecha que apunta a la derecha. </li>
                <li className='imagenesCap'><img src={image6} alt="" /></li>
                <li>7. Desplegamos las pestañas de Documentation y MySQL Documentation, seleccionamos el item y damos clic en la flecha que apunta a la derecha y damos clic en next. </li>
                <li className='imagenesCap'><img src={image7} alt="" /></li>
                <li>8. Aparecerá la información de la versión , arquitectura y ruta de instalación del servidor. Damos nuevamente clic en next. </li>
                <li className='imagenesCap'><img src={image8} alt="" /></li>
                <li>9. Veremos una lista de lo que vamos a instalar. Damos clic en Execute (Este proceso se demorara algunos minutos dependiendo de las características del PC). </li>
                <li className='imagenesCap'><img src={image9} alt="" /></li>
                <li>10. Posteriormente veremos una lista de los ítems que están listos para configurar. Damos clici en next. </li>
                <li className='imagenesCap'><img src={image10} alt="" /></li>
                <li>11. Desplegamos es select de Config Type y seleccionamos la opción que se adecue a nuestras necesidades si es para un servidor (Puede ser usado para servidores web), maquina dedicada (Completamente dedicada a mysql, es decir, ningún otro servidor correra en la maquina) o una máquina de desarrollo (Maquina donde pueden haber instaladas muchas otras aplicaciones, escogemos está en nuestro ejemplo). </li>
                <li className='imagenesCap'><img src={image11} alt="" /></li>
                <li>12. Cambiamos el puerto si es necesario (Si ya lo utiliza algún otro servidor) y damos clic en next. </li>
                <li className='imagenesCap'><img src={image12} alt="" /></li>
                <li>13. Colocamos la contraseña que vamos a establecer para el usuario administrador. </li>
                <li className='imagenesCap'><img src={image13} alt="" /></li>
                <li>14. Si damos clic en Add User podemos agregar mas cuentas y asignarles un rol para administrar los permisos sobre las bases de datos, posteriormente damos clic en next. </li>
                <li className='imagenesCap'><img src={image14} alt="" /></li>
                <li>15. Veremos la configuración del servicio para Windows, en este apartado podemos dar clic en next sin modificar nada. </li>
                <li className='imagenesCap'><img src={image15} alt="" /></li>
                <li>16. Después veremos el apartado de plugins que también podemos dejar por defecto y dar clic en next. </li>
                <li className='imagenesCap'><img src={image16} alt="" /></li>
                <li>17. Veremos el resumen de todas las configuraciones que hemos realizado y damos clic en Execute (Este proceso se demorara algunos minutos dependiendo de las características del PC). </li>
                <li className='imagenesCap'><img src={image17} alt="" /></li>
                <li>18. Por último damos clic en Finish y con esto culminaríamos la instalación personalizada de Mysql en nuestra máquina. </li>
                <li className='imagenesCap'><img src={image18} alt="" /></li>
            </ul>
        </div>
    )
}