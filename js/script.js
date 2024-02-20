//Variables
const question = document.querySelector('#question');
const answersBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');

const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;

//Questions
const questions = [
  {
    "question": "What is the closest planet to the Sun?",
    "answers": [
      {
        "answer": "Venus",
        "correct": false
      },
      {
        "answer": "Mars",
        "correct": false
      },
      {
        "answer": "Earth",
        "correct": false
      },
      {
        "answer": "Mercury",
        "correct": true
      },
    ]
  },
  {
    "question": "Who was the first president of the United States?",
    "answers": [
      {
        "answer": "Thomas Jefferson",
        "correct": false
      },
      {
        "answer": "George Washington",
        "correct": true
      },
      {
        "answer": "Abraham Lincoln",
        "correct": false
      },
      {
        "answer": "John F. Kennedy",
        "correct": false
      },
    ]
  },
  {
    "question": "What is the largest bone in the human body?",
    "answers": [
      {
        "answer": "Femur",
        "correct": true
      },
      {
        "answer": "Tibia",
        "correct": false
      },
      {
        "answer": "Fibula",
        "correct": false
      },
      {
        "answer": "Radius",
        "correct": false
      },
    ]
  },
  {
    "question": "Who wrote 'Romeo and Juliet'?",
    "answers": [
      {
        "answer": "Charles Dickens",
        "correct": false
      },
      {
        "answer": "Jane Austen",
        "correct": false
      },
      {
        "answer": "William Shakespeare",
        "correct": true
      },
      {
        "answer": "Emily Brontë",
        "correct": false
      },
    ]
  },
  {
    "question": "What is the most abundant chemical element in the Earth's crust?",
    "answers": [
      {
        "answer": "Oxygen",
        "correct": false
      },
      {
        "answer": "Carbon",
        "correct": false
      },
      {
        "answer": "Silicon",
        "correct": true
      },
      {
        "answer": "Iron",
        "correct": false
      },
    ]
  },
];

//Start the quizz
function init() {
    createQuestion(0);
}

//Generate the question
function createQuestion(i) {
    //Clears the alternatives from the previous question
    const oldButtons = answersBox.querySelectorAll('button');
    oldButtons.forEach(function(btn) {
        btn.remove();
    });

    //Change the question
    const questionText = question.querySelector('#question-text');
    const questionNumber = question.querySelector('#question-number');

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    questions[i].answers.forEach(function(answer, i) {
        //Create the quizz buttons template
        const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

        const letterBtn = answerTemplate.querySelector('.btn-letter');
        const answerText = answerTemplate.querySelector('.question-answer');

        letterBtn.textContent = letters[i];
        answerText.textContent = answer['answer'];

        answerTemplate.setAttribute("correct-answer", answer['correct']);

        //Remove hide and template class
        answerTemplate.classList.remove('hide');
        answerTemplate.classList.remove('answer-template');

        //Display the alternatives
        answersBox.appendChild(answerTemplate);

        //Add mouse click event
        answerTemplate.addEventListener('click', function() {
            checkAnswer(this);
        });
    });

    //Increase the question number
    actualQuestion++;
}

//Check user answer
function checkAnswer(btn) {
    const buttons = answersBox.querySelectorAll('button');

    buttons.forEach(function(button) {
        if(button.getAttribute('correct-answer') == "true") {
            button.classList.add("correct-answer");

            //Check if it's correct
            if(btn == button) {
                //Increase the points
                points++;
            }
        } else {
            button.classList.add("wrong-answer");
        }
    });

    nextQuestion();
}

//Display the next question
function nextQuestion() {
    setTimeout(function() {
        //Check if it's not the last question
        if(actualQuestion >= questions.length) {
            //Display final score
            showFinalScore();
            return;
        }

        createQuestion(actualQuestion);

    }, 2000);
}

//Display final score
function showFinalScore() {
    hideOrShowQuizz();

    //Calculate score
    const score = ((points / questions.length) * 100).toFixed(2);

    const displayScore = document.querySelector('#display-score span');
    displayScore.textContent = score.toString();

    //Display total correct answers
    const correctAnswers = document.querySelector('#correct-answer');
    correctAnswers.textContent = points;

    //Display total questions
    const totalQuestions = document.querySelector('#questions-qty');
    totalQuestions.textContent = questions.length;
}

//Hide or show score
function hideOrShowQuizz() {
    quizzContainer.classList.toggle('hide');
    scoreContainer.classList.toggle('hide');
}

//Restart quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function() {
    actualQuestion = 0;
    points = 0;
    hideOrShowQuizz();
    init();
});

init();