    /////GLOBAL VARIABLES////
        $(document).ready(function () {

            
            <p><span id="wins-loss"></span></p>
            
           // var winPhrase = "You Win!"
            
            // var winPhrase = "You Lose!"
      //////////////////////////////////////////////////////////////           
               //  <p>Wins: <span id="wins"></span></p>
                 var wins = 0;      ///<span id="wins"></span></p>
               
     //////////////////////////////////////////////////////////////////
               //  <p>Losses: <span id="losses"></span></p>
                 var losses = 0;     ///<span id="losses"></span></p>
            
           

            var bigNumRandom = null;  // 19 - 120     ///  "random-score"></span></h2>

            var c1Num = null;   // 1 -12 ///<img class="crystalImg" id="crystal1"
            var c2Num = null;           ///<img class="crystalImg" id="crystal2"
            var c3Num = null;             // <img class="crystalImg" id="crystal3"
            var c4Num = null;             // <img class="crystalImg" id="crystal4"

            var totalscore = null;      //<h2><span id="totalScore"></span></h2>





            var numCounter = 0;    // click counter

            function startGame() {
                function initializeCalculator() {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        isOperatorChosen = false;
        isCalculated = false;

        $("#first-number, #second-number, #operator, #result").empty();
      }

                numCounter = 0;

                bigNumRandom = Math.floor(Math.random() * 100) + 21;
                $("#number-to-guess").text(bigNumRandom);
                console.log(bigNumRandom);

                imageCrystal.attr("data-crystalvalue", numberOptions[i]);
                c1Num = Math.floor(Math.random() * 12 + 1);
                console.log(c1Num);
                c2Num = Math.floor(Math.random() * 12 + 1);
                console.log(c2Num);
                c3Num = Math.floor(Math.random() * 12 + 1);
                console.log(c3Num);
                c4Num = Math.floor(Math.random() * 12 + 1);
                console.log(c4Num);
                var crystalValue = ($(this).attr("data-crystalvalue"));
        );
        $(".number").on("click", function() {
        $(".crystal-image").on("click", function () {
           
                isc?NumChosen = true;
                isc?NumChosen = true;
                isc?NumChosen = true;
                isc?NumChosen = true; 

                c?Num = $(this).val();
                
                $(".crystal-image").text($(this).text());
                
                isCalculated = true;
                
                c?Num = parseInt(firstNumber);
               
                counter = parseInt(secondNumber);
///////////////////////////////////////////////////////////////////////////
        if (c1Num === "click") {
          result = c1Num + counter;
        }

        else if (c2Num === "click") {
            result = c2Num + counter;
        }

        else if (c3Num === "click") {
            result = c3Num + counter;
        }

        else (c4Num === "click") {
            result = c4Num + counter;
        }


        }
                counter += crystalValue;
              //"New score: " + counter.  innerHTML

                if (counter === targetNumber) {
                 ////"You win! + win.  innerHTML
                }

                else if (counter >= targetNumber) {
                   //////"You lose!!" + loss. innerHTML
                }

            });
 ////////////////////////////////////////////////////////////////////////////////////////////////////////           
            
            
            function roundComplete() {

                id="random-score"></span></h2>
           <p><span id="wins-loss"></span></p>
                <p>Wins: <span id="wins"></span></p>
                <p>Losses: <span id="losses"></span></p>

                <h3>Crystal 1</h3>
                <img class="crystalImg" id="crystal1" src="assets/images/crystal-1.jpeg" alt="crystal 1">
            </div>
            <div class="col-sm-3">
                <h3>Crystal 2</h3>
                <img class="crystalImg" id="crystal2" src="assets/images/crystal-2.jpeg" alt="crystal 2">
            </div>
            <div class="col-sm-3">
                <h3>Crystal 3</h3>
                <img class="crystalImg" id="crystal3" src="assets/images/crystal-3.jpg" alt="crystal 3">
            </div>
            <div class="col-sm-3">
                <h3>Crystal 4</h3>
                <img class="crystalImg" id="crystal4" src="assets/images/crystal-4.jpg" alt="crystal 4">

                <h2><span id="totalScore"></span></h2>
                
                
                document.getElementById("guesses-left").innerHTML = guessesLeft;

                document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

                document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

               
                if (bandLetters.toString() === blanksAndSuccesses.toString()) {
                    wins++;
                   
                    document.getElementById("win-counter").innerHTML = wins;
                    startGame();
                }

                else if (guessesLeft === 0) {
                    losses++;
    
                    document.getElementById("loss-counter").innerHTML = losses;
                    startGame();
                }

            }  
