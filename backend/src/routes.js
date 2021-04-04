const express = require("express");

const connection = require('./database/connection');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.index);

routes.post('/users', UserController.create);

module.exports = routes;