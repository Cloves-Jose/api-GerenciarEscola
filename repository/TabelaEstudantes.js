const Modelo = require('../database/ModeloTabelaEstudantes')

module.exports = {

    criarEstudante(estudante) {
        return Modelo.create(estudante)
    },

    listarTodos() {
        return Modelo.findAll({
            raw: true
        })
    },
    
    listarPorMatricula(matricula) {
        return Modelo.findOne({
            where: {
                matricula: matricula
            }
        })
    }
}