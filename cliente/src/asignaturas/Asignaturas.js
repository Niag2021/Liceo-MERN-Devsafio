import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../estilos/estiloAsignaturas.css';

const URI = 'http://localhost:4000/asignaturas/'

const Asignaturas = () => {

  const [asignaturas, setAsignaturas] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getAsignaturas()
  }, [])

  const getAsignaturas = async () => {
    const res = await axios.get(URI)
    setAsignaturas(res.data)
  }

  const deleteAsignaturas = async (id_asignaturas) => {
    await axios.delete(`${URI}${id_asignaturas}`)
    getAsignaturas()
  }


  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Link to="/createAsignatura" className='btn btn-primary mt-2 mb-2'>Crear</Link>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Nombres</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Telefono</th>
                <th scope="col">Email</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {asignaturas.map((asignatura) => (
                <tr key={asignatura.id_alumnos}>
                  <td>{asignatura.nombre1_profesor} {asignatura.nombre2_profesor}</td>
                  <td>{asignatura.apellido1_profesor} {asignatura.apellido2_profesor}</td>
                  <td>{asignatura.telefono}</td>
                  <td>{asignatura.email}</td>
                  <td>
                    <button onClick={() => deleteAsignaturas(asignatura.id_asignaturas)} class='btn btn-primary'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    </button>
                    <Link to={`/editAsignatura/${asignatura.id_asignaturas}`} className='btn btn-info'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                      </svg>
                    </Link>
                    <button onClick={() => deleteAsignaturas(asignatura.id_asignaturas)} class='btn btn-danger'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2-fill" viewBox="0 0 16 16">
                        <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Asignaturas