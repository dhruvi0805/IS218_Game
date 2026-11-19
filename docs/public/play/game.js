'use strict';

const questions = [
  { sequence: '2, 4, 8, 16', answer: 32, rule: 'Double the previous number.' },
  { sequence: '3, 7, 11, 15', answer: 19, rule: 'Add four each time.' },
  { sequence: '1, 4, 9, 16', answer: 25, rule: 'These are consecutive squares. Five squared is 25.' },
  { sequence: '30, 25, 20, 15', answer: 10, rule: 'Subtract five each time.' },
  { sequence: '1, 1, 2, 3, 5', answer: 8, rule: 'Add the previous two numbers.' },
];

const elements = Object.fromEntries(
  ['step', 'challenge', 'intro', 'start', 'play', 'progress', 'sequence',
    'answer-form', 'answer', 'submit', 'feedback', 'advance', 'storage-note',
    'empty', 'history'].map(id => [id, document.getElementById(id)])
);
const storageKey = 'neuronet-attempts-v1';
const attemptLimit = 10;
const dateFormat = new Intl.DateTimeFormat(undefined, {
  dateStyle: 'medium',
  timeStyle: 'short',
});

function loadHistory() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) ?? '[]');
    if (!Array.isArray(saved)) return [];
    return saved.filter(attempt =>
      Number.isInteger(attempt?.score) && attempt.score >= 0 &&
      attempt.score <= questions.length && typeof attempt.completedAt === 'string' &&
      Number.isFinite(Date.parse(attempt.completedAt))
    ).slice(0, attemptLimit);
  } catch {
    elements['storage-note'].textContent = 'Browser storage is unavailable. Scores can be viewed during this visit.';
    return [];
  }
}

const history = loadHistory();
let questionIndex = 0;
let score = 0;
let answered = false;

function renderHistory() {
  elements.empty.hidden = history.length > 0;
  elements.history.replaceChildren(...history.map(attempt => {
    const row = document.createElement('li');
    row.textContent = `${attempt.score}/${questions.length} · ${dateFormat.format(new Date(attempt.completedAt))}`;
    return row;
  }));
}

function showQuestion() {
  answered = false;
  elements.step.textContent = `Question ${questionIndex + 1} of ${questions.length}`;
  elements.sequence.textContent = `${questions[questionIndex].sequence}, ?`;
  elements.progress.value = questionIndex;
  elements.answer.value = '';
  elements.answer.disabled = false;
  elements.submit.disabled = false;
  elements.feedback.textContent = '';
  elements.advance.hidden = true;
  elements.answer.focus();
}

function finishChallenge() {
  history.unshift({ score, completedAt: new Date().toISOString() });
  history.splice(attemptLimit);
  try {
    localStorage.setItem(storageKey, JSON.stringify(history));
  } catch {
    elements['storage-note'].textContent = 'Browser storage is unavailable. Scores can be viewed during this visit.';
  }
  renderHistory();
  elements.play.hidden = true;
  elements.step.textContent = 'Challenge complete';
  elements.challenge.textContent = `You scored ${score} out of ${questions.length}`;
  elements.intro.textContent = 'Your attempt is listed in Attempt history.';
  elements.start.textContent = 'Play again';
  elements.start.hidden = false;
  elements.challenge.focus();
}

elements.start.addEventListener('click', () => {
  questionIndex = 0;
  score = 0;
  elements.start.hidden = true;
  elements.challenge.textContent = 'Number sequences';
  elements.intro.textContent = 'Enter the next number in the sequence.';
  elements.play.hidden = false;
  showQuestion();
});

elements['answer-form'].addEventListener('submit', event => {
  event.preventDefault();
  const answer = elements.answer.valueAsNumber;
  if (answered || !Number.isInteger(answer)) return;
  answered = true;
  const question = questions[questionIndex];
  const correct = answer === question.answer;
  if (correct) score += 1;
  elements.feedback.textContent = correct
    ? `Correct. ${question.rule}`
    : `The next number is ${question.answer}. ${question.rule}`;
  elements.progress.value = questionIndex + 1;
  elements.answer.disabled = true;
  elements.submit.disabled = true;
  elements.advance.textContent = questionIndex + 1 === questions.length ? 'See score' : 'Next question';
  elements.advance.hidden = false;
  elements.feedback.focus();
});

elements.advance.addEventListener('click', () => {
  if (!answered || elements.play.hidden) return;
  questionIndex += 1;
  if (questionIndex === questions.length) finishChallenge();
  else showQuestion();
});

renderHistory();
