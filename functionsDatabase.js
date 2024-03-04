const mysql = require('mysql');

// Criando conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'agenda_contato'
});

// Conectando ao banco de dados
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
function getContactByName(nome) {
    connection.query(`SELECT * FROM contatos WHERE nome LIKE '${nome}';`, (err, results) => {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            return;
        }
        console.log(results);
    });
}

// Função para criar contato na base
function createContact(nome, sobrenome, email, telefone) {
    connection.query(`INSERT INTO contatos (nome, sobrenome, email, telefone) VALUES (
        '${nome}',
        '${sobrenome}',
        '${email}',
        '${telefone}'
    )`, (err, results) => {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            return;
        }
        console.log(results);
    });
}

//Função para alterar dados de contato
function alterContact(nome, sobrenome, email, telefone){
    if (nome = '') {
        return 'Nome não atualizado'
    } else {
        connection.query(`UPDATE CONTATOS set nome = ${nome}`), (err, results) => {
            if(err) {
                return 'Erro ao atualizar nome'
            } 
            return;
        }
    }
    
    connection.query(`UPDATE contatos set
            nome = '${nome}',
            sobrenome ='${sobrenome}',
            email = '${email}',
            telefone = '${telefone}'`, (err, results) => {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            return;
        }
        console.log(results);
    });
}

function deleteContact(id){
    connection.query(`DELETE FROM contatos
    WHERE id = ${id}`)
}

module.exports = {
    getAllContacts,
    getContactByName,
    createContact,
    deleteContact,
    alterContact
}
