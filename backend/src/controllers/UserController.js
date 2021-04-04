const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const users = await connection('users').select('*');
        
        return response.json(users);
    },

    async create(request, response) {
        const { name, email, password, occupation, teacher } = request.body;
    
        await connection('users').insert({
            name,
            email,
            password,
            occupation,
            teacher
        });
    
        return response.json('Sua conta foi criada com sucesso :)');
    }
};