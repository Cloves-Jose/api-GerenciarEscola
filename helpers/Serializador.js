const ValorNaoSuportado = require('../err/ValorNaoSuportado')

class Serializador {
    json(dados) {
        return JSON.stringify(dados)
    }

    serializar(dados) {
        if(this.contentType === 'application/json') {
            return this.json(
                this.filtrar(dados)
            )
        }
    }

    filtrarObjeto(dados) {
        const novoObjeto = {}

        this.camposPublicos.forEach((campo) => {
            if(dados.hasOwnProperty(campo)) {
                novoObjeto[campo] = dados[campo]
            }
        })
        return novoObjeto
    }

    filtrar(dados) {
        if(Array.isArray(dados)) {
            dados = dados.map(item => {
                return this.filtrarObjeto(item)
            })
        } else {
            dados = this.filtrarObjeto(dados)
        }
        return dados
    }
}

class SerializadorEstudante extends Serializador {
    constructor(contentType){
        super()
        this.contentType = contentType
        this.camposPublicos = [
            'matricula',
            'nome',
            'primeira_nota',
            'segunda_nota',
            'media'
        ]
    }
}

module.exports = {
    Serializador: Serializador,
    SerializadorEstudante: SerializadorEstudante,
    formatosAceitos: ['application/json']
}