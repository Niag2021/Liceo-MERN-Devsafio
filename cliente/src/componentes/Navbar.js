import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <h1>React MySQL</h1>
      <ul class="nav">
        <li class="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/Alumnos">Alumno</Link>
        </li>
        <li class="nav-item">
          <Link to="/createAlumno">Nuevo Alumno</Link>
        </li>
        <li class="nav-item">
          <Link to="/editAlumno/:id">Editar Alumnos</Link>
        </li>
        <li class="nav-item">
          <Link to="/Cursos">Cursos</Link>
        </li>
        <li class="nav-item">
          <Link to="/createCurso">Nuevo Curso</Link>
        </li>
        <li class="nav-item">
          <Link to="/editCurso/:id">Editar Cursos</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar