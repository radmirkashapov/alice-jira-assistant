const aliceController = require('./../controllers/alice.controller')
const routes = [
    {
        method: 'POST',
        url: '/api/alice',
        handler: aliceController.aliceEndpoint
    }
]

module.exports = routes