import {Router} from 'express';
const router = Router();
import { getProjects, createProject, updateProjects, deleteProjects, getProject} from '../controllers/projects.controller.js'

router
    .get('/projects', getProjects)
    .post('/projects', createProject)
    .put('/projects/:id', updateProjects)
    .delete('/projects/:id', deleteProjects)
    .get('/projects/:id', getProject)




export default router;