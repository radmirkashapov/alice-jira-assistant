const hybridConfig = require('./../config/hybrid.config')
const boom = require('boom')
const httpClient = require('./../../core/got.client')


exports.getAll = async({page, size, filter}) => {
    try {
        let url = `${hybridConfig.configuration.baseApiURL}${hybridConfig.configuration.api.issues.getAll.url}`
        if(page || size || filter) {
            url += '?'
            if(page !== undefined)
                url += `page=${page}`
            if(size !== undefined)
                url += `size=${size}`
            if(filter !== undefined)
                url += `issue-filter=${filter}`
        }
        const {body} = await httpClient.client(url);
        return body
    } catch (err) {
        throw boom.boomify(err)
    }
}

exports.getById = async({id}) => {
    try {
        const url = `${hybridConfig.configuration.baseApiURL}${hybridConfig.configuration.api.issues.getById.url.replace(':id', id)}`
        const {body} = await httpClient.client.get(url)
        return body
    } catch (err) {
        throw boom.boomify(err)
    }
}
