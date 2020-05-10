import { firstPage } from './story.jsx';
import { renderToStaticMarkup } from 'react-dom/server';

const start = document.getElementById('start');
const currentDialog = document.querySelectorAll('.dialog')[0]; // the dialog of the page you're on
const currentChoices = document.querySelectorAll('.choices')[0]; // the choices for the page you're on
const storyLog = document.getElementById('storyLog'); // a history of past dialog and choices made

let currentPage = firstPage;

start.addEventListener('click', () => startGame()); // pressing the start button

const startGame = () => {
  storyLog.innerHTML = '';
  currentPage = firstPage; // Reset to page 0
  start.style.display = 'none'; // hides the start button
  loadCurrentPage(); // loads first page
};

const loadCurrentPage = () => {
  currentChoices.innerHTML = '';
  currentDialog.innerHTML = renderToStaticMarkup(currentPage.dialog); // loads the current page dialog
  currentPage.choices.forEach((choice) => {
    // iterates through choices for that page
    const choiceElem = document.createElement('span'); // creates a span
    choiceElem.classList.add('choice'); // makes span class='choice'
    choiceElem.innerHTML = choice.name; // loads the current page choices
    choiceElem.addEventListener('click', () => {
      // when you select a choice
      historyPush(currentPage, choice);
      currentPage = choice.targetPage; // set current page index to the target page
      loadCurrentPage(); // load that page
    });
    currentChoices.append(choiceElem); // makes the choices appear
  });

  const playAgainButton = document.getElementById('play-again');
  if (playAgainButton) {
    playAgainButton.addEventListener('click', startGame);
  }
};

const historyPush = (page, choice) => {
  const latestPage = document.createElement('p');
  latestPage.classList.add('latestPage');
  latestPage.innerHTML = renderToStaticMarkup(page.dialog);

  const latestChoice = document.createElement('p');
  latestChoice.classList.add('latestChoice');
  latestChoice.innerHTML = choice.action;

  const historyItem = document.createElement('div');
  historyItem.classList.add('history-item');
  historyItem.append(latestPage, latestChoice);
  storyLog.prepend(historyItem);
};
