var questions = [
  {
    question: "Question 1: What is the capital of France?",
    options: ["London", "Paris", "Rome", "Berlin"],
    answer: 1
  },
  {
    question: "Question 2: Who won the Fifa World cup Qatar'23?",
    options: ["France", "Esapanyol", "Argentina", "Portugal"],
    answer: 2
  },
  {
    question: "Question 3: Who is the best player in football?",
    options: ["Lionel Messi", "Cristiano Ronaldo", "Diego Maradona", "Pele"],
    answer: 0
  },
  {
    question: "Question 4: Who is the best football club in the world?",
    options: ["Barcelona", "Real Madrid", "Bayern Munich", "Manchester City"],
    answer: 1
  },
  {
    question: "Question 5:Who won the Uefa Champions League 2023?",
    options: ["Liverpool", "Real Madrid", "Bayern Munich", "Manchester City"],
    answer: 3

  }
];

var currentQuestion = 0;
var score = 0;

function displayQuestion() {
  var questionElement = document.getElementById("question");
  var optionsElement = document.getElementById("options");
  var question = questions[currentQuestion];

  questionElement.textContent = question.question;
  optionsElement.innerHTML = "";

  for (var i = 0; i < question.options.length; i++) {
    var option = document.createElement("label");
    option.innerHTML = '<input type="radio" name="option" value="' + i + '"> ' + question.options[i];
    optionsElement.appendChild(option);
  }
}

function checkAnswer() {
  var options = document.getElementsByName("option");
  var selectedOption = -1;

  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedOption = parseInt(options[i].value);
      break;
    }
  }

  if (selectedOption === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "Quiz Complete! Your score is " + score + " out of " + questions.length;
}

displayQuestion();

