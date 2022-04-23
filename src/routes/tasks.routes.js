import { Router } from 'express';
const router = Router();
import { createTask, deleteTask, getTasks, updateTask, getTask } from '../controllers/tasks.controller.js'


router
    .get('/tasks', getTasks)
    .post('/tasks', createTask )
    .put('/tasks/:id', updateTask)
    .delete('/tasks/:id', deleteTask)
    .get('/tasks/:id', getTask)



export default router;