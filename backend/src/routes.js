const express = require("express");

const connection = require('./database/connection');
const UserController = require('./controllers/UserController');
const QuestionController = require('./controllers/QuestionController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/question', QuestionController.index);
routes.get('/question/:id', QuestionController.getOne);
routes.post('/question', QuestionController.create);

module.exports = routes;