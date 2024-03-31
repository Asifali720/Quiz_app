

const answerEls = document.querySelectorAll('.answer')
const quiz = document.getElementById('quiz')

const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

 const data = [
    {
       question: "who was founder of Pakistan",
       a: "Allama Iqbal",
       b: "Quaid e Azam",
       c: "Chaudry Rehmat Ali",
       d: "Tipu Sultan",
       correct: "b"
    },
    {
        question: "who seen dream for Pakistan",
        a: "Tipu Sultan",
        b: "Quaid e Azam",
        c: "Allama Iqbal",
        d: "Chaudry Rahmat Ali",
        correct: "c"
     },
     {
        question: "which month and year of pass revolution of Pakistan",
        a: "17 march, 1999",
        b: "29 march, 1920",
        c: "23 march, 1990",
        d: "23 march, 1940",
        correct: "d"
     },
     {
        question: "which year Pakistan become an independent state",
        a: "1947",
        b: "1948",
        c: "1940",
        d: "1945",
        correct: "a"
     }, {
        question: "what is pakistanis national language",
        a: "punjabi",
        b: "hindi",
        c: "urdu",
        d: "persion",
        correct: "c"
     },
 ]


 let currentQuiz = 0
 let score = 0

 loadQuiz()
 function loadQuiz() {
   const currentQuizData = data[currentQuiz]
   deSelect()

   questionEl.innerText = currentQuizData.question
   
   a_text.innerText = currentQuizData.a
   b_text.innerText = currentQuizData.b
   c_text.innerText = currentQuizData.c
   d_text.innerText = currentQuizData.d

 }



 function getSelected(){
   let answer = undefined;
   answerEls.forEach((answerEl)=>{
      if(answerEl.checked){
         answer = answerEl.id
      }
   })
   return answer
 }
 function deSelect(){
   answerEls.forEach((answerEl)=>{
      answerEl.checked = false
   })
 }

 function refreshPage(){
   window.location.reload()
 }

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', ()=>{

   const answerQuiz = getSelected()
   if(answerQuiz){
      if(answerQuiz == data[currentQuiz].correct){
           score ++;
      }
      currentQuiz++
      if(currentQuiz < data.length){
         loadQuiz()
      } else{
         quiz.innerHTML = `<h2>Your Correct answer is ${score}/${data.length}</h2>
         <button onClick="refreshPage()">Reload</button>`
      }
   }
  
});
