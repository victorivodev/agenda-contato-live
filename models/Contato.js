const database = require('../database/database');

const Contato = database.sequelize.define('contatos', {
    id: {
        type: database.Sequelize.INTEGER,
        primaryKey: true
    },
    nome: {
        type: database.Sequelize.STRING
    },
    sobrenome: {
        type: database.Sequelize.STRING
    },
    email: {
        type: database.Sequelize.STRING
    },
    telefone: {
        type: database.Sequelize.STRING
    }
});  

module.exports = Contato;