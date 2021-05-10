const hybridConfig = require('./../config/hybrid.config')
const boom = require('boom')
const httpClient = require('./../../core/got.client')
const buildUrl = require('build-url')


exports.getAll = async({page, size, filter}) => {
    try {
        let queryParams = {
            page: page,
            size: size
        }
        queryParams['issue-filter'] = filter

        const uri = buildUrl(
            hybridConfig.configuration.baseApiURL,
            {
                path: hybridConfig.configuration.api.issues.getAll.url,
                queryParams: queryParams
            }
        )
        const f = 0
        const {body} = await httpClient.client(uri);
        return JSON.parse(body)
    } catch (err) {
        throw boom.boomify(err)
    }
}

exports.getById = async({id}) => {
    try {
        const url = `${hybridConfig.configuration.baseApiURL}${hybridConfig.configuration.api.issues.getById.url.replace(':id', id)}`
        const {body} = await httpClient.client.get(url)
        return JSON.parse(body)
    } catch (err) {
        throw boom.boomify(err)
    }
}
