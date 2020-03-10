import express from 'express';
import {UserController} from '../controllers';

const userRouter = express.Router();


userRouter.route( '/user(/:id)?' )
	.post( UserController.createUser )
	.get( UserController.getUserById )
	.patch( UserController.updateUserById )
	.delete( UserController.deleteUserById );

module.exports = userRouter;
