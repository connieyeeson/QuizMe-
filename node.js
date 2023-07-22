 
// Targeted Elements
const nextButton = document.getElementById("nextBtn");
const exitsButton = document.getElementById("exitBtn")
const mainDisplay = document.querySelector('.container');
const startQuiz = document.querySelector(".startQuiz");
const display = document.querySelector(".quesNans-bar");
const navBar = document.querySelector(".nav-bar");
const showQuestions = document.querySelectorAll(".options")
let quizType;



// Declared variables


let correctAns;
let counter = 0;
let score = 0;
let questionIn = false;
let currentQuestionIndex = 0;
let questionsLength = 10;

    const linuxQuestions = [

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

         {

            question: "Who created the Linux kernel?",
            Options: ["Bill Gates", "Elon Musks", "Linux Torvald", "Kpetermeni Siakor"],
            correctAns: 2

        },
       {
            question: "Which Linux distribution is known for its use in servers and is often used in enterprise environments?",
            Options: ["Ubuntu", "Fedora", "CentOS", "Dedian"],
            correctAns:2

       },

       {

            question: "What is the default shell in most Linux distributions?",
            Options: [ "Bash", "PowerShell", "Zsh", "C shell"],
            correctAns: 0

       },

       {

            question: "Which command is used to list files and directories in Linux?",
            Options: [ "ls", "mv", "cd", "rm"],
            correctAns: 0


       },

       {
            question: "Which command is used to search for files or directories in Linux?",
            Options: ["find", "grep","locate","search"],
            correctAns: 0

       },

       {
         question: "Which Linux command is used to delete a directory?",
         Options: ["rm", "rmdir", "delete", "del"],
         correctAns: 1
       },

       {
         question: "Which command is used to see the manual of a command in Linux?",
         Options: ["man", "help", "info", "command"],
         correctAns: 0
       }

      
     ];

     const jsQuestions = [

         {
           
            question: "JavaScript is a _________ programming language",
            Options: [ "Object-oriented","Functional", "Procedural","All of the above"],
            correctAns: 3
        },

        {
            question: "Which of the following is not a valid JavaScript data type?",
            Options:["String","Number","Boolean","Character"],
            correctAns: 3
         },

         {
            question: "Which operator is used to concatenate strings in JavaScript?",
            Options:[ "+","-","*",  "/"],
            correctAns:0

         },

          {
            question: "Which of the following is a JavaScript keyword used to declare a variable?",
            Options: ["let", "define", "declare", "var"],
            correctAns: 3
         },

       
         {
            question: "Which of the following is a built-in JavaScript function for displaying messages in a dialog box?",
            Options: ["prompt()", "confirm()", "alert()", "log()"],
            correctAns: 2
        },

        {
            question: "How do you access the length of an array in JavaScript?",
            Options: [ " array.length","array.size", "array.count","array.index"],
            correctAns:0
        },

        {
            question: "Which keyword is used to declare a variable in JavaScript?",
            Options: ["var", "let", "const", "all the above"],
            correctAns: 3
        },

        {
         question: "Which operator is used to check if two values and their types are equal in JavaScript?",
         Options: ["===", "==", "!=", "!=="],
         correctAns: 0
       },
       {
         question: "What does the 'this' keyword refer to in JavaScript?",
         Options: ["The current function", "The global object", "The parent object", "The current object"],
         correctAns: 3
       }
     ];

    const generalKownledgeQuestions = [

         {
            question: "Which country is known as the Land of the Midnight Sun?",
            Options: [" Norway", "Spain", "Finland", "Nigeria"],
            correctAns: 0
         },

         {

            question: "Which country is famous for the Great Wall?",
            Options: [ "Liberia", "Brazil", "China","Italy"],
            correctAns: 2
         },

         {
            question: "Who was the first president of the United States?",
            Options: ["Thomas Jefferson","George Washington", "Abraham Lincoln", "John F. Kennedy"],
            correctAns:1
         },

         {

            question: "In which year did World War II end?",
            Options: ["1939", "1945", "1941", "1950"],
            correctAns:1
         },

         {
            question: "What is the process of a liquid changing into a gas called?",
            Options: [ "Melting", "Freezing", "Condensation","Evaporation"],
            correctAns:3
         },

         {
            question: "The formula for calculating force is",
            Options: [ "F = mc^2", "F = ma", "F = mv", "F = md"],
            correctAns: 1
         },

         {
            question: "The longest river in the world is",
            Options: ["Amazon River", "Nile River", "Mississippi River","Yangtze River"],
            correctAns: 1
         },

         {
            question: "What is the capital city of Australia?",
            Options: ["Monrovia", "Lagos", "Paris","Canberra"],
            correctAns: 3
         },

         {
            question: "The African country known as the Land of a Thousand Hills ?",
            Options: ["Rawanda", "Ghana", "China","Finland"],
            correctAns: 0
         },

         {
            question: "The Berlin Wall fell in",
            Options: ["2000", "1961", "1989", "1971"],
            correctAns:2
         },
         {
            question: "Which method is used to remove the last element from an array in JavaScript?",
            Options: ["splice()", "pop()", "shift()", "delete()"],
            correctAns: 1
          }
    ]


    function quizStart(){
      mainDisplay.innerHTML = "";
      mainDisplay.innerHTML = `
      
      <header>
      <div class="timer" id="time">0</div>
      <p>QUIZme</p>
      <div class="point">0</div>
    </header>
    <div class="content-wrapper">
    <button id="start" class="startQuiz" onclick="displayQA(quizType)">START QUIZ</button>
    </div>
      `
    }

    function displayQA(quizname){
      const wrapper = document.querySelector(".content-wrapper");
      Countdown(2);
      wrapper.innerHTML = "";
      wrapper.innerHTML = `
      <div class="quesNans-bar">
      <div class="ques-bar">
        <p id="questions"></p>
      </div>
      <div class="ans-bar" id="ans"></div>
    </div>
    

    <div class="nav-bar">
      <input type="button" value="Exit" id="exitBtn" class="exitBtn"/>
      <input type="button" value="Next" id="nextBtn" class="nextBtn" />
    </div>
      `
      updateQuestion(quizname);  

    }

    function gameEnd(){
      mainDisplay.innerHTML = "";
      mainDisplay.innerHTML = `
         <div class="endScreen">
            <p>GameEnd</p>
            <p class="endScore"> Final Score ${score}</p>
         </div>
      `
    }
    // selectOptions

    showQuestions.forEach(function(question){

      question.addEventListener('click', (event)=> {

            if( question.innerText === "Linux"){
               //  location.href = "index.html";
               quizType = linuxQuestions;
               quizStart();
            }       
            
            else if( question.innerText === "General Knowledge"){
                  quizStart();
                  quizType = generalKownledgeQuestions
                  //  location.href = "index.html";

            }  

           else if( question.innerText === "JavaScript"){
                  quizStart()
                  quizType = jsQuestions
               //  location.href = "index.html";

            }  
             
        })
    })

    function checkQuestion(word, target) {

        word = word.trim();
        correctAns = correctAns.trim();
      //   console.log(correctAns);
        if(word === correctAns)
        {
            score = score + 10;
            displayScore(score);
            // console.log('correct');
            target.classList.add('correct');

            questionIn = true;
        }
        else {
            // console.log('wrong')
            target.classList.add('wrong');
            questionIn = true;
        }

        questionsLength--;

        if(questionsLength === 0){
         gameEnd();
         return;
        }

        
    }

        // update linux Question;

     function updateQuestion(quizname){
      let ansBar = document.getElementById("ans");
      let question = document.getElementById('questions');


        questionIn= false;
        let correctIndex = quizname[currentQuestionIndex].correctAns;
        ansBar.innerHTML = ""
        counter++;
        let length = 4;
        for (let i = 0; i < length; i++){

        let answer = document.createElement("p");
        answer.setAttribute("class", "choice");
        answer.innerHTML = quizname[currentQuestionIndex].Options[i];
        ansBar.appendChild(answer);
        correctAns = quizname[currentQuestionIndex].Options[correctIndex];
        } 


      //   console.log(length);
      //   console.log(quizname[counter]);
        question.innerHTML = quizname[currentQuestionIndex].question;
        currentQuestionIndex++
        const currentQuestion = quizname[currentQuestionIndex]
            console.log(currentQuestion.question);
            console.log(currentQuestion.Options)
     }
        

     
        
     function displayScore(score){
      let scoreElement = document.querySelector('.point');
      scoreElement.textContent = score;

     }

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

    


    //  START linux QUIZ
mainDisplay.addEventListener('click', (event)=> {
  if(event.target.classList.contains('choice')){
   if ( questionIn === true ) return;
      if(!event.target.classList.contains('choice')) return;

      let word = event.target.textContent;
      let element = event.target;
      checkQuestion(word, element);
  }
  else if(event.target.classList.contains('nextBtn')){
         if( questionIn === false ) return;
         updateQuestion(quizType);
  }
})

