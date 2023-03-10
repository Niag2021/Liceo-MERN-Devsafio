import { Router } from 'express';
import { getAsignaturas, getAsignatura, createAsignatura, updateAsignatura, deleteAsignatura } from '../controllers/asignaturas.controllers.js';

const router = Router()
    router.get('/asignaturas', getAsignaturas);
    router.get('/asignaturas/:id', getAsignatura);
    router.post('/asignaturas', createAsignatura);
    router.put('/asignaturas/:id', updateAsignatura);
    router.delete('/asignaturas/:id', deleteAsignatura);
export default router