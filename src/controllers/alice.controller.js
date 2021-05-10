const boom = require('boom')
const replies = require('./../alice/replies')

exports.aliceEndpoint = async(req, reply) => {
    try {
        console.log(req.body)
        const { request, session, state } = req.body;
        const sessionState = state && state.session || {};
        const response = session.new
            ? replies.welcome()
            : await checkAnswer(sessionState, request.command);

        return {
            response,
            session_state: sessionState,
            version: '1.0'
        };
    } catch (err) {
        throw boom.boomify(err)
    }
}

checkAnswer = async(sessionState, command) => {
    if (/мои задачи/i.test(command)) {
        return await replies.myIssues();
    }

    return replies.welcome();
}