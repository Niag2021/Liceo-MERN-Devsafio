import {Route, Routes} from 'react-router-dom'; 
import AlumnosPage from "./pages/AlumnosPage"; 
import AlumnosForm from "./pages/AlumnosForm";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AlumnosPage />}/>
      <Route path="/new" element={<AlumnosForm />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

export default App;
