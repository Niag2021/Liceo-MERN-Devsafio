import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:4000/cursos/'

const EditCursos = () => {
    const [nombre, setNombre] = useState('')
    const [id_alumno, setIdAlumno] = useState('')
    const [id_sala, setIdSala] = useState('')
    const [id_profesor_jefe, setIdProfesorJefe] = useState('')
    const navigate = useNavigate('')
    const { id_cursos } = useParams()

    //procedimiento para actualizar 
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id_cursos, {
            nombre: nombre, id_alumno: id_alumno, id_sala: id_sala, id_profesor_jefe: id_profesor_jefe
        })
        navigate('/Cursos')
    }

    useEffect(() => {
        getCursosById()
    }, [])

    const getCursosById = async (e) => {
        const res = await axios.get(URI + id_cursos)
        setNombre(res.data.nombre)
        setIdAlumno(res.data.id_alumno)
        setIdSala(res.data.id_sala)
        setIdProfesorJefe(res.data.id_profesor_jefe)
    }

    return (
        <div>
            <h3>Editar Curso</h3>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Nombre:</label>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className="form-control" />
                </div>
                <div>
                    <label className="form-label">Id Alumnos:</label>
                    <input value={id_alumno} onChange={(e) => setIdAlumno(e.target.value)} type="number" className="form-control" />
                </div>
                <div>
                    <label className="form-label">Id Sala:</label>
                    <input value={id_sala} onChange={(e) => setIdSala(e.target.value)} type="number" className="form-control" />
                </div>
                <div>
                    <label className="form-label">Id Profesor Jefe:</label>
                    <input value={id_profesor_jefe} onChange={(e) => setIdProfesorJefe(e.target.value)} type="number" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Modificar</button>
            </form>
        </div>
    )
}

export default EditCursos