// Quiz Questions
const quizQuestions = [
  {
    question: "Which of these is a programming Language?",
    options: ["Java", "HTML", "C++", "Front-end"],
    answer: "HTML"
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "Java", "HTML", "C++"],
    answer: "HTML"
  },
  {
    question: "Which of the following languages do we use to style an HTML document?",
    options: ["CSS", "Java++", "C++", "Java"],
    answer: "CSS"
  },
  {
    question: "Choose the correct HTML element with the largest heading",
    options: ["<h1>", "<heading>", "<h4>", "<head>"],
    answer: "<h1>"
  },
  {
    question: "How can you make a numbered list?",
    options: ["<ul>", "<dl>", "<ol>", "<list>"],
    answer: "<ol>"
  }
];

let currentIndex = 0;
let score = 0;

// Display current question and options
function displayQuestion() {
  const questionObj = quizQuestions[currentIndex];
  document.getElementById("question").innerText = questionObj.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  questionObj.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.classList.add("option");
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("next-btn").style.display = "none";
}

// Check the selected answer and highlight correct/incorrect
function checkAnswer(selected) {
  const correct = quizQuestions[currentIndex].answer;
  const buttons = document.querySelectorAll(".option");

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correct) {
      btn.style.backgroundColor = "green";
    } else if (btn.innerText === selected) {
      btn.style.backgroundColor = "red";
    }
  });

  if (selected === correct) {
    score++;
  }

  document.getElementById("next-btn").style.display = "inline-block";
}

// Go to the next question or finish the quiz
function nextQuestion() {
  currentIndex++;
  if (currentIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML = `
      <h2>Quiz Complete!</h2>
      <p id="score">Your score is ${score} out of ${quizQuestions.length}.</p>
    `;
  }
}

// Start the quiz
window.onload = displayQuestion;
