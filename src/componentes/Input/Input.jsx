import Ticket from '../Ticket/Ticket';
import { useState, createContext } from 'react';
import './input.css';

export const sendDatos = createContext();

function Input() {

  const [datos, setDatos] = useState({ nombre: "sol", nroReserva: "123"});

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(name);
    console.log(value);
    setDatos({ name: value })
    console.log(datos);
  }

  // const guardarDatos = (e) => {
  //   e.preventDefault();

  //   const form = e.target;
  //   console.log(e.target);
  //   const formData = new FormData(form);
  //   // const formJson = Object.fromEntries(formData.entries());
  //   console.log(formData);
  //   setDatos(formData);
  //   console.log(datos);
  // }


  return (
    <>
      <div className="input">
        <form className='form-container'>

          <div className="mb-3">
            <label className="form-label">Nombre:</label>
            <input name="nombre" className="form-control" type="text" value={datos.nombre} onChange={(e) => handleChange(e)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Numero de Reserva:</label>
            <input name="nroReserva" className="form-control" type="text" value={datos.nroReserva} onChange={(e) => handleChange(e)} />
          </div>

          {/* <button type="submit" className="btn btn-success">Generar ticket</button> */}
        </form>
      </div>

      <div className="ticket">
        <sendDatos.Provider value={datos}>
          <Ticket />
        </sendDatos.Provider>
      </div>

    </>
  )
}

export default Input