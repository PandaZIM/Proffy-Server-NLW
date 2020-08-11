import express from 'express'

import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';
import UserController from './controllers/UserController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionController();
const userController = new UserController();

routes.post('/users_account', userController.create);

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get ('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes