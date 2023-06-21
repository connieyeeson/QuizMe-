

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
            correctAns: 0
        },

        {
            question: "Which country is known as the Land of the Midnight Sun?",
            Options: [" Norway", "Spain", "Finland", "Nigeria"],
            correctAns: 0
        },
     ];

     
  function Countdown(mins){

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
        let scoreElement = document.querySelector('.point');
        scoreElement.textContent = score;
      }

      displayScore(100);


