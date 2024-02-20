//Variables
const quetion = document.querySelector('#question');
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

}

init();