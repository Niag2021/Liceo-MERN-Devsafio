//import { Link } from 'react-router-dom';
import '../estilos/estiloNavbar.css';

function Navbar() {
  return (
    <div class="navbar navbar-expand-lg bg-light">
      <section>
        <ul class="navbar-nav">
          <li>
            <a class="nav-link" href='/'>Home</a>
          </li>
          <li>
            <a class="nav-link" href="/Alumnos">Alumnos</a>
          </li>
          <li>
            <a class="nav-link" href="/createAlumno">Nuevo Alumno</a>
          </li>
          <li>
            <a class="nav-link" href="/Cursos">Cursos</a>
          </li>
          <li>
            <a class="nav-link" href="/createCurso">Nuevo Curso</a>
          </li>
          <li>
            <a class="nav-link" href="/Apoderados">Apoderados</a>
          </li>
          <li>
            <a class="nav-link" href="/createApoderado">Nuevo Apoderado</a>
          </li>
          <li>
            <a class="nav-link" href="/Asignaturas">Asignaturas</a>
          </li>
          <li>
            <a class="nav-link" href="/createAsignatura">Nuevo Asignatura</a>
          </li>          
        </ul>
      </section>
    </div>
  )
}

export default Navbar