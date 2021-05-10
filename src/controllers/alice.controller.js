const boom = require('boom')

exports.aliceEndpoint = async(req, reply) => {
    try {
        if (req.method !== 'POST') {
            return 'Server is running';
        }

        return {
            response: {
                text: 'Привет',
                end_session: false
            },
            version: '1.0'
        };
    } catch (err) {
        throw boom.boomify(err)
    }
}