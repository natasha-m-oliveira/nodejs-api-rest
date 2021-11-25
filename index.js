const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const tabelas = require('./infraestrutura/tabela');

//Conectando com o banco
conexao.connect(erro => {
    if (erro) {
        console.log(erro);
    } else {
        console.log('Conectado com sucesso');

        tabelas.init(conexao);

        const app = customExpress();
        //Escutando a porta 3000
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
    }
});