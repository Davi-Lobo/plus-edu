const express = require("express");

const UserController = require('./controllers/UserController');
const QuestionController = require('./controllers/QuestionController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create)

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/question', QuestionController.index);
routes.get('/question/:id', QuestionController.getOne);
routes.post('/question/:id/comment', QuestionController.comment);
routes.post('/question', QuestionController.create);

routes.get('/comments', QuestionController.indexComments);

routes.get('/profile', ProfileController.index);

module.exports = routes;