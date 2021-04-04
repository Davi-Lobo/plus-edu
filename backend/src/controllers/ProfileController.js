const connection = require('../database/connection');
const { index } = require('./UserController');

module.exports = {
    async index(request, response) {
        const user_id = request.headers.authorization;

        const questions = await connection('questions')
            .where('user_id', user_id)
            .select('*');

        return response.json(questions);
    }
}