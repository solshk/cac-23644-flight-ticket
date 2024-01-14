import { useContext } from 'react';
import { sendDatos } from "../Input/Input.jsx";
import './ticket.css';

function Ticket() {

    const datos = useContext(sendDatos);

    return (
        <div className='ticket-container'>
            {/* aca deberia poder elegir la estetica del ticket */}
            <div className="ticket-final">
                <div className="ticket-titulo">
                    <div>
                        <h4>BOARDING PASS</h4>
                        <p>FIRST CLASS</p>
                    </div>
                    <div className="ticket-codigo-aeropuerto">
                        <p>EZE</p>
                    </div>
                </div>

                <div>
                    <img src="./avion.png" alt="avioncito" className='avioncito' />
                </div>

                <div className="ticket-destino">
                    <h6>TO:</h6>
                    <h4>BUENOS AIRES</h4>
                    <p>EZEIZA INTERNATIONAL AIRPORT</p>
                </div>

                <div className="ticket-datos">
                    <div className="ticket-datos-div">
                        <h6>FROM:</h6>
                        <p>NEUQUEN</p>
                        <p>CPC, San Martin De Los Andes</p>
                    </div>

                    <div className="ticket-datos-flight">
                        <div>
                            <h6>DATE:</h6>
                            <p>21/MAR</p>
                        </div>
                        <div>
                            <h6>FLIGHT:</h6>
                            <p>27C</p>
                        </div>
                        <div>
                            <h6>SEAT:</h6>
                            <p>58</p>
                        </div>
                    </div>

                    <div className="ticket-datos-flight">
                        <div>
                            <h6>DEPARTING AT:</h6>
                            <p>13:25</p>
                            <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline"}}>
                                <h6>GATE:</h6>
                                <p style={{width: "100%", marginLeft:".5rem"}}>3D</p>
                            </div>
                        </div>
                        <div>
                            <h6>ARRIVING AT:</h6>
                            <p>19:50</p>
                            <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline"}}>
                                <h6>GATE:</h6>
                                <p style={{width: "100%", marginLeft:".5rem"}}>3D</p>
                            </div>
                        </div>
                    </div>

                    <div className="ticket-datos-div">
                        <h6>NAME:</h6>
                        <p>{datos.name || "YOUR NAME"}</p>
                    </div>

                    <div className="ticket-datos-div">
                        <h6>RESERVATION CODE:</h6>
                        <p>{datos.reservationCode || "000ABC"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket