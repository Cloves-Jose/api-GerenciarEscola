const Sequelize = require('sequelize')
const conexao = require('./index')

const colunas = {
    matricula: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    primeira_nota: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    segunda_nota: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
}

const opcoes = {
    freezeTableName: true,
    tableName: 'tb_estudantes',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = conexao.define('tb_estudantes', colunas, opcoes)