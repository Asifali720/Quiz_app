const quizData = [
    {
        question: 'what is the best language for front end in web development?',
        a: 'Python',
        b: 'Ruby',
        c: 'Java script',
        d: 'Java',
        correct: 'c'
    }, {
        question: 'what is stand for HTML?',
        a: 'hello typer mail limit',
        b: 'harms text markup language',
        c: 'developer language',
        d: 'hyper text markup language',
        correct: 'd'
    }, {
        question: 'CSS use in?',
        a: 'backend',
        b: 'frontend',
        c: 'none of them',
        d: 'may be in server',
        correct: 'b'
    }, {
        question: 'Are java and java script is same?',
        a: 'never',
        b: 'yes its but only diffrence name',
        c: 'exactly same',
        d: 'its not a language',
        correct: 'a'
    }, {
        question: 'can you change div class with your own thinks or not?',
        a: 'no because div have specific class',
        b: 'may be',
        c: 'yes you can change class with your own words like div.container',
        d: 'yes you change it with name by section.container',
        correct: 'c'
    }
];

const answerEls = document.querySelectorAll('.answer')
const quiz = document.getElementById('quiz')

const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

    // currentQuiz++;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function handleSubmit() {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
    }
    currentQuiz++;
    // loadQuiz();
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<h2>You answer correctly at ${score}/${quizData.length} questions.</h2><button onClick="location.reload()">Reload</button>`
    }
}

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', handleSubmit);
