const express = require('express'); //carrega o Express, o framework padrão para Node.js que facilita a criação de servidores web e a manipulação de rotas e requisições HTTP.
const cors = require('cors'); //carrega o CORS, um pacote que permite que o appback seja acessado por outra origem, como por exemplo o appfront. 

const appback = express(); //cria o nosso servidor express e o armazena na variavel "appback".
const rotas = require('./routes.js'); //importa a rota criada no arquivo routes.js para a variavel "rotas".

appback.use(express.json()); //informa ao servidor appback que usará o formato JSON para as requisições.
appback.use(cors()); //diz ao servidor que usará o cors, que permite o acesso de outra origem, como por exemplo o appfront.
appback.use (rotas); //diz ao nosso servidor appback que use a rota criada no arquivo routes.js

//inicia o servidor na porta 3000, e imprime uma mensagem de confirmação no console.
appback.listen(3000, () => {
  console.log('Servidor iniciado. Escutando na porta 3000');
});
