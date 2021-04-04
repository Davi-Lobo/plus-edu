const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
       amigo: 'estou aqui :)' 
    });
});

app.listen(3333);