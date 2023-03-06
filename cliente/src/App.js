import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
//importando componentes
import Home from './home/Home.js';
import Alumnos from './alumnos/Alumnos.js';
import CreateAlumnos from './alumnos/CreateAlumnos.js';
import EditarAlumnos from './alumnos/EditAlumnos.js';
import Cursos from './cursos/Cursos.js';
import CreateCursos from './cursos/CreateCursos.js';
import EditarCursos from './cursos/EditCursos.js';
import Navbar from './componentes/Navbar.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <p>Pagina de Bienvenida.</p>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/Alumnos' element={ <Alumnos />}/>
          <Route path='/createAlumno' element={ <CreateAlumnos />}/>
          <Route path='/editAlumno/:id' element={ <EditarAlumnos />}/>
          <Route path='/Cursos' element={ <Cursos />}/>
          <Route path='/createCurso' element={ <CreateCursos />}/>
          <Route path='/editCurso/:id' element={ <EditarCursos />}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
