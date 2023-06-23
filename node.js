
// Targeted Elements
let question = document.getElementById('questions');
let nextButton = document.getElementById("nextBtn");
let ansBar = document.getElementById("ans");
let scoreElement = document.querySelector('.point');
let startQuiz = document.querySelector(".startQuiz");
let display = document.querySelector(".quesNans-bar");
let navBar = document.querySelector(".nav-bar");
console.log(startQuiz);


// Declared variables


let correctAns;
let counter = 1;
let score = 0;
let questionIn = false;




// Functions

    const quizQuestions = [

        {
           
             quetion: "JavaScript is a _________ programming language",
             multiple: [ "Object-oriented","Functional", "Procedural","All of the above"],
             correctAns: 3
        },

        {
             question: "Which of the following is not a valid JavaScript data type?",
             Options:["String","Number","Boolean","Character"],
             correctAns: 3
        },

        {
          question: "Which operator is used to concatenate strings in JavaScript?",
          Options:[ "+","-","*",  "/",],
          correctAns:0

        },

        {

                question: "Which command is used to create a new directory in Linux?",
                Options:["cd", "mkdir", "rm", "cp"],
                correctAns: 1
         },

         {

            question: "Which command is used to stage changes in Git?",
            Options:[ "git add", "git commit", "git push", "git pull"],
            correctAns: 3

         },

         {
            question: "In Linux, which command is used to display the contents of a file?",
            Options: [ "cat","echo","grep","cut"],
            correctAns: 0
         },
 
         // general knowledge

         {

            question: "Which country is famous for the Great Wall?",
            Options: [ "Liberia", "Brazil", "China","Italy"],
            correctAns: 2
        },

        {
            question: "Which country is known as the Land of the Midnight Sun?",
            Options: [" Norway", "Spain", "Finland", "Nigeria"],
            correctAns: 0
        },
     ];

    function checkQuestion(word, target) {
        word = word.trim();
        correctAns = correctAns.trim();
        console.log(correctAns);
        if(word === correctAns)
        {
            score = score + 10;
            // console.log('correct');
            target.classList.add('correct');

            displayScore(score);
            questionIn = true;
        }
        else {
            // console.log('wrong')
            target.classList.add('wrong');
            questionIn = true;
        }
        
    }

     function updateQuestion(){
        questionIn= false;
        let correctIndex = quizQuestions[counter].correctAns;
        ansBar.innerHTML = "";
        let length = quizQuestions[counter].Options.length;
        for (let i = 0; i < length; i++){

        let answer = document.createElement("p");
        answer.setAttribute("class", "choice");
        answer.innerHTML = ` ${quizQuestions[counter].Options[i]}`
        ansBar.appendChild(answer);
        correctAns = quizQuestions[counter].Options[correctIndex];
        } 
        console.log(length);
        console.log(quizQuestions[counter]);
        question.innerHTML = `${quizQuestions[counter].question}`
        counter++;
    
     }
        

    // updateQuestion();




        // time
      function Countdown(mins)
      {

      let timeElement = document.querySelector('.timer');
      let secs = mins*60;
      updateTimeDisplay(secs);

     let Countdown = setInterval(function()

            {

        secs--;
        if(secs === 0){

            clearInterval(Countdown);
        }

        else if( secs < 0){

            clearInterval(Countdown);

            return;
        }

        updateTimeDisplay(secs);

    }, 1000);     

    
        function updateTimeDisplay(timeInSeconds){
        let remainingMins = Math.floor(timeInSeconds / 60);
        let remainingSecs = timeInSeconds % 60;
        timeElement.textContent = remainingMins + "m " + remainingSecs + "s";

    }
    }
    Countdown(5); 

    // score

    function displayScore(score) {
        scoreElement.textContent = score;

      }

      displayScore(score);


      // Event Handlers

     nextButton.addEventListener('click', ()=>{
        if( questionIn === false ) return;
        // nextButton.setAttribute('disabled');
        updateQuestion();
     });
     ansBar.addEventListener('click', (event)=>{
        if ( questionIn === true ) return;
        if(!event.target.classList.contains('choice')) return;

        let word = event.target.textContent;
        let element = event.target;
        checkQuestion(word, element);

     })
     startQuiz.addEventListener('click', (event)=>{
        updateQuestion();
        event.target.style.display ="none";
        display.style.display = "flex";
        navBar.style.display = "flex";
     });

