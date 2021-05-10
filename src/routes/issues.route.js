const issueController = require('../controllers/issues.controller')

const routes = [
    {
        method: 'GET',
        url: '/api/issues/all',
        handler: issueController.getAll
    },
    {
        method: 'GET',
        url: '/api/issues/:id',
        handler: issueController.getById
    }
]

module.exports = routes