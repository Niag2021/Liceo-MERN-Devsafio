import {useState, useEffect} from 'react'

//se define una constante de nombre URI que almacena la ruta 
//del servidor correspondiente a Asignaturas. 
const URI = 'http://localhost:4000/asignaturas/'

//se crea una funcion flecha donde se almacenara todo 
const Asignaturas = () => {
  //
  const [asignaturas, setAsignaturas] = useState([])

  return (
    //Esta estructura es copiada desde bootstrap, esto se realizo
    //para un mejor diseño inicial 
    <table class="table">
      <thead class="thead-dark">
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
            <td>{asignatura.nombre}</td>
            <td>{asignatura.id_alumno}</td>
            <td>{asignatura.id_sala}</td>
            <td>{asignatura.id_profesor_jefe}</td>
            
          </tr>
        ))}

      </tbody>
    </table>
  )
}

export default Asignaturas