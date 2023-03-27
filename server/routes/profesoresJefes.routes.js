import { Router } from 'express';
import { getProfesorJefes, getProfesorJefe, createProfesorJefe, updateProfesorJefe, deleteProfesorJefe } from '../controllers/profesorJefe.controllers.js';

const router = Router()
    router.get('/profesoresJefes', getProfesorJefes);
    router.get('/profesorJefe/:id', getProfesorJefe);
    router.post('/profesorJefe', createProfesorJefe);
    router.put('/profesorJefe/:id', updateProfesorJefe);
    router.delete('/profesorJefe/:id', deleteProfesorJefe);
export default router