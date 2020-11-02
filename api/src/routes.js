const express = require('express')

const routes = express.Router()

routes.get('/dashboard/ambientes', (request, response) => {
    const labels = ['Sandbox', 'Produção', 'Stage'];
    const data = labels.map(value => {
        return {
            label: value,
            quantidade: generateData()
        }
    })

    return response.json(data)
})

routes.get('/dashboard/consumo', (request, response) => {
    const labels = ['Ec. Varejo', 'Portador', 'Credenciador', 'Emissor', 'Comunidade']
    const data = labels.map(value => {
        return {
            label: value,
            portador: generateData(),
            token: generateData(),
            bins: generateData(),
            pricing: generateData(),
            facilitador: generateData(),
            histTrans: generateData(),
        }
    })

    return response.json(data)
})

routes.get('/dashboard/planejamento', (request, response) => {
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Novembro', 'Dezembro']
    const data = months.map(value => {
        return {
            label: value,
            realizado: generateData(),
            planejado: generateData()
        }
    })

    return response.json(data)
})

routes.get('/dashboard/doughnut', (request, response) => {
    const labels = ['Ec. Varejo', 'Portador', 'Credenciador', 'Emissor', 'Comunidade']
    const data = labels.map(value => {
        return {
            label: value,
            quantidade: generateData()
        }
    })

    response.json(data)
})

routes.get('/dashboard/faturamento', (request, response) => {
    return response.json(generateData() * 921)
})

routes.get('/dashboard/tempoMedioDeIntegracao', (request, response) => {
    return response.json(generateData())
})

routes.get('/dashboard/numeroDeAplicacoes', (request, response) => {
    return response.json(generateData() * 10)
})

const generateData = () => Number((Math.random() * 10).toFixed(0))


module.exports = routes