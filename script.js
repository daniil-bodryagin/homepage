const interfaceChangeHandler = ({ target }) => {
  const buttonEl = target.closest("[data-action]");
  if (!buttonEl) return;

  const action = buttonEl.dataset.action;
  if (action in actionProps) {
    const { elementToChange, classToChange, firstIcon, secondIcon } =
      actionProps[action];
    elementToChange.classList.toggle(classToChange);
    const icon = buttonEl.querySelector("i");
    icon.classList.toggle(firstIcon);
    icon.classList.toggle(secondIcon);
  }
};

const colorThemeButtonEl = document.querySelector("#color-theme-button");
const hideResumeButtonEl = document.querySelector("#hide-resume-button");

const actionProps = {
  "switch-theme": {
    elementToChange: document.body,
    classToChange: "dark",
    firstIcon: "fa-moon",
    secondIcon: "fa-sun",
  },
  "hide-resume": {
    elementToChange: document.querySelector("#resume"),
    classToChange: "visible",
    firstIcon: "fa-eye",
    secondIcon: "fa-eye-slash",
  },
};

document.body.addEventListener("click", interfaceChangeHandler);
