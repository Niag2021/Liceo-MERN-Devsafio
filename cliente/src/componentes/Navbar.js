//import { Link } from 'react-router-dom';
import '../estilos/estiloNavbar.css';

function Navbar() {
  return (
    <div class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <section class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href='/'>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Alumnos">Alumnos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/createAlumno">Nuevo Alumno</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Cursos">Cursos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/createCurso">Nuevo Curso</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Asignaturas">Asignaturas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/createAsignatura">Nuevo Asignatura</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Apoderados">Apoderados</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/createApoderado">Nuevo Apoderado</a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Navbar