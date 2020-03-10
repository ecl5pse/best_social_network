import {loginByEmail, signTokenPair} from '../middlewares/authentication';

import express from 'express';
import {ACTION} from './../constants';

import {userSchema} from './../utils/validation';

import {createValidationMW} from './../middlewares/validation';

import {RefreshTokenController, UserController} from '../controllers';

const authenticationRoute = express.Router();

authenticationRoute.post( '/sign_up',
	createValidationMW( userSchema )( ACTION.CREATE ),
	UserController.createUser
);

authenticationRoute.post( '/sign_in',
	loginByEmail,
	signTokenPair,
	RefreshTokenController.createRefreshToken
);

module.exports = authenticationRoute;