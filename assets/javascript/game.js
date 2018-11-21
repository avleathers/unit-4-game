// Crystal Collector Game Homework Pseudocode

// 1.	To start the game, clicks on a link to go to the URL for the game.
// 2.	H1 “CrystalsCollector!”
// 3.	Paragraph text “You will be given a random number at the start of the game.”
// 4.	Paragraph text “There are four crystals below.  By clicking on a crystal you will add a specific amount of points to your total score.”
// 5.	Paragraph text “You win the game by matching your total score to random number, you lose the game if your total score goes above the random number.”
// 6.	Paragraph text “The value of each crystal is hidden from you until you click on it.”
// 7.	Paragraph text “Each time the game starts, the game will change the values of each crystal and the random number generated by the computer.”
// 8.	The following text also displays for each counter:
    // a.	Wins
    // b.	Losses
    // c.	Your Total Score Is:
// 9.	Also displayed:
    // a.	Random generated number
    // b.	An icon for each crystal
// 10.	Create a counter and set the counter values:
    // a.	Wins (var wins=””)
    // b.	Losses (var losses=””)
    // c.	Your Total Score (var totalScore-“”) 
// 11.	The app then randomly generates a number that is between 18 and 120 that is displayed and stored so it can be compared to the total score.  
// 12.	A random number between 1 and 12 is generated for each of the 4 crystals but is not displayed.
// 13.	The user clicks a crystal (user input) and the number that the app has assigned to the crystal is added to “Your total score is:”.  This will happen for each crystal clicked.
// 14.	Each time a crystal is clicked, the “Your total score is:” will increase the total score by the number assigned to the crystal clicked.
// 15.	Determine if the user should keep clicking on the crystals to add to the number, or if the user wins or loses: - use a for-loop for this.
//  a.	    Compare the “Your total score is” to the number that is random generated by the computer.
    // i.	If your total score is less than the random generated number, allow the user to keep clicking crystals – and with each crystal clicked, the “Your total score is:” will increase by the number associated with the crystal.
    // ii.	If “Your total score is:” is equal to the random generated number:
        // 1.	Increment “wins” by 1 (var wins++1)
        // 2.	Reset “Your total score is:” to blank 
        // 3.	Generate a new random number to be displayed and used to compare the “Your total score is:” to
//      iii.	If “Your total score is:” is greater than the random generated number:
        // 1.	Increment “losses” by 1 (var wins++1)
        // 2.	Reset “Your total score is:” to blank 
        // 3.	Generate a new random number to be displayed and used to compare the “Your total score is:” to.

//Begin Javascript and jQuery

<script type="text/javascript">
// Creates an array that computer chooses and adds them to the array.

var computerChoice = ["18", "36", "72", "90", "108", "120", "24", "48", "72", "96"];

var crystalValues = [2, 8, 4, 18]

for (var i = 0; i < crystalValues.length; i++) {


// Creating variables to hold the number of wins, losses, and total score.

var wins = 0;
var losses = 0;
var totalScore = 0;

// Create variables that hold references to the places in the HTML where we want to display things.
var randomNumberText = document.getElementById("randomnumber-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var userChoiceText = document.getElementById("usernchoicetext");
var totalScoreText = document.getElementById("totalscore-text");



// This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

    // Determine score so far.
    var totalScore = event.key;


    console.log(userChoice)

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var totalScore = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    // If the choices match, increment our wins variable and reset total score so far to 0.
    if (totalScore === computerGuess) {
        wins++;
        totalScore = 0
    }
        
        else if (totalScore !== computerGuess) {
        losses++;
        totalScore = 0
        }

        if (totalScore === 0) {losses++; computerGuess="";
        }

    // Display the user guesses, and wins/losses.
    userChoiceText.textContent = "You chose: " + userChoice;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    totalScoreText.textContent = "total score:" + totalScore;
    }

    var userNumber = "";

    $("#number-to-guess").text(userNumber);

    var counter = 0;


</script>
