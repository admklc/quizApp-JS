let quizData = [
    {
        question: 'What does HTML stand for?',
        choise1: 'Hyperlinks and Text Markup Language',
        choise2:'Hyper Text Markup Language',
        choise3: 'Hyper Text Making Language',
        choise4: 'Hyper Text Mark Language',
        answer: 1
    },
    {
        question: 'What does CSS stand for?',
        choise1: 'Colorful StyleSheet',
        choise2:'Creative Style Sheet',
        choise3: 'Cascading Style Sheett',
        choise4: 'Computer Style Sheet',
        answer: 2
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        choise1: '<script>',
        choise2:'<style>',
        choise3: '<html>',
        choise4: '<svg>',
        answer: 1
    },
    {
        question: "Which is the correct CSS syntax?",
        choise1: 'body{color:black}',
        choise2:'{body{color:black}',
        choise3: 'body={color:black}',
        choise4: 'body:color{black}',
        answer: 0
    },
    {
        question: "How do you insert a comment in a CSS file?",
        choise1: '/*This is Comment*/',
        choise2:'//This Is Comment',
        choise3: '<!--- This Is Comment --->',
        choise4: '//This Is Comment//',
        answer: 1
    },
    {
        question: "How do you insert a comment in a HTML file?",
        choise1: '/*This is Comment*/',
        choise2:'//This Is Comment',
        choise3: '<!--- This Is Comment --->',
        choise4: '//This Is Comment//',
        answer: 2
    },
    {
        question: "Which property is used to change the background color?",
        choise1: 'backgroundColor',
        choise2:'BgColor',
        choise3: 'Color-Background',
        choise4: 'background',
        answer: 3
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choise1: 'if i==5',
        choise2: 'if(i==5)',
        choise3: 'if(i==5)then',
        choise4: 'if i==5 then',
        answer: 2
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choise1: '<js></js>',
        choise2:'<javascript></javascript>',
        choise3: '<script></script>',
        choise4: '<scripting>',
        answer: 2
    },
    {
        question: "How does a WHILE loop start?",
        choise1: 'while(i <= 0)',
        choise2: 'while(i <= 0 i++)',
        choise3: 'while i <= 0',
        choise4: 'while (i++ i <= 0)',
        answer: 0
    },

]
let questionEl = document.getElementById("question");
let quiz = document.getElementById("quiz");
let a_text = document.getElementById("option1");
let b_text = document.getElementById("option2");
let c_text = document.getElementById("option3");
let d_text = document.getElementById("option4");
let submitBtn = document.getElementById("submit");
let reply = document.querySelectorAll(".reply");
let countdownEl = document.getElementById("countdown");
let questionNo = document.querySelector(".questionNo");
let points = document.querySelector(".points");
let result = document.querySelector(".result");
let quizStart = document.querySelector(".quiz-start")
let start = document.getElementById("start");
let refresh = document.getElementById("refresh")
let shake = document.querySelectorAll(".shake");

let index = 0;
let score = 0;
let timing = 0;
let interval = 0;

start.addEventListener("click", () => {
    quizStart.style.display = "none";
    quiz.style.display = "block";
    loadQuiz();
    interval = setInterval(countDown,1000);
})

let countDown = () => {  
    if(timing === 0){
        reply[quizData[index].answer].classList.add("correct");
        shake[0].classList.add("shakee"); 
        shake[1].classList.add("shakee");
        for(i=0; i <= 3; i++){
            reply[i].classList.add("disabled");                  
        }       
        clearInterval(interval);        
    }
    else{
        timing--;
        countdownEl.innerText = timing;       
    }
}

function loadQuiz(){   
    questionNo.innerText = index + 1 + ". ";
    questionEl.innerText = quizData[index].question;
    a_text.innerText = quizData[index].choise1;
    b_text.innerText = quizData[index].choise2;
    c_text.innerText = quizData[index].choise3;
    d_text.innerText = quizData[index].choise4;
    shake[0].classList.remove("shakee"); 
    shake[1].classList.remove("shakee");
    timing = 21;
}
loadQuiz();

reply.forEach((choise,outcome) => {
    choise.addEventListener("click", () => {
        if(outcome === quizData[index].answer){
            choise.classList.add("correct");
            score++;
        }
        else{
            choise.classList.add("wrong");
            reply[quizData[index].answer].classList.add("correct");
            score += 0;
            shake[0].classList.add("shakee"); 
            shake[1].classList.add("shakee");          
        }
        clearInterval(interval);
        for(i=0; i<=3; i++){
            reply[i].classList.add("disabled");           
        }
    })
})

submitBtn.addEventListener("click", (e) => {
    if(index !== quizData.length -1){
        index++;
        reply.forEach(removeActive => {
            removeActive.classList.remove("correct");
            removeActive.classList.remove("wrong");
        })
        loadQuiz();       
        clearInterval(interval);
        interval = setInterval(countDown,1000);
    }
    else{
        index = 0;
        clearInterval(interval);
        quiz.style.display = "none";
        points.innerHTML = `Your score: ${score}/${quizData.length}`;
        result.style.display = "block";
    }
    for(i=0; i<=3; i++){
        reply[i].classList.remove("disabled");
        document.body.style.background = "linear-gradient(90deg, #203A43, #2C5364);"
    }
    e.preventDefault();
})

refresh.addEventListener("click", () => {
    window.location.reload();
 })












