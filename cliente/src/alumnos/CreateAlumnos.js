import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:4000/alumnos/'

const CreateAlumnos = () => {
    const [nombre1, setNombre1] = useState('')
    const [nombre2, setNombre2] = useState('')
    const [apellido1, setApellido1] = useState('')
    const [apellido2, setApellido2] = useState('')
    const [edad, setEdad] = useState('')
    const [id_profesor_jefe, setIdProfesorJefe] = useState('')
    const [id_curso, setIdCurso] = useState('')
    const [id_sala, setIdSala] = useState('')
    const [telefono, setTelefono] = useState('')
    const [telefono_apoderado, setTelefonoApoderado] = useState('')
    const [parentesto_apoderado, setParentescoApoderado] = useState('')
    const navigate = useNavigate('')
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nombre1: nombre1, nombre2: nombre2, apellido1: apellido1, apellido2: apellido2, edad: edad, id_profesor_jefe: id_profesor_jefe, id_curso: id_curso, id_sala: id_sala, telefono: telefono, telefono_apoderado: telefono_apoderado, parentesto_apoderado: parentesto_apoderado})
        navigate('/Alumnos')
    }

    return (
        <div>
            <h3>Crear Alumno</h3>
            <form onSubmit={store}>
                <div>
                    <label className="form-label">Nombre 1:</label>
                    <input value={nombre1} onChange={ (e) => setNombre1(e.target.value)} type="text" className="form-control"/>
                </div>
                <div>
                    <label className="form-label">Nombre 2:</label>
                    <input value={nombre2} onChange={ (e) => setNombre2(e.target.value)} type="text" className="form-control"/>
                </div>
                <div>
                    <label className="form-label">Apellido 1:</label>
                    <input value={apellido1} onChange={ (e) => setApellido1(e.target.value)} type="text" className="form-control"/>
                </div>
                <div>
                    <label className="form-label">Apellido 2:</label>
                    <input value={apellido2} onChange={ (e) => setApellido2(e.target.value)} type="text" className="form-control"/>
                </div>
                <div>
                    <label className="form-label">Edad:</label>
                    <input value={edad} onChange={ (e) => setEdad(e.target.value)} type="number" className="form-control"/>
                </div>
                <div>
                    <label className="form-label">Id Profesor Jefe:</label>
                    <input value={id_profesor_jefe} onChange={ (e) => setIdProfesorJefe(e.target.value)} type="number" className="form-control"/>
                </div>
                <div>
                    <label className="form-label">Id Curso:</label>
                    <input value={id_curso} onChange={ (e) => setIdCurso(e.target.value)} type="number" className="form-control"/>
                </div>
                <div>
                    <label className="form-label">Id Sala:</label>
                    <input value={id_sala} onChange={ (e) => setIdSala(e.target.value)} type="number" className="form-control"/>
                </div>
                <div>
                    <label className="form-label">Telefono:</label>
                    <input value={telefono} onChange={ (e) => setTelefono(e.target.value)} type="number" className="form-control"/>
                </div>
                <div>
                    <label className="form-label">Telefono Parentesco:</label>
                    <input value={telefono_apoderado} onChange={ (e) => setTelefonoApoderado(e.target.value)} type="number" className="form-control"/>
                </div>
                <div>
                    <label className="form-label">Parentesco Apoderado:</label>
                    <input value={parentesto_apoderado} onChange={ (e) => setParentescoApoderado(e.target.value)} type="text" className="form-control"/>
                </div>                
            <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div> 
    )    
}

export default CreateAlumnos