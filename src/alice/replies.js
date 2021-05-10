/**
 * Приветственное сообщение при входе в навык.
 */
exports.welcome = () => {
    const greeting = getRandomElement(['Привет', 'Здравствуйте']);
    return {
        text: `${greeting}. Я ваш личный ассистент Jira. Затрекаем ваше время?`,
        tts: `<speaker audio="alice-music-harp-1.opus">${greeting}. Я ваш личный ассистент Jira. Затрекаем ваше время?`,
        buttons: [
            { title: 'Начинаем', hide: true },
        ],
        end_session: false
    };
};

function getRandomElement(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}