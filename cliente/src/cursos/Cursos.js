import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
//import '../estilos/estiloCursos.css';

const URI = 'http://localhost:4000/cursos/'

const Cursos = () => {
    const [cursos, setCursos] = useState([])
    const navigate = useNavigate()

    useEffect( ()=>{
        getCursos()
    },[])

    //Procedimiento para mostrar todos los cursos 
    const getCursos = async () => {
        const res = await axios.get(URI)      
        setCursos(res.data)
    }

    //Procedimiento para eliminar un curso
    //parametro (id_cursos)
    const deleteCursos = async(id_cursos)=>{
        await axios.delete(`${URI}${id_cursos}`)
        getCursos()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                <Link to="/createCurso" className='btn btn-primary mt-2 mb-2'>Crear</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Id Alumnos</th>
                                <th>Id Sala</th>
                                <th>Profesor Jefe</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {cursos.map((curso) => (
                                <tr key={curso.id_cursos}>
                                    <td>{curso.nombre}</td>
                                    <td>{curso.id_alumno}</td>
                                    <td>{curso.id_sala}</td>
                                    <td>{curso.id_profesor_jefe}</td>
                                    <td>
                                        <Link to={`/editCurso/${curso.id_cursos}`} className='btn btn-info'>Modificar</Link>
                                        <button onClick={() => navigate(`/editCurso/${curso.id_cursos}`)}>Actualizar de prueba</button>
                                            <br/>
                                        <button onClick={ () => deleteCursos(curso.id_cursos)} class='btn btn-danger'>Eliminar</button>
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

export default Cursos