const boom = require('boom')
const replies = require('./../alice/replies')
const micro = require('micro')

exports.aliceEndpoint = async(req, reply) => {
    try {
        console.log(req)
        const { request, session, state } = await micro.json(req.body);
        const sessionState = state && state.session || {};
        const response = session.new
            ? replies.welcome()
            : checkAnswer(sessionState, request.command);

        return {
            response,
            session_state: sessionState,
            version: '1.0'
        };
    } catch (err) {
        throw boom.boomify(err)
    }
}

function checkAnswer(sessionState, command) {
    if (/мои задачи/i.test(command)) {
        return replies.myIssues();
    }

    return replies.welcome();
}