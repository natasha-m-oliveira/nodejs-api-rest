//Instanciando a dependência
const express = require('express');
const consign = require('consign');

//Biblioteca
const bodyParser = require('body-parser');

module.exports = () => {
    //Configura o nosso aplicativo

    const app = express();
    //responsável por agrupar todas as rotas no app
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    //conseguimos ler os dados que estamos recebendo do body

    consign()
        .include('controllers')
        .into(app);
    
    return app;
}