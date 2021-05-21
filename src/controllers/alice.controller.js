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

    let commandSplitted = command.split(' ');
    if (commandSplitted[1].toLowerCase() === "задачу") {
        const issueKey = commandSplitted[2];
        if (commandSplitted[3].toLowerCase() === "проекта") {
            let project = "";
            switch (commandSplitted[4].toLowerCase()) {
                case "гибрид":
                    project = "HYBZ"
                    break;
                case "яндекс":
                    project = "YTSS"
                    break;
                default: "тикер"
                    project = "TEEQ"
                    break;
            }
            if (commandSplitted[5] === "запиши") {
                const minutes = commandSplitted[6];
                const comment = commandSplitted.slice(8);
                return await replies.createWorklog({projectName: project, issueKey, comment: comment, timeSpentSeconds: minutes * 60})
            }
        }
    }

    return replies.noSuchCommand();
}