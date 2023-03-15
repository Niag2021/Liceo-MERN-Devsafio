import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
//importando componentes
import Home from './home/Home.js';
import Alumnos from './alumnos/Alumnos.js';
import CreateAlumnos from './alumnos/CreateAlumnos.js';
import EditarAlumnos from './alumnos/EditAlumnos.js';
import Cursos from './cursos/Cursos.js';
import CreateCursos from './cursos/CreateCursos.js';
import EditarCurso from './cursos/EditCurso.js';
import Asignaturas from './asignaturas/Asignaturas';
import CreateAsignatura from './asignaturas/CreateAsignatura';
import EditarAsignatura from './asignaturas/EditAsignatura';
import Apoderados from './apoderados/Apoderados.js';
import CreateApoderado from './apoderados/CreateApoderado.js';
import EditarApoderado from './apoderados/EditApoderado.js';
//Componente que almacena la barra de navegacion 
import Navbar from './componentes/Navbar.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/Alumnos' element={ <Alumnos />}/>
          <Route path='/createAlumno' element={ <CreateAlumnos />}/>
          <Route path='/editAlumno/:id' element={ <EditarAlumnos />}/>
          <Route path='/Cursos' element={ <Cursos />}/>
          <Route path='/createCurso' element={ <CreateCursos />}/>
          <Route path='/editCurso/:id' element={ <EditarCurso />}/>
          <Route path='/Asignaturas' element={ <Asignaturas />}/>
          <Route path='/createAsignatura' element={ <CreateAsignatura />}/>
          <Route path='/edit/:id' element={ <EditarAsignatura />}/>
          <Route path='/Apoderados' element={ <Apoderados />}/>
          <Route path='/createApoderado' element={ <CreateApoderado />}/>
          <Route path='/edit/:id' element={ <EditarApoderado />}/>          
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
