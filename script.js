const interfaceChangeHandler = ({target}) => {
    const buttonEl = target.closest('[data-action]');
    if (!buttonEl) return;

    const action = buttonEl.dataset.action;
    if (action in actions) actions[action](buttonEl);
}

const colorThemeButtonEl = document.querySelector('#color-theme-button');

const actions = {
    'switch-theme': (buttonEl) => {
        document.body.classList.toggle('dark');
        const icon = buttonEl.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    }
}

document.body.addEventListener('click', interfaceChangeHandler);
