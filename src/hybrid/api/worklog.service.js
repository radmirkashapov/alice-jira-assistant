const hybridConfig = require('./../config/hybrid.config')
const boom = require('boom')
const httpClient = require('./../../core/got.client')

exports.startTracking = async({issueId}) => {
    try {
        const url = `${hybridConfig.configuration.baseApiURL}${hybridConfig.configuration.api.worklogs.startTracking.url.replace('{issueMetaId}', issueId)}`
        const response = await httpClient.client.post(url)
        return response.ok
    } catch (err) {
        console.log(err)
    }
}

exports.stopTracking = async({issueId, comment, timeSpentSeconds}) => {
    try {
        const url = `${hybridConfig.configuration.baseApiURL}${hybridConfig.configuration.api.worklogs.stopTracking.url.replace('{issueMetaId}', issueId)}`
        const response = await httpClient.client.put(url, {
            json: {
                comment: comment.join(''),
                timeSpentSeconds: timeSpentSeconds
            },
            responseType: 'json'
        })
        return response.ok
    } catch (err) {
        throw boom.boomify(err)
    }
}