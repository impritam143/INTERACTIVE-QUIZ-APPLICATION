const quizData = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Kolkata", "Delhi", "Chennai"],
    answer: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 1
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Tagore", "Tolstoy", "Premchand"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-btn');
const nextBtn = document.getElementById('next-btn');

function loadQuestion() {
  const questionData = quizData[currentQuestion];
  questionEl.textContent = questionData.question;
  answerButtons.forEach((btn, index) => {
    btn.textContent = questionData.options[index];
    btn.disabled = false;
    btn.style.backgroundColor = '#eee';
  });
}

function selectAnswer(index) {
  const correct = quizData[currentQuestion].answer;
  answerButtons.forEach(btn => btn.disabled = true);
  answerButtons[correct].style.backgroundColor = '#4CAF50';
  if (index !== correct) {
    answerButtons[index].style.backgroundColor = 'tomato';
  } else {
    score++;
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quiz.innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2>
  <button onclick="location.reload()">Restart Quiz</button>`;
}

loadQuestion();
