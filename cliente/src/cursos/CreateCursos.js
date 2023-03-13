import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:4000/cursos/'

const CreateCursos = () => {
    const [nombre, setNombre] = useState('')
    const [id_alumno, setIdAlumno] = useState('')
    const [id_sala, setIdSala] = useState('')
    const [id_profesor_jefe, setIdProfesorJefe] = useState('')
    const navigate = useNavigate('')

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nombre: nombre, id_alumno: id_alumno, id_sala: id_sala, id_profesor_jefe: id_profesor_jefe})
        navigate('/Cursos')
    }

    return (
        <div>
            <h3>Crear Curso.</h3>
            <form onSubmit={store}>
                <div>
                    <label className="form-label">Nombre:</label>
                    <input value={nombre} onChange={ (e) => setNombre(e.target.value)} type="text" className="form-control"/>
                </div>
                <div>
                    <label className="form-label">Id_Alumno:</label>
                    <input value={id_alumno} onChange={ (e) => setIdAlumno(e.target.value)} type="number" className="form-control"/>
                </div>
                <div>
                    <label className="form-label">Id Sala:</label>
                    <input value={id_sala} onChange={ (e) => setIdSala(e.target.value)} type="number" className="form-control"/>
                </div>
                <div>
                    <label className="form-label">Id Profesor Jefe:</label>
                    <input value={id_profesor_jefe} onChange={ (e) => setIdProfesorJefe(e.target.value)} type="number" className="form-control"/>
                </div>                              
            <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        </div>  
    )    
}

export default CreateCursos