const ModeloTabela = require('../database/ModeloTabelaEstudantes')

ModeloTabela
    .sync()
    .then(() => console.log('Tabela Criada com sucesso'))
    .catch(console.log)