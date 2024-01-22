import Ticket from '../Ticket/Ticket';
import { useState, createContext } from 'react';
import './input.css';

export const sendData = createContext();

function Input() {

  const [data, setData] = useState({ fname: "", reservationCode: "" });

  const handleChange = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "class":
        setData({ ...data, class: e.target.value });
        break;
      case "toCity":
        setData({ ...data, toCity: e.target.value });
        break;
      case "toAirport":
        setData({ ...data, toAirport: e.target.value });
        break;
      case "toAirportCode":
        setData({ ...data, toAirportCode: e.target.value });
        break;
      case "fromCity":
        setData({ ...data, fromCity: e.target.value });
        break;
      case "fromAirport":
        setData({ ...data, fromAirport: e.target.value });
        break;
      case "date":
        setData({ ...data, date: e.target.value });
        break;
      case "flight":
        setData({ ...data, flight: e.target.value });
        break;
      case "seat":
        setData({ ...data, seat: e.target.value });
        break;
      case "departTime":
        setData({ ...data, departTime: e.target.value });
        break;
      case "arriveTime":
        setData({ ...data, arriveTime: e.target.value });
        break;
      case "departGate":
        setData({ ...data, departGate: e.target.value });
        break;
      case "arriveGate":
        setData({ ...data, arriveGate: e.target.value });
        break;
      case "fname":
        setData({ ...data, fname: e.target.value });
        break;
      case "reservationCode":
        setData({ ...data, reservationCode: e.target.value });
        break;
    }
  }


  return (
    <>
      <div className="input">
        <div className="input-container">
          <h2>Free Plane Ticket Generator</h2>
          <p>Create plane tickets as souvenirs to remember the places you traveled to!</p>

          <form className='form-container'>
            <div className="mb-3">
              <label className="form-label">Class:</label>
              <input name="class" className="form-control" type="text" value={data.class} onChange={(e) => handleChange(e)} />
            </div>

            <div className="mb-3">
              <label className="form-label">Destination: (City)</label>
              <input name="toCity" className="form-control" type="text" value={data.toCity} onChange={(e) => handleChange(e)} />
            </div>

            <div className="mb-3 d-flex gap-3 align-items-end">
              <div className="mb-3">
                <label className="form-label">Destination: (Airport)</label>
                <input name="toAirport" className="form-control" type="text" value={data.toAirport} onChange={(e) => handleChange(e)} />
              </div>

              <div className="mb-3">
                <label className="form-label">Airport code:</label>
                <input name="toAirportCode" className="form-control" type="text" value={data.toAirportCode} onChange={(e) => handleChange(e)} />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Origin: (City)</label>
              <input name="fromCity" className="form-control" type="text" value={data.fromCity} onChange={(e) => handleChange(e)} />
            </div>

            <div className="mb-3">
              <label className="form-label">Origin: (Airport)</label>
              <input name="fromAirport" className="form-control" type="text" value={data.fromAirport} onChange={(e) => handleChange(e)} />
            </div>

            <div className="mb-3 d-flex gap-3 align-items-end">
              <div>
                <label className="form-label">Date:</label>
                <input name="date" className="form-control" type="text" value={data.date} onChange={(e) => handleChange(e)} />
              </div>
              <div>
                <label className="form-label">Flight:</label>
                <input name="flight" className="form-control" type="text" value={data.flight} onChange={(e) => handleChange(e)} />
              </div>
              <div>
                <label className="form-label">Seat:</label>
                <input name="seat" className="form-control" type="text" value={data.seat} onChange={(e) => handleChange(e)} />
              </div>
            </div>

            <div className="mb-3 d-flex gap-3 align-items-end">
              <div>
                <label className="form-label">Departure time:</label>
                <input name="departTime" className="form-control" type="text" value={data.departTime} onChange={(e) => handleChange(e)} />
              </div>
              <div>
                <label className="form-label">Arriving time:</label>
                <input name="arriveTime" className="form-control" type="text" value={data.arriveTime} onChange={(e) => handleChange(e)} />
              </div>
            </div>

            <div className="mb-3 d-flex gap-3 align-items-end">
              <div>
                <label className="form-label">Departure gate:</label>
                <input name="departGate" className="form-control" type="text" value={data.departGate} onChange={(e) => handleChange(e)} />
              </div>
              <div>
                <label className="form-label">Arriving gate:</label>
                <input name="arriveGate" className="form-control" type="text" value={data.arriveGate} onChange={(e) => handleChange(e)} />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input name="fname" className="form-control" type="text" value={data.fname} onChange={(e) => handleChange(e)} />
            </div>

            <div className="mb-3">
              <label className="form-label">Reservation Code:</label>
              <input name="reservationCode" className="form-control" type="text" value={data.reservationCode} onChange={(e) => handleChange(e)} />
            </div>

          </form>

          <p>DISCLAIMER: This ticket has no real value. It's for funsies only :P</p>
        </div>

      </div>

      <div className="ticket">
        <sendData.Provider value={data}>
          <Ticket />
        </sendData.Provider>
      </div>

    </>
  )
}

export default Input