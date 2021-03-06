const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { email, password } = request.body;

        const user = await connection('users')
            .where({
                email: email,
                password: password
            })
            .select('*');

        if(Object.keys(user).length == '0') {
            return response.status(400).json({ error: 'Usuário não encontrado.' });
        }

        return response.json(user);
    }
}