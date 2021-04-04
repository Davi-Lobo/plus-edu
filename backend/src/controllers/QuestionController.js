const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const questions = await connection('questions').select('*');
        
        return response.json(questions);
    }, 
    async create(request, response) {
        const { title, description, category } = request.body;
        const user_id = request.headers.Authorization;
    
        const [id] = await connection('questions').insert({
            title,
            description,
            category,
            user_id
        });
    
        return response.json({ user_id });
    }
};