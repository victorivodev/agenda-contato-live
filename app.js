const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const Contato = require("./models/Contato");
const { sequelize } = require("./models/database");
const Swal = require('sweetalert2')
const porta = 8080;

//Configurações
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas
app.get('/', function(req, res) {
    Contato.findAll().then(function(contatos){
        res.render('home', {contatos: contatos})
    })
})

app.get('/addcontato', function(req, res) {
    res.render('addContato')
})

app.get('/consultaContato', function(req, res){
    res.render('consultaContato')
})

app.post('/cadContato', function(req, res){
    Contato.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        telefone: req.body.telefone
    }).then(function(){
        res.redirect('/');
    }).catch(function(err){
        res.send("Não foi possível cadastrar o contato. Erro: " + err)
    });
});


app.get('/delContato/:id', function(req, res){
  Contato.destroy({
    where: {
      'id': req.params.id
    },
  }).then(function(){
    res.redirect('/');
}).catch(function(err){
    res.send("Erro ao excluir contato. Erro: " + err)
  });
})

app.listen(porta, function(err) {
    if(err) {
        console.log('Erro ao iniciar aplicação: ', err)
    } else {
        console.log('Aplicação rodando na porta', porta)
    }
});