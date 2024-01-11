import { useContext } from 'react';
import { sendDatos } from "../Input/Input.jsx";
import './ticket.css';

function Ticket() {

    const datos = useContext(sendDatos);

    return (
        <div className='ticket'>
            <div className="ticketUno">
                <h4 className='ticketTitulo'>BOARDING PASS</h4>
                <div className='contenedor-ticket'>
                    <div className="salida">
                        <p>From:{datos}</p>
                        <p>Aeropuerto</p>
                        <p>Ciudad</p>
                        <p>Fecha</p>
                        <p>Hora</p>
                    </div>
                    <div><img src="./avion.png" alt="avioncito" style={{ width: "4rem" }} /></div>
                    <div className="llegada">
                        <p>To:</p>
                        <p>Aeropuerto</p>
                        <p>Ciudad</p>
                        <p>Fecha</p>
                        <p>Hora</p>
                    </div>
                </div>
            </div>
            <div className="ticketDos">
                <h4 className="ticketTitulo">SKYPEA</h4>
            </div>

        </div>
    )
}

export default Ticket