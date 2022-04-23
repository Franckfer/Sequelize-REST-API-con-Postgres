import {Router} from 'express';
const router = Router();
import { getProjects, createProject, updateProjects, deleteProjects, getProject, getProjectTasks } from '../controllers/projects.controller.js'

router
    .get('/projects', getProjects)
    .post('/projects', createProject)
    .put('/projects/:id', updateProjects)
    .delete('/projects/:id', deleteProjects)
    
    .get('/projects/:id', getProject)
    .get('/projects/:id/tasks', getProjectTasks)




export default router;