const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async index( req, res ) {
        const { page = 1 } = req.query;
        const users = await User.paginate( {}, { page, limit: 10 } );
        return res.json(users);
    },

    async show( req, res ) {
        const user = await User.findById( req.params.id );
        return res.json(user);
    },

    async create( req, res ) {
        try {
            const user = await User.create( req.body );
            return res.json("Cadastro feito com Sucesso!");
        } catch (error) {
            return res.json("Erro ao Cadastrar! "+error);
        }
    },

    async update( req, res ) {
        try {
            const user = await User.findByIdAndUpdate( req.params.id , req.body, { new: true } );
            return res.json(`O Usuário ${ user.name }, foi atualizado.`);
        } catch (error) {
            return res.json("Erro ao atualizar! "+error);
        }
    },

    async delete( req, res ) {
        try {
            const user = await User.findByIdAndRemove( req.params.id );
            return res.json("O usuário foi deletado com Sucesso!");
        } catch (error) {
            return res.json("Erro ao deletar o usuário! "+error);
        }
    }
};