const roteador = require('express').Router()
const TabelaEstudante = require('../repository/TabelaEstudantes')
const Estudante = require('../model/Estudante')
const SerializadorEstudante = require('../helpers/Serializador').SerializadorEstudante

roteador.post('/', async(req, res, next) => {
    try {
        const dadosRecebidos = req.body
        const estudante = new Estudante(dadosRecebidos)
        await estudante.criar()
        res.status(201)
        const serializador = new SerializadorEstudante(
            res.getHeader('Content-Type')
        )
        res.send(
            serializador.serializar(estudante)
        )

    } catch(erro) {
        next(erro)
    }
})

roteador.get('/:matricula', async(req, res, next) => {
    try{
        const matricula = req.params.matricula
        const estudante = new Estudante({ matricula: matricula})
        await estudante.carregar()
        res.status(200)
        const serializador = new SerializadorEstudante(
            res.getHeader('Content-Type')
        )
        res.send(
            serializador.serializar(estudante)
        )
    }catch (erro) {
        next(erro)
    }
})

roteador.get('/', async (req, res, next) => {
    try {
        const estudante = await TabelaEstudante.listarTodos()
        res.status(200)
        const serializador = new SerializadorEstudante(
            res.getHeader('Content-Type')
        )
        res.send(
            serializador.serializar(estudante)
        )
    }catch(erro) {
        next(erro)
    }
})



module.exports = roteador