import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:4000/asignaturas/'

function CreateAsignatura() {
  const [nombre1_profesor, setNombre1Profesor] = useState('')
  const [nombre2_profesor, setNombre2Profesor] = useState('')
  const [apellido1_profesor, setApellido1Profesor] = useState('')
  const [apellido2_profesor, setApellido2Profesor] = useState('')
  const [telefono, setTelefono] = useState('')
  const [direccion, setDireccion] = useState('')
  const [email, setEmail] = useState('')
  const [id_asignaturas, setIdAsignaturas] = useState('')
  const navigate = useNavigate('')


  const store = async (e) => {
    e.preventDefault()
    await axios.post(URI, { nombre1_profesor: nombre1_profesor, nombre2_profesor: nombre2_profesor, apellido1_profesor: apellido1_profesor, apellido2_profesor: apellido2_profesor, telefono: telefono, direccion: direccion, email: email, id_asignaturas: id_asignaturas })
    navigate('/Asignaturas')
  }


  return (
    <div>
      <h3>Crear Asignatura.</h3>
      <form onSubmit={store}>
        <div>
          <label className="form-label">Nombre 1 Profesor:</label>
          <input value={nombre1_profesor} onChange={(e) => setNombre1Profesor(e.target.value)} type="text" className="form-control" />
        </div>
        <div>
          <label className="form-label">Nombre 2 Profesor:</label>
          <input value={nombre2_profesor} onChange={(e) => setNombre2Profesor(e.target.value)} type="text" className="form-control" />
        </div>
        <div>
          <label className="form-label">Apellido 1 Profesor:</label>
          <input value={apellido1_profesor} onChange={(e) => setApellido1Profesor(e.target.value)} type="text" className="form-control" />
        </div>
        <div>
          <label className="form-label">Apellido 2 Profesor:</label>
          <input value={apellido2_profesor} onChange={(e) => setApellido2Profesor(e.target.value)} type="text" className="form-control" />
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

export default CreateAsignatura