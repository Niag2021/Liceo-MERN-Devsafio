import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:4000/asignaturas/'

function EditAsignatura() {
  const [nombre1_profesor, setNombre1] = useState('')
  const [nombre2_profesor, setNombre2] = useState('')
  const [apellido1_profesor, setApellido1] = useState('')
  const [apellido2_profesor, setApellido2] = useState('')
  const [telefono, setTelefono] = useState('')
  const [direccion, setDireccion] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate('')
  const { id_asignaturas } = useParams()

  //procedimiento para actualizar 
  const update = async (e) => {
    e.preventDefault()
    await axios.put(URI + id_asignaturas, {
      nombre1_profesor: nombre1_profesor, nombre2_profesor: nombre2_profesor, apellido1_profesor: apellido1_profesor, apellido2_profesor: apellido2_profesor, telefono: telefono, direccion: direccion, email: email
    })
    navigate('/Asignaturas')
  }

  useEffect(() => {
    getAsignaturasById()
  }, [])

  const getAsignaturasById = async (e) => {
    const res = await axios.get(URI + id_asignaturas)
    setNombre1(res.data.nombre1_profesor)
    setNombre2(res.data.nombre2_profesor)
    setApellido1(res.data.apellido1_profesor)
    setApellido2(res.data.apellido2_profesor)
    setTelefono(res.data.telefono)
    setDireccion(res.data.direccion)
    setEmail(res.data.email)
  }

  return (
    <div>
            <h3>Editar Asignatura</h3>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Nombre 1 :</label>
                    <input value={nombre1_profesor} onChange={(e) => setNombre1(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre 2:</label>
                    <input value={nombre2_profesor} onChange={(e) => setNombre2(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido 1:</label>
                    <input value={apellido1_profesor} onChange={(e) => setApellido1(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido 2:</label>
                    <input value={apellido2_profesor} onChange={(e) => setApellido2(e.target.value)} type="text" className="form-control" />
                </div>
                <div>
                    <label className="form-label">Telefono:</label>
                    <input value={telefono} onChange={ (e) => setTelefono(e.target.value)} type="number" className="form-control"/>
                </div>
                <div>
                    <label className="form-label">Direccion:</label>
                    <input value={direccion} onChange={ (e) => setDireccion(e.target.value)} type="number" className="form-control"/>
                </div>
                <div>
                    <label className="form-label">Email:</label>
                    <input value={email} onChange={ (e) => setEmail(e.target.value)} type="text" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
  )
}

export default EditAsignatura