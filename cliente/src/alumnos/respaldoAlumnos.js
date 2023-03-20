import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
//import '../estilos/estiloAlumnos.css';

const URI = 'http://localhost:4000/alumnos/'
//<></>
//``
const Alumnos = () => {
    const [alumnos, setAlumnos] = useState([])

    useEffect( ()=>{
        getAlumnos()
    },[])

    //Procedimiento para mostrar todos los alumnos 
    const getAlumnos = async () => {
        const res = await axios.get(URI)      
        setAlumnos(res.data)
    }

    //Procedimiento para eliminar un alumno
    //parametro (id_alumnos)
    const deleteAlumnos = async(id_alumnos)=>{
        await axios.delete(`${URI}${id_alumnos}`)
        getAlumnos()
    }

    return (        
        <div className='container'>
            <div className='row'>
                <div className='col'>
                <Link to="/createAlumno" className='btn btn-primary mt-2 mb-2'>Crear</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre 1</th>
                                <th>Nombre 2</th>
                                <th>Apellido 1</th>
                                <th>Apellido 2</th>
                                <th>Edad</th>
                                <th>Profesor</th>
                                <th>Curso</th>
                                <th>Sala</th>
                                <th>Telefono</th>
                                <th>Apoderado parentesco</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {alumnos.map((alumno) => (
                                <tr key={alumno.id_alumnos}>
                                    <td>{alumno.nombre1}</td>
                                    <td>{alumno.nombre2}</td>
                                    <td>{alumno.apellido1}</td>
                                    <td>{alumno.apellido2}</td>
                                    <td>{alumno.edad}</td>
                                    <td>{alumno.id_profesor_jefe}</td>
                                    <td>{alumno.id_curso}</td>
                                    <td>{alumno.id_sala}</td>
                                    <td>{alumno.telefono_apoderado}</td>
                                    <td>{alumno.parentesco_apoderado}</td>
                                    <td>
                                        <Link to={`/EditAlumnos/${alumno.id_alumnos}`} className='btn btn-info'>Modificar</Link>
                                        <button onClick={ () => deleteAlumnos(alumno.id_alumnos)} class='btn btn-danger'>Eliminar</button>
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

export default Alumnos