import { Router } from 'express';
import TaskController from '../controller/TaskController.js'

const TaskRouter = new Router();

TaskRouter.get('/tasks', TaskController.getAll);
TaskRouter.get('/tasks/:id', TaskController.getOne);
TaskRouter.post('/tasks', TaskController.create);
TaskRouter.put('/tasks/:id', TaskController.update);

export default TaskRouter