const e = require('express')
const TabelaEstudante = require('../repository/TabelaEstudantes')
class Estudante {
    constructor({id, matricula, nome, primeira_nota,
    segunda_nota, media, dataCriacao, dataAtualizacao, versao}){
        this.id = id,
        this.matricula = matricula,
        this.nome = nome,
        this.primeira_nota = primeira_nota,
        this.segunda_nota = segunda_nota,
        this.media = media
        this.dataCriacao = dataCriacao,
        this.dataAtualizacao = dataAtualizacao,
        this.versao = versao
    }

    async criar() {
        const resultado = await TabelaEstudante.criarEstudante({
            matricula: this.gerarNumeroMatricula(),
            nome: this.nome,
            primeira_nota: this.primeira_nota,
            segunda_nota: this.segunda_nota,
        })
        this.id = resultado.id
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
        this.versao = resultado.versao

    }

    async carregar() {
        const resultado = await TabelaEstudante.listarPorMatricula(this.matricula)
        this.id = resultado.id
        this.nome = resultado.nome
        this.matricula = resultado.matricula
        this.primeira_nota = resultado.primeira_nota
        this.segunda_nota = resultado.segunda_nota
        this.media = this.calcularMedia(resultado.primeira_nota, resultado.segunda_nota)
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
        this.versao = resultado.versao
    }

    gerarNumeroMatricula(){
        const resultado = Math.floor(Math.random() * 10000)
        return resultado.toString() 
    }

    calcularMedia(primeira_nota, segunda_nota) {
        let notas = [primeira_nota, segunda_nota]
        let media = 0

        notas.forEach(nota => {
            media += nota
        })

        let total = media/2

        return this.media = total
    }
}



module.exports = Estudante