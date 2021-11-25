const atendimentos = require('../models/atendimentos');
const Atendimento = require('../models/atendimentos');

//Ao criar um arquivo separado precisamos exportar esse módulo para conectá-lo a outros arquivos
module.exports = app => {
    //Criando a rota de acesso
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res);
    });

    app.get('/atendimentos/:id', (req, res) => {
        //Converte o número de string para number
        const id = parseInt(req.params.id);

        Atendimento.buscaPorId(id, res);
    });

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;

        //Adiciona um novo atendimento
        Atendimento.adiciona(atendimento, res);
    });

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;

        Atendimento.altera(id, valores, res);
    });

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Atendimento.deleta(id, res);
    });
}