exports.configuration = {
    baseApiURL: 'http://api.perso.hybrid-zero.com',
    api: {
        issues: {
            getAll: {
                method: 'GET',
                url: '/v1/issues/all'
            },
            getById: {
                method: 'GET',
                url: '/v1/issues/:id'
            }
        },
        auth: {
            login: {
                method: 'POST',
                url: '/v1/auth/login'
            }
        },
        worklogs: {
            startTracking: {
                method: 'POST',
                url: '/v1/issues-timetracking/{issueMetaId}/start'
            },
            stopTracking: {
                method: 'PUT',
                url: '/v1/issues-timetracking/{issueMetaId}/stop'
            }
        }
    }
}