const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const questions = await connection('questions')
            .join('users', 'users.id', '=', 'questions.user_id')
            .select(['questions.*', 'users.name', 'users.occupation']);
        
        return response.json(questions);
    }, 

    async getOne(request, response) {
        const { id } = request.params;

        const question = await connection('questions')
            .where('id', id);

        if(Object.keys(question).length == '0') {
            return response.status(404).json({ error: 'A pergunta pesquisa não existe.' });
        }
        
        return response.json(question);
    }, 

    async create(request, response) {
        const { title, description, category } = request.body;

        const user_id = request.headers.authorization;
        const author = request.headers.author;
    
        const [id] = await connection('questions').insert({
            title,
            description,
            category,
            user_id,
            author
        });
    
        return response.json({ user_id });
    },

    async indexComments(request, response) {
        const comments = await connection('comments')
            .select('*')
        
        return response.json(comments);
    },

    async comment(request, response) {
        const { id } = request.params;
        const { comment } = request.body;

        const question_id = id;
 
        const author = request.headers.author;

        await connection('comments').insert({
            author,
            question_id,
            comment
        });

        return response.json(comment);
    }
};