import express from 'express';
import {TaskController} from '../controllers';
import {checkAuthorization} from '../middlewares/authorization';

const taskRouter = express.Router();



taskRouter.use( checkAuthorization );


taskRouter.route( '/tasks' )
	.get( TaskController.getUserTasks );

taskRouter.route( '/task(/:id)?' )
	.post( TaskController.createTask )
	.get( TaskController.getTaskById )
	.patch( TaskController.updateTaskById )
	.delete( TaskController.deleteTaskById );

module.exports = taskRouter;
