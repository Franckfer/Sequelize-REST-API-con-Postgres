import {Router} from 'express';
const router = Router();
import { getProjects, createProject, updateProjects, deleteProjects} from '../controllers/projects.controller.js'

router
    .get('/projects', getProjects)
    .post('/projects', createProject)
    .put('/projects/:id', updateProjects)
    .delete('/projects/:id', deleteProjects)
    .get('/projects/:id', async (req, res) => {

    })




export default router;