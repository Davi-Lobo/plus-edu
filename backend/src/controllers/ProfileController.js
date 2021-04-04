const connection = require('../database/connection');
const { index } = require('./UserController');

module.exports = {
    async index(request, response) {
        const author = request.headers.author;

        const questions = await connection('questions')
            .where('author', author)
            .select('*');

        return response.json(questions);
    }
}