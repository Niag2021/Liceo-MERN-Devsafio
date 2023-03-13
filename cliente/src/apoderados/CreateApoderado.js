import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:4000/apoderados/'

function CreateApoderados() {
    //Se añade a cada campo del formulario un estado. 
    const [nombre1_apoderado, setNombre1Apoderado] = useState('')
    const [nombre2_apoderado, setNombre2Apoderado] = useState('')
    const [apellido1_apoderado, setApellido1Apoderado] = useState('')
    const [apellido2_apoderado, setApellido2Apoderado] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')
    const [email, setEmail] = useState('')
    const [id_apoderados, setIdApoderados] = useState('')
    const navigate = useNavigate('')

    //procedimiento guardar
    /*
    Funcion asincrona de nombre store que utiliza axios para realizar una solicitud POST a la constante URI. 
    La funcion toma un objeto de evento (envío del formulario de abajo) como su parámetro y evita el 
    comportamiento predeterminado del evento usando e.preventDefault().
  
    La solicitud envía un objeto con 7 propiedades en el cuerpo de la solicitud a la URI especificada. 
  
    Una vez que la solicitud POST se completa con éxito, la función utiliza navegar para redirigir al 
    usuario a una nueva página. 
    */
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { nombre1_apoderado: nombre1_apoderado, nombre2_apoderado: nombre2_apoderado, apellido1_apoderado: apellido1_apoderado, apellido2_apoderado: apellido2_apoderado, telefono: telefono, direccion: direccion, email: email, id_apoderados: id_apoderados })
        navigate('/Apoderados')
    }

    return (
        //Estructura por defecto de un formulario 
        <div>
            <h3>Crear Apoderado.</h3>
            <form onSubmit={store}>
                <div>
                    <label className="form-label">Nombre 1 Profesor:</label>
                    <input value={nombre1_apoderado} onChange={(e) => setNombre1Apoderado(e.target.value)} type="text" className="form-control" />
                </div>
                <div>
                    <label className="form-label">Nombre 2 Profesor:</label>
                    <input value={nombre2_apoderado} onChange={(e) => setNombre2Apoderado(e.target.value)} type="text" className="form-control" />
                </div>
                <div>
                    <label className="form-label">Apellido 1 Profesor:</label>
                    <input value={apellido1_apoderado} onChange={(e) => setApellido1Apoderado(e.target.value)} type="text" className="form-control" />
                </div>
                <div>
                    <label className="form-label">Apellido 2 Profesor:</label>
                    <input value={apellido2_apoderado} onChange={(e) => setApellido2Apoderado(e.target.value)} type="text" className="form-control" />
                </div>
                <div>
                    <label className="form-label">Telefono:</label>
                    <input value={telefono} onChange={(e) => setTelefono(e.target.value)} type="number" className="form-control" />
                </div>
                <div>
                    <label className="form-label">Direccion:</label>
                    <input value={direccion} onChange={(e) => setDireccion(e.target.value)} type="text" className="form-control" />
                </div>
                <div>
                    <label className="form-label">Email:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        </div>
    )
}

export default CreateApoderados