import { Router } from 'express';
import { getProfesores, getProfesor, createProfesor, updateProfesor, deleteProfesor } from '../controllers/profesores.controllers.js';

const router = Router()
    router.get('/profesores', getProfesores);
    router.get('/profesor/:id', getProfesor);
    router.post('/profesor', createProfesor);
    router.put('/profesor/:id', updateProfesor);
    router.delete('/profesor/:id', deleteProfesor);
export default router