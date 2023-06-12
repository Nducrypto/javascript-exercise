const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choices = document.getElementById("choices");
const scoreElement = document.getElementById("score");
const questionNumber = document.getElementById("question-number");

const quizData = [
  {
    question:
      "Which of the following languages is used for adding interactivity to web pages?",
    choices: ["Html", "Javascript", "Python", "Css"],
    correctAnswer: 1,
  },
  {
    question:
      "Which of the following is used to define an unordered list in HTML?",
    choices: ["ul", "li", "li", "ol"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is NOT a CSS positioning property?",
    choices: ["absolute", "fixed", "relative", "inline"],
    correctAnswer: 3,
  },
];

let currentQuestion = 0;

let score = 0;

const displayQuestion = () => {
  const currentQuizData = quizData[currentQuestion];
  question.innerText = currentQuizData.question;

  scoreElement.innerText = `Score: ${score}`;
  questionNumber.innerText = `Question ${currentQuestion + 1}`;
  choices.innerHTML = "";
  currentQuizData.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.innerText = choice;
    button.classList.add("choice");
    button.addEventListener("click", checkAnswer);
    choices.appendChild(button);
  });
};

const checkAnswer = (event) => {
  const selectedButton = event.target;
  const selectedAnswer = selectedButton.innerText;
  const currentQuizData = quizData[currentQuestion];

  if (
    selectedAnswer === currentQuizData.choices[currentQuizData.correctAnswer]
  ) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    quiz.innerHTML = `<h3>Congratulations!</h3>
                      <p>Your score is ${score} out of ${quizData.length}.</p>`;
  }

  scoreElement.innerText = `Score: ${score}`;
};

displayQuestion();
