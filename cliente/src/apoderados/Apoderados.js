import axios from 'axios'
import { useState, useEffect } from 'react'
import '../estilos/estiloApoderados.css';

//Se define una constante que almacenara la ruta donde se muestran todos los apoderados
const URI = 'http://localhost:4000/apoderados/'

function Apoderados() {
  //useState es un Hook que permite añadir el estado de React a un componente de función. 

  const [apoderados, setApoderados] = useState([])

  //useEffect, al usar este hook, le estamos indicando a React que el componente tiene que ejecutar getApoderados
  //después de renderizarse.   
  useEffect(() => {
    getApoderados()
  }, [])

  //Procedimiento para mostrar todos los apoderados. 
  //En la funcion getApoderados que es asincrona, 
  //realiza una solicitud get de URI (definido arriba) ademas de traer la data que se almaceno en el Hook useState 
  //almacenado esto ultimo en la constanta setApoderados 
  const getApoderados = async () => {
    const res = await axios.get(URI)
    setApoderados(res.data)
  }

  //Procedimiento para eliminar un apoderado con el parametro (id_apoderados)
  //En la funcion deleteApoderados que es asincrona, realiza una solicitud 
  //delete de URI (definido arriba) que incluye un parametro id_apoderado 
  //Luego se llama a la funcion getApoderados() despues que se haya 
  //realizado la solicitud de eliminacion, todo esto para eliminar un registro
  //de apoderados.  
  const deleteApoderados = async(id_apoderados)=>{
    await axios.delete(`${URI}${id_apoderados}`)
    getApoderados()
  }

  return (
    /*
    La estructura base de esta tabla fue copiada desde bootstrap en la cual se puede visualizar 
    el header de la tabla.
    */

    /*
    Se utiliza el metodo map() para iterar sobre la matriz de apoderados y generar una fila de 
    tabla para cada campo de "apoderado".    
    */

    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Nombre 1</th>
          <th>Nombre 2</th>
          <th>Apellido 1</th>
          <th>Apellido 2</th>
          <th>Telefono</th>
          <th>Direccion</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {apoderados.map((apoderado) => (
          <tr key={apoderado.id_apoderados}>
            <td>{apoderado.nombre1_apoderado}</td>
            <td>{apoderado.nombre2_apoderado}</td>
            <td>{apoderado.apellido1_apoderado}</td>
            <td>{apoderado.apellido2_apoderado}</td>
            <td>{apoderado.telefono}</td>
            <td>{apoderado.direccion}</td>
            <td>{apoderado.email}</td>
            <td>
              <button onClick={() => deleteApoderados(apoderado.id_apoderados)} class='btn btn-danger'>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Apoderados