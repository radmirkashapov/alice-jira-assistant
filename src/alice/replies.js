const issuesService = require('./../hybrid/api/issue.service')

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

exports.myIssues = () => {
    getAllIssues({}).then((issues) => {
            return {
                text: `Ваши задачи на сегодня: ${issues}`,
                tts: `Ваши задачи на сегодня: ${issues}`,
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
    let issues = await issuesService.getAll({page, size, filter})

    let text = await Promise.all(issues.tasks.map((task) => {
        const description = task.task.descriptionShort.replace(/<[^>]+>/g, '')
        return `Проект: ${task.project.name}.Задача: ${task.task.key}. ${task.task.name}. ${description}`
    })).then((value) => {
        return value.join('.')
    })
}