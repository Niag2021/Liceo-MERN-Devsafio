import { Router } from 'express';
import { getApoderados, getApoderado, createApoderado, updateApoderado, deleteApoderado } from '../controllers/apoderados.controllers.js';

const router = Router()
    router.get('/apoderados', getApoderados);
    router.get('/apoderado/:id', getApoderado);
    router.post('/apoderado', createApoderado);
    router.put('/apoderado/:id', updateApoderado);
    router.delete('/apoderado/:id', deleteApoderado);
export default router