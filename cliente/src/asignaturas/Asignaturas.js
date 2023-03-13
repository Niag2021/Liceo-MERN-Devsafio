import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:4000/asignaturas/'

const Asignaturas = () => {
  
  const [asignaturas, setAsignaturas] = useState([])

  useEffect(() => {
    getAsignaturas()
  }, [])

  const getAsignaturas = async () => {
    const res = await axios.get(URI)
    setAsignaturas(res.data)
  }

  const deleteAsignaturas = async(id_asignaturas)=>{
    await axios.delete(`${URI}${id_asignaturas}`)
    getAsignaturas()
  }


  return (
    <table class="table">
      <thead class="thead-dark">
      <Link to="/createAsignatura" className='btn btn-primary mt-2 mb-2'>Crear</Link>
        <tr>
          <th>Nombre Profesor 1</th>
          <th>Nombre Profesor 2</th>
          <th>Apellido Profesor 1</th>
          <th>Apellido Profesor 2</th>
          <th>Telefono</th>
          <th>Direccion</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {asignaturas.map((asignatura) => (
          <tr key={asignatura.id_cursos}>
            <td>{asignatura.nombre1_profesor}</td>
            <td>{asignatura.nombre2_profesor}</td>
            <td>{asignatura.apellido1_profesor}</td>
            <td>{asignatura.apellido2_profesor}</td>
            <td>{asignatura.telefono}</td>
            <td>{asignatura.direccion}</td>
            <td>{asignatura.email}</td>
            <td>
              <button onClick={() => deleteAsignaturas(asignatura.id_asignaturas)} class='btn btn-danger'>Eliminar</button>
            </td>
          </tr>
        ))}

      </tbody>
    </table>
  )
}

export default Asignaturas