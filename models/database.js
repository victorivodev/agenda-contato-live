const Sequelize = require("sequelize");

const sequelize = new Sequelize('agenda_contato', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    query:{raw:true},
    define: {
        timestamps: false
    }
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}