const express = require('express')

const routes = express.Router()

routes.get('/dashboard/ambientes', (request, response) => {
    const data = {
        sandbox: 18,
        produção: 25,
        stage: 4
    }

    return response.json(data)
})

routes.get('/dashboard/consumo', (request, response) => {
    const data = [
        {
            label: 'Ec Varejo',

        }
    ]

    return response.json(data)
})

module.exports = routes