const boom = require('boom')
const issues = require('../hybrid/api/issue.service')

exports.getAll = async (req, reply) => {
    try {
        const page = req.params.page
        const size = req.params.size
        const issueFilter = req.params.filter
        return await issues.getAll({page, size, issueFilter})
    } catch (err) {
        throw boom.boomify(err)
    }
}

exports.getById = async (req, reply) => {
    try {
        const id = req.params.id
        return await issues.getById({id})
    } catch (err) {
        throw boom.boomify(err)
    }
}