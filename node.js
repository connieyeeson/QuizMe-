 
// Targeted Elements
const question = document.getElementById('questions');
const nextButton = document.getElementById("nextBtn");
const exitsButton = document.getElementById("exitBtn")
const ansBar = document.getElementById("ans");
const scoreElement = document.querySelector('.point');
const startQuiz = document.querySelector(".startQuiz");
const display = document.querySelector(".quesNans-bar");
const navBar = document.querySelector(".nav-bar");
const showQuestions = document.querySelectorAll(".options")
    console.log(exitsButton)
    console.log(startQuiz);


// Declared variables


let correctAns;
let counter = 1;
let score = 0;
let questionIn = false;
let currentQuestionIndex = 0;

    const quizQuestions = [

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
            correctAns:0

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

       }
      
     ];

     const jsQuestion = [

         {
           
            quetion: "JavaScript is a _________ programming language",
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
            Options:[ "+","-","*",  "/",],
            correctAns:0

         },

          {
            question: "Which of the following is a JavaScript keyword used to declare a variable?",
            options: ["let", "define", "declare", "var"],
            correctAnswer: 3
         },

         {
            question: "Which of the following is a JavaScript keyword used to declare a variable?",
            options: ["let", "define", "declare", "var"],
            correctAnswer: 3
         },
         {
            question: "Which of the following is a built-in JavaScript function for displaying messages in a dialog box?",
            options: ["prompt()", "confirm()", "alert()", "log()"],
            correctAnswer: 2
        },

        {
            question: "How do you access the length of an array in JavaScript?",
            Option: [ " array.length","array.size", "array.count","array.index"],
            correctAns:0
        },

        {
            question: "Which keyword is used to declare a variable in JavaScript?",
            correctAns: ["var", "let", "const", "all the above"],
            correctAns: 3
        }

       

     ];

    const generalKownledgeQuestion = [

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
            Options: ["1939", "1945", "1941", "1950",],
            correctAns:1
         },

         {
            question: "What is the process of a liquid changing into a gas called?",
            Option: [ "Melting", "Freezing", "Condensation","Evaporation"],
            correctAns:3
         },

         {
            question: "The formula for calculating force is",
            Option: [ "F = mc^2", "F = ma", "F = mv", "F = md"],
            correctAns: 1
         },

         {
            question: "The longest river in the world is",
            Option: ["Amazon River", "Nile River", "Mississippi River","Yangtze River"],
            correctAns: 1
         },

         {
            question: "What is the capital city of Australia?",
            Option: ["Monrovia", "Lagos", "Paris","Canberra"],
            correctAns: 3
         },

         {
            question: ["The African country known as the Land of a Thousand Hills"],
            Option: ["Rawanda", "Ghana", "China","Finland"],
            correctAns: 0
         },

         {
            question: ["The Berlin Wall fell in: "],
            Option: ["2000", "1961", "1989", "1971"],
            correctAns:2
         }
    ]


    // selectOptions

    showQuestions.forEach(function(question){

      question.addEventListener('click', ()=> {
            location.href = "index.html";
            updateQuestion();   
        })

    })


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
        const currentQuestion = quizQuestions[currentQuestionIndex]
            console.log(currentQuestion.question);
            console.log(currentQuestion.Options)
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

    
    // score
    function displayScore(score) {
        scoreElement.textContent = score;

      }

      displayScore(score);


      // Event Handlers

     nextButton.addEventListener('click', ()=>{
        if( questionIn === false ) return;
        updateQuestion();
     });
     ansBar.addEventListener('click', (event)=>{
        if ( questionIn === true ) return;
        if(!event.target.classList.contains('choice')) return;

        let word = event.target.textContent;
        let element = event.target;
        checkQuestion(word, element);

     })

    //  START linux QUIZ

     startQuiz.addEventListener('click', (event)=>{
        updateQuestion();
        Countdown(5);
        event.target.style.display ="none";
        display.style.display = "flex";
        navBar.style.display = "flex";
     });

     //  START linux QUIZ

     startQuiz.addEventListener('click', (event)=> {

    //     if( jsQuestion     //  START linux QUIZ
    //     ==   )

    //  });

    // Quit the game
    
    exitsButton.addEventListener('click', (event)=>{

        location.href = "Options.html";


    })
updateQuestion();
showPreviosQuestion();

