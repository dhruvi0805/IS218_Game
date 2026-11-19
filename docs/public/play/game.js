'use strict';

const questions = [
  { sequence: '2, 4, 8, 16', answer: 32, rule: 'Double the previous number.' },
  { sequence: '3, 7, 11, 15', answer: 19, rule: 'Add four each time.' },
  { sequence: '1, 4, 9, 16', answer: 25, rule: 'These are consecutive squares. Five squared is 25.' },
  { sequence: '30, 25, 20, 15', answer: 10, rule: 'Subtract five each time.' },
  { sequence: '1, 1, 2, 3, 5', answer: 8, rule: 'Add the previous two numbers.' },
];

const skills = [
  ['Focus', 'Attention and concentration', '#b88afd'],
  ['Memory', 'Recall and sequences', '#7bb4ff'],
  ['Problem Solving', 'Logic and puzzles', '#92ddff'],
  ['Numerical Reasoning', 'Numbers and estimation', '#c4a1ff'],
  ['Language', 'Words and associations', '#f4a8f6'],
  ['Pattern Recognition', 'Find the rule behind number sequences', '#c08fff'],
  ['Creativity', 'Generate and explore ideas', '#f6acbd'],
  ['Spatial Reasoning', 'Rotate and compare shapes', '#86e5d5'],
  ['Social / Emotional Skills', 'Explore perspectives', '#f7bc9b'],
  ['Reaction Speed', 'Respond to visual cues', '#aee8a1'],
];

const availableSkill = 'Pattern Recognition';
const xpPerAnswer = 50;
const fullGlowXp = 1000;
const elements = Object.fromEntries(
  ['step', 'challenge', 'intro', 'start', 'play', 'progress', 'sequence',
    'answer-form', 'answer', 'submit', 'feedback', 'advance', 'empty',
    'history', 'return', 'training', 'welcome', 'lab', 'player-form',
    'player-name', 'display-name', 'greeting', 'brain-map', 'lab-title',
    'glow', 'glow-label', 'skill-title', 'skill-detail', 'skill-xp']
    .map(id => [id, document.getElementById(id)])
);

const session = { playerName: '', displayName: '', xp: 0, attempts: [] };
let selection;
let questionIndex = 0;
let score = 0;
let answered = false;

const regionButtons = skills.map(skill => {
  const [name, , color] = skill;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'region';
  button.style.setProperty('--region', color);
  button.textContent = name;
  button.setAttribute('aria-pressed', 'false');
  button.addEventListener('click', () => selectSkill(skill));
  elements['brain-map'].append(button);
  return button;
});

function selectSkill(skill) {
  selection = skill;
  const [name, detail] = skill;
  const playable = name === availableSkill;
  regionButtons.forEach((button, index) => {
    button.setAttribute('aria-pressed', String(skills[index] === skill));
  });
  elements['skill-title'].textContent = name;
  elements['skill-detail'].textContent = detail + (playable ? '.' : '. Training is planned.');
  elements['skill-xp'].textContent = (playable ? session.xp : 0) + ' XP';
  elements.start.hidden = !playable;
}

function showLab() {
  elements.training.hidden = true;
  elements.welcome.hidden = true;
  elements.lab.hidden = false;
  elements.greeting.textContent = 'Welcome, ' + session.displayName + '.';
  const glow = Math.min(100, Math.floor(session.xp * 100 / fullGlowXp));
  elements.glow.value = glow;
  elements['glow-label'].textContent = glow + '%';
  elements['brain-map'].style.setProperty('--glow', glow / 100);
  elements.empty.hidden = session.attempts.length > 0;
  elements.history.replaceChildren(...session.attempts.map(attempt => {
    const row = document.createElement('li');
    row.textContent = attempt.score + '/' + questions.length + ' · +' + attempt.reward + ' XP';
    return row;
  }));
  if (selection) selectSkill(selection);
  elements['lab-title'].focus();
}

elements['player-form'].addEventListener('submit', event => {
  event.preventDefault();
  for (const [property, id] of [['playerName', 'player-name'], ['displayName', 'display-name']]) {
    const field = elements[id];
    const value = field.value.trim();
    if (!value) {
      field.value = '';
      field.reportValidity();
      return;
    }
    session[property] = value;
  }
  showLab();
});

elements.return.addEventListener('click', showLab);

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
  session.xp += reward;
  session.attempts.unshift({ score, reward });
  elements.play.hidden = true;
  elements.step.textContent = 'Training complete';
  elements.challenge.textContent = 'You scored ' + score + ' out of ' + questions.length;
  elements.intro.textContent = '+' + reward + ' XP earned';
  elements.return.hidden = false;
  elements.challenge.focus();
}

elements.start.addEventListener('click', () => {
  if (selection?.[0] !== availableSkill) return;
  questionIndex = 0;
  score = 0;
  elements.lab.hidden = true;
  elements.training.hidden = false;
  elements.return.hidden = true;
  elements.challenge.textContent = availableSkill;
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
