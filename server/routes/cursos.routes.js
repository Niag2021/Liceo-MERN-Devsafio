import {Router} from 'express'; 
import { getCursos, getCurso, createCurso, updateCurso, deleteCurso } from '../controllers/cursos.controllers.js';

const router = Router()
    router.get('/cursos', getCursos);
    router.get('/:id', getCurso);
    router.post('/cursos', createCurso);
    router.put('/cursos/:id', updateCurso); 
    router.delete('/cursos/:id', deleteCurso); 
export default router