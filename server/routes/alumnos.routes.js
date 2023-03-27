import { Router } from 'express';
import { getAlumnos, getAlumno, createAlumno, updateAlumno, deleteAlumno } from '../controllers/alumnos.controllers.js';

const router = Router()
    router.get('/alumnos', getAlumnos);
    router.get('/alumno/:id', getAlumno);
    router.post('/alumno', createAlumno);
    router.put('/alumno/:id', updateAlumno);
    router.delete('/alumno/:id', deleteAlumno);
export default router