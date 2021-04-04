const express = require("express");

const routes = express.Router();

routes.get('/', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
       Renan: 'PROGRAMAÇÃO POR AMOR' 
    });
});

module.exports = routes;