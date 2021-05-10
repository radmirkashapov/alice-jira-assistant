exports.options = {
    routePrefix: '/swagger-ui',
    exposeRoute: true,
    swagger: {
        info: {
            title: 'Alice Jira Assistant',
            description: 'An application for interacting with Jira using the Yandex Dialog API',
            version: '1.0.0'
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
        },
        host: '',
        schemes: ['http', 'https'],
        consumes: ['application/json'],
        produces: ['application/json']
    }
}