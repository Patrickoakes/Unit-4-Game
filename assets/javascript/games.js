$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var numCounter = 0;
    var bigNumRandom = Math.floor(Math.random() * 100) + 21;
    $("#random-score").text(bigNumRandom);

    function startGame() {

        bigNumRandom = Math.floor(Math.random() * 100) + 21;
        $("#random-score").text(bigNumRandom);

        numCounter = 0;
        $("#totalScore").text(numCounter);

        var c1Num = $("#crystal1")
        c1Num.attr("data-crystalvalue", Math.floor(Math.random() * 12 + 1));
        var c2Num = $("#crystal2")
        c2Num.attr("data-crystalvalue", Math.floor(Math.random() * 12 + 1));
        var c3Num = $("#crystal3")
        c3Num.attr("data-crystalvalue", Math.floor(Math.random() * 12 + 1));
        var c4Num = $("#crystal4")
        c4Num.attr("data-crystalvalue", Math.floor(Math.random() * 12 + 1));
    }

    function roundComplete() {
        if (numCounter === bigNumRandom) {
            wins++;
            $("#wins-loss").text("You Win!");
            $("#wins").text(wins);
            startGame();
        }

        else if (numCounter > bigNumRandom) {
            losses++;
            $("#wins-loss").text("You Lose!");
            $("#losses").text(losses);
            startGame();
        }
    }

    startGame();

    $(".crystalImg").on("click", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"))
        crystalValue = parseInt(crystalValue);
        numCounter += crystalValue;
        $("#totalScore").text(numCounter);

        roundComplete();
    });

});
