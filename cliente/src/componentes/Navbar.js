import {Link} from 'react-router-dom'; 

function Navbar() {
  return (
    <div>
        <h1>React MySQL</h1>
        <ul>
          <Link to="/">Home</Link>
            <br/>
          <Link to="/Alumnos">Alumnos</Link>
            <br/>
          <Link to="/createAlumno">Nuevo Alumno</Link>
            <br/>
          <Link to="/editAlumno/:id">Editar Alumnos</Link>
            <br/>
          <Link to="/Cursos">Cursos</Link>
            <br/>
          <Link to="/createCurso">Nuevo Curso</Link>
            <br/>
          <Link to="/editCurso/:id">Editar Cursos</Link>
            <br/>
        </ul>
    </div>
  )
}

export default Navbar