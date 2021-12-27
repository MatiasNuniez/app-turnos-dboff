import React, { useState } from 'react';


// STATES --------------------------------------------------------------------------------------
const View = () => {
    const [turnos, setTurnos] = useState([]);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [hora, setHora] = useState();
    const [fecha, setFecha] = useState();
    const [descripcion, setDescripcion] = useState('');
    const [telefono, setTelefono] = useState('');


// HOOKS -----------------------------------------------------------------
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTurno = {
                nombre:nombre,
                apellido:apellido,
                hora:hora,
                fecha:fecha,
                descripcion:descripcion,
                telefono:telefono
            }
            turnos.push(newTurno)
            console.log(turnos);
        setNombre("")
        setApellido("")
        setHora("")
        setFecha("")
        setDescripcion("")
        setTelefono("")
        }



// VISTA -------------------------------------------------------------------------------------------------
    return (
        <div>
            <form>
            <div className="mb-3">
                <label className="form-label"  >Nombre</label>
                <input type="text" className="form-control" id="nombre" onChange={e => setNombre (e.target.value)} value = {nombre} />
            </div>
            <div className="mb-3">
                <label className="form-label"  >Apellido</label>
                <input type="text" className="form-control" id="apellido"onChange={e => setApellido (e.target.value)} value = {apellido} />
            </div>
            <div className="mb-3">
                <label className="form-label" >Hora</label>
                <input type="time" className="form-control" id="hora" onChange={e => setHora (e.target.value)} value = {hora} />
            </div>
            <div className="mb-3">
                <label className="form-label">Fecha</label>
                <input type="date" className="form-control" id="fecha" onChange={e => setFecha (e.target.value)} value = {fecha} />
            </div>
            <div className="mb-3">
                <label className="form-label">Telefono</label>
                <input type="text" className="form-control" id="telefono" onChange={e => setTelefono (e.target.value)} value = {telefono} />
            </div>
            <div className="mb-3">
                <label className="form-label">Descripcion</label>
                <textarea type="text" className="form-control" id="descripcion" onChange={e => setDescripcion (e.target.value)} value = {descripcion} />
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        <div>
        <div className='cards'>
    {turnos.map(turno =>(
        <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
        <h5 className="card-title">{turno.nombre} {turno.apellido}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{turno.hora}</h6>
        <p className="card-text">{turno.fecha}</p>
        <p className="card-text">{turno.descripcion}</p>
        <p className="card-text">{turno.telefono}</p>
  </div>
</div>
            ))}
    </div>
        </div>
        </div>
    )
} 


export default View;