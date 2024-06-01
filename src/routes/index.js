const express = require('express');
const v1Router = require('./v1');

const apiRouter = express.Router();

apiRouter.get('/v1', v1Router);


module.exports = apiRouter;