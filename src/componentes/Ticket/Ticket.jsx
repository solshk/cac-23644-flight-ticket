import { useContext } from 'react';
import { sendData } from "../Input/Input.jsx";
import './ticket.css';

function Ticket() {

    const data = useContext(sendData);

    return (
        <div className='ticket-container'>
            {/* aca deberia poder elegir la estetica del ticket */}
            <div className="ticket-final">
                <div className="ticket-titulo">
                    <div>
                        <h4>BOARDING PASS</h4>
                        <p>{data.class || "FIRST CLASS"}</p>
                    </div>
                    <div className="ticket-codigo-aeropuerto">
                        <p>{data.toAirportCode || "EZE"}</p>
                    </div>
                </div>

                <div>
                    <img src="./avion.png" alt="avioncito" className='avioncito' />
                </div>

                <div className="ticket-destino">
                    <h6>TO:</h6>
                    <h4>{data.toCity || "BUENOS AIRES"}</h4>
                    <p>{data.toAirport || "EZEIZA INTERNATIONAL AIRPORT"}</p>
                </div>

                <div className="ticket-data">
                    <div className="ticket-data-div">
                        <h6>FROM:</h6>
                        <p>{data.fromCity || "NEUQUEN"}</p>
                        <p>{data.fromAirport || "CPC, San Martin De Los Andes"}</p>
                    </div>

                    <div className="ticket-data-flight">
                        <div>
                            <h6>DATE:</h6>
                            <p>{data.date || "21/DEC"}</p>
                        </div>
                        <div>
                            <h6>FLIGHT:</h6>
                            <p>{data.flight || "0071C"}</p>
                        </div>
                        <div>
                            <h6>SEAT:</h6>
                            <p>{data.seat || "58"}</p>
                        </div>
                    </div>

                    <div className="ticket-data-flight d-flex align-items-end">
                        <div>
                            <h6>DEPARTING AT:</h6>
                            <p>{data.departTime || "10:15"}</p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                <h6>GATE:</h6>
                                <p style={{ width: "100%", marginLeft: ".5rem" }}>
                                    {data.departGate || "3D"}
                                </p>
                            </div>
                        </div>
                        <div>
                            <h6>ARRIVING AT:</h6>
                            <p>{data.arriveTime || "18:50"}</p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                <h6>GATE:</h6>
                                <p style={{ width: "100%", marginLeft: ".5rem" }}>
                                    {data.arriveGate || "3D"}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="ticket-data-div">
                        <h6>NAME:</h6>
                        <p>{data.fname || "YourName"}</p>
                    </div>

                    <div className="ticket-data-div">
                        <h6>RESERVATION CODE:</h6>
                        <p>{data.reservationCode || "000ABC"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket