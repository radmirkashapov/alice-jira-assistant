const issuesService = require('./../hybrid/api/issue.service')
const boom = require('boom')

/**
 * Приветственное сообщение при входе в навык.
 */
exports.welcome = () => {
    const greeting = getRandomElement(['Привет пирожочек', 'Здравствуй']);
    return {
        text: `${greeting}. Меня зовут Рудольф. Я твой личный ассистент Jira. Показать ваши задачи?`,
        tts: `${greeting}. Я твой личный ассистент Jira. Рассказать о твоих задачах на сегодня?`,
        buttons: [
            {title: 'Да', hide: true},
        ],
        end_session: false
    };
};

exports.myIssues = async () => {
    return await getAllIssues({page: 0, size:3, filter:'SPRINT'}).then((issues) => {
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

function getRandomElement(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

getAllIssues = async ({page, size, filter}) => {
    try {
        let issues = await issuesService.getAll({page, size, filter})

        return await Promise.all(issues.tasks.map((task) => {
            const description = task.task.descriptionShort.replace(/<[^>]+>/g, '')
            return `Проект: ${task.project.name}.Задача: ${task.task.key}. ${task.task.name}. ${description}`
        }))
    } catch (err) {
        throw boom.boomify(err)
    }
}