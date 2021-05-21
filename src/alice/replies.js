const issuesApiService = require('./../hybrid/api/issue.service')
const worklogApiService = require('./../hybrid/api/worklog.service')
const issueController = require('./../controllers/issue.controller')
const boom = require('boom')

/**
 * Приветственное сообщение при входе в навык.
 */
exports.welcome = () => {
    const greeting = getRandomElement(['Привет пирожочек', 'Здравствуй']);
    return {
        text: `${greeting}. Меня зовут Рудольф. Я твой личный ассистент Jira. Чтобы показать задачи на сегодня, скажи 'мои задачи'`,
        tts: `${greeting}. Я твой личный ассистент Jira. Чтобы показать задачи на сегодня, скажи 'мои задачи'`,
        buttons: [
            {title: 'Да', hide: true},
        ],
        end_session: false
    };
};

exports.noSuchCommand = () => {
    const noSuchCommand = getRandomElement(
        ['Такой команды нет. Однако, если вы хотите мы можем что-нибудь такое забабахать',
            'Команда не найдена. Если вы считаете, что она вам необходима, обратитесь в канал hybrid-sköl в корпоративном slack'
        ]
    );
    return {
        text: noSuchCommand,
        tts: noSuchCommand,
        buttons: [
            {title: 'Хорошо. Спасибо', hide: true},
        ],
        end_session: false
    };

}

exports.myIssues = async () => {
    return await getAllIssues({page: 0, size:3}).then((issues) => {
        const issuesDescription = issues.join('.')
        return {
                text: `Ваши задачи на сегодня: ${issuesDescription}`,
                tts: `<speaker audio="alice-sounds-game-win-1.opus">Ваши задачи на сегодня: ${issuesDescription}`,
                buttons: [
                    {title: 'Спасибо', hide: true},
                ],
                end_session: false
            }
        }
    )
}

exports.createWorklog = async ({projectName, issueKey, comment, timeSpentSeconds}) => {

    let issue = {}
    const issueE = await getIssueByProjectAndKey({projectName, issueKey}).then((t) => {
        issue = t
    });
    const issueId = issue.id;
    const tdvvdv = 0;
    await worklogApiService.startTracking({issueId: issueId})
    const time  = timeSpentSeconds < 60 ? 60 : timeSpentSeconds
    await worklogApiService.stopTracking({issueId: issueId, comment: comment, timeSpentSeconds: time})

    return {
        text: `Занес запись ${comment.join(' ')} ${time / 60.0} минут по задаче ${issueKey} проекта ${projectName}`,
        tts: `Занес запись ${comment.join(' ')} ${time / 60.0} минут по задаче ${issueKey} проекта ${projectName}`,
        buttons: [
            {title: 'Спасибо', hide: true},
        ],
        end_session: false
    }
}

function getRandomElement(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

getAllIssues = async ({page, size, filter}) => {
    try {
        let issues = await issuesApiService.getAll({page, size, filter})
        issues.tasks.forEach((t)=> {
            issueController.upsertIssue({id: undefined, issue: {
                    id: t.id,
                    keyNumber: t.task.key.replace(`${t.project.key}-`,''),
                    name: t.task.descriptionShort,
                    projectKey: t.project.key,
                    projectName: t.project.name
            }})
        })

        return await Promise.all(issues.tasks.map((task) => {
            const priority = `Приоритет: ${task.task.priority}`
            return `Проект: ${task.project.name}.Задача: ${task.task.key}. ${task.task.name}. ${priority}`
        }))
    } catch (err) {
        throw boom.boomify(err)
    }
}

getIssueByProjectAndKey = async ({projectName, issueKey}) => {
    try {
        const issue = await issueController.getByProjectAndKey({projectName, taskKeyNumber: issueKey})
        return issue
    } catch (err) {
        throw boom.boomify(err)
    }
}