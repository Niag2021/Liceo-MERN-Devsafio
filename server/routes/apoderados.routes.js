import { Router } from 'express';
import { getApoderados, getApoderado, createApoderado, updateApoderado, deleteApoderado } from '../controllers/apoderados.controllers.js';

const router = Router()
    router.get('/apoderados', getApoderados);
    router.get('/apoderados/:id', getApoderado);
    router.post('/apoderados', createApoderado);
    router.put('/apoderados/:id', updateApoderado);
    router.delete('/apoderados/:id', deleteApoderado);
export default router