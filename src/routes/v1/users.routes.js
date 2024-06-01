const express = require('express');

const { pingController} = require('../../controllers/index');

const userRouter = express.Router();

userRouter.get('/ping', pingController.pingUserController);



module.exports = userRouter;