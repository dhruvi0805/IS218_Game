import { displayNameKey, xpKey } from './session.js';



const questions = [
  { sequence: '2, 4, 8, 16', answer: 32, rule: 'Double the previous number.' },
  { sequence: '3, 7, 11, 15', answer: 19, rule: 'Add four each time.' },
  { sequence: '1, 4, 9, 16', answer: 25, rule: 'These are consecutive squares. Five squared is 25.' },
  { sequence: '30, 25, 20, 15', answer: 10, rule: 'Subtract five each time.' },
  { sequence: '1, 1, 2, 3, 5', answer: 8, rule: 'Add the previous two numbers.' },
];

const xpPerAnswer = 50;
const elements = Object.fromEntries(
  ['step', 'challenge', 'intro', 'play', 'progress', 'sequence',
    'answer-form', 'answer', 'submit', 'feedback', 'advance', 'return', 'training']
    .map(id => [id, document.getElementById(id)])
);

let questionIndex = 0;
let score = 0;
let answered = false;



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
  const reward = score * xpPerAnswer;
  const xp = Number(sessionStorage.getItem(xpKey)) || 0;
  sessionStorage.setItem(xpKey, String(xp + reward));
  elements.play.hidden = true;
  elements.step.textContent = 'Training complete';
  elements.challenge.textContent = 'You scored ' + score + ' out of ' + questions.length;
  elements.intro.textContent = '+' + reward + ' XP earned';
  elements.return.hidden = false;
  elements.challenge.focus();
}

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

if (sessionStorage.getItem(displayNameKey)) {
  elements.training.hidden = false;
  showQuestion();
} else {
  location.replace('./');
}
