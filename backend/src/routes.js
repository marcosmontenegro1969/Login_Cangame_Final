const express = require('express'); //carrega o Express, o framework padrão para Node.js que facilita a criação de servidores web e a manipulação de rotas e requisições HTTP.
const rotas = express.Router(); //cria o objeto de roteador "routes" onde definiremos nossa rota

//cria um array com usuarios fixos para teste, simulando um banco de dados
const usuarios = [
  {id: 1, nome: 'EDUARDO', senha: '123', nivel: 'solicitante', data: '01/01/2023'},
  {id: 2, nome: 'ITALO',   senha: '123', nivel: 'admin',       data: '01/02/2023'},
  {id: 3, nome: 'JOÃO',    senha: '123', nivel: 'gestor',      data: '01/03/2023'},
  {id: 4, nome: 'MARCOS',  senha: '123', nivel: 'admin',       data: '01/04/2023'},
  {id: 5, nome: 'MATHEUS', senha: '123', nivel: 'solicitante', data: '01/05/2023'},
  {id: 6, nome: 'RODOLFO', senha: '123', nivel: 'gestor',      data: '01/06/2023'},
]

//cria a rota POST, que recebe uma solicitação de login e retorna um usuário se as credenciais forem válidas.
rotas.post('/login', (request, response) => {

  const {nome, senha} = request.body; //extrai as propriedades nome e senha do objeto request.body, e as atribui às constantes nome e senha, respectivamente.
  
  //procura um usuário no array usuarios cujo nome e senha correspondam aos fornecidos na solicitação, se encontrar os
  //armazenará na constante "usuario". Se não encontrar, a constante "usuario" receberá "nulo".
  const usuario = usuarios.find(usuario => usuario.nome === nome.toUpperCase() && usuario.senha === senha);


  //verifica se a constante "usuario" é diferente de "nulo", ou seja, se encontrou um usuário correspondente.
  if (usuario) {
    return response.status(200).json(usuario); //Se encontrar, envia uma resposta JSON de sucesso (status 200) com o usuário encontrado.
  }
  return response.status(401).json({message: 'Login ou senha inválidos'}); //Se não encontrar, envia uma resposta JSON de não autorizado (status 401).
});

module.exports = rotas; //exporta o objeto de roteador "routes" para que possa ser importado em outros arquivos.
