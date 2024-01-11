import Ticket from '../Ticket/Ticket';
import { useState, createContext } from 'react';
import './input.css';

export const sendDatos = createContext();

function Input() {

  const [datos, setDatos] = useState();

  const guardarDatos = (e) => {
    e.preventDefault();

    const form = e.target;
    console.log(e.target);
    const formData = new FormData(form);
    // const formJson = Object.fromEntries(formData.entries());
    console.log(formData);
    setDatos(formData);
    console.log(datos);
  }


  return (
    <div>
      <form className='containerForm' onSubmit={guardarDatos}>
        <div className="mb-3">
          <label name="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label name="reserva" className="form-label">Numero de Reserva</label>
          <input type="text" className="form-control" />
        </div>

        <button type="submit" className="btn btn-success">Generar ticket</button>
      </form>

      <sendDatos.Provider value={datos}>
        <Ticket />
      </sendDatos.Provider>
    </div>
  )
}

export default Input