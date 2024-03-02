const mysql = require('mysql');

// Crie a conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'agenda_contato'
});

// Conecte-se ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados.');
});

// Função para buscar todos os contatos
function getAllContacts() {
    connection.query('SELECT * FROM contatos', (err, results) => {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            return;
        }
        console.log(results);
    });
}

// Função para buscar contatos pelo nome
function getContactByName(name) {
    connection.query(`SELECT * FROM contatos WHERE nome LIKE '${name}';`, (err, results) => {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            return;
        }
        console.log(results);
    });
}

module.exports = {
    getAllContacts,
    getContactByName
}
