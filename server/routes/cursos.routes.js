import {Router} from 'express'; 
import { getCursos, getCurso, createCurso, updateCurso, deleteCurso } from '../controllers/cursos.controllers.js';

const router = Router()
    router.get('/cursos', getCursos);
    router.get('/curso/:id', getCurso);
    router.post('/curso', createCurso);
    router.put('/curso/:id', updateCurso); 
    router.delete('/curso/:id', deleteCurso); 
export default router