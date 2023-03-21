import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:4000/apoderados/'

const EditApoderados = () => {
  const [nombre1_apoderado, setNombre1Apoderado] = useState('')
  const [nombre2_apoderado, setNombre2Apoderado] = useState('')
  const [apellido1_apoderado, setApellido1Apoderado] = useState('')
  const [apellido2_apoderado, setApellido2Apoderado] = useState('')
  const [telefono, setTelefono] = useState('')
  const [direccion, setDireccion] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate('')
  const { id_apoderados } = useParams()

  //procedimiento para actualizar 
  const update = async (e) => {
    e.preventDefault()
    await axios.put(URI + id_apoderados, {
      nombre1_apoderado: nombre1_apoderado,
      nombre2_apoderado: nombre2_apoderado,
      apellido1_apoderado: apellido1_apoderado,
      apellido2_apoderado: apellido2_apoderado,
      telefono: telefono,
      direccion: direccion,
      email: email
    })
    navigate('/Apoderados')
  }

  // => {} <></> 

  useEffect(() => {
    getApoderadoById()
  }, [])

  const getApoderadoById = async (e) => {
    const res = await axios.get(URI + id_apoderados)     
    setNombre1Apoderado(res.data.nombre1_apoderado)
    setNombre2Apoderado(res.data.nombre2_apoderado)
    setApellido1Apoderado(res.data.apellido1_apoderado)
    setApellido2Apoderado(res.data.apellido2_apoderado)
    setTelefono(res.data.telefono)
    setDireccion(res.data.direccion)
    setEmail(res.data.email)
}

  return (
    <div>
            <h3>Editar Apoderado</h3>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Nombre 1:</label>
                    <input value={nombre1_apoderado} onChange={(e) => setNombre1Apoderado(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre 2:</label>
                    <input value={nombre2_apoderado} onChange={(e) => setNombre2Apoderado(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido 1:</label>
                    <input value={apellido1_apoderado} onChange={(e) => setApellido1Apoderado(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido 2:</label>
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
                <button type="submit" className="btn btn-primary">Modificar</button>
            </form>
        </div>
  )
}

export default EditApoderados