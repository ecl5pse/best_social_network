import express from 'express';
import errorHandlers from './../middlewares/errorHandler';
import adminRouter from './admin.js';
import userRouter from './user.js';
import taskRouter from './task.js';
import authenticationRoute from './authorization.js';
import {checkAuthorization} from './../middlewares/authorization';

const router = express.Router();

router.use( authenticationRoute );
router.use( checkAuthorization );
router.use( '/admin', adminRouter );
router.use( userRouter );
router.use( taskRouter );

router.use( errorHandlers.handleValidationError,
	errorHandlers.handleApplicationError,
	errorHandlers.handleSequelizeError,
);
export  default router;
