//remove this thing .ready, i thing this is only used when is into the same html file
// $(document).ready(function () {
    
//defining variables
var timeRemaining = 30;
var correct = 0;
var incorrect = 0;
var answers1 = ["The Krusty Krab", "The Chum Bucket"];
var answers2 = ["Bikini Bottom", "Rock Bottom"];
var answers3 = ["Gary", "Jerry"];
var answers4 = ["Squidward", "Sandy"];
var answers5 = ["Patty", "Patrick"];
var intervalId;
//starts timer.
function countDown() {
    intervalId = setInterval(decrement, 1000)
}
function decrement() {
    timeRemaining--;
    $("#timer").html("Time Remaining: " + timeRemaining + " seconds");
    if (timeRemaining === 0) {
        stop();
        finalScore(); //erases the contents of page and replaces them with game stats
    }
}
function stop() {
    clearInterval(intervalId);
}
function finalScore() {
    //removes triva questions and reveals final scores
    var removeSections = ["#timer", "#trivia1", "#trivia2", "#trivia3", "#trivia4", "#trivia5", "#response1a", "#response2a", "#response3a", "#response4a", "#response5a"];
    for (i = 0; i < removeSections.length; i++) {
        $(removeSections[i]).remove();
    }
    //total for final score
    var addStats = ["#Finished", "#correct", "#incorrect", "#triviaTitle"];
    $(addStats[0]).html("Finished!");
    $(addStats[1]).html("Correct Answers: " + correct);
    $(addStats[2]).html("Incorrect Answers: " + incorrect);
}
//Checks players responses and adds to correct and incorrect totals
//change the trigger event for each radio button
$(document).on('change', 'input[type=radio][name=response1a]', function () {
    if (this.value === "The Krusty Krab" && this.checked) {
        correct++;
    }
    else {
        incorrect++;
    }
});
$(document).on('change', 'input[type=radio][name=response2a]', function () {
    if (this.value == "Bikini Bottom" && this.checked) {
        correct++;
    }
    else {
        incorrect++;
    }
});
$(document).on('change', 'input[type=radio][name=response3a]', function () {
    if (this.value == "Gary" && this.checked) {
        correct++;
    }
    else {
        incorrect++;
    }
});
$(document).on('change', 'input[type=radio][name=response4a]', function () {
    if (this.value == "Squidward" && this.checked) {
        correct++;
    }
    else {
        incorrect++;
    }
});
$(document).on('change', 'input[type=radio][name=response5a]', function () {
    if (this.value == "Patrick" && this.checked) {
        correct++;
    }
    else {
        incorrect++;
    }
});
//trivia questions
function triviaQuestions() {
    $("#trivia1").html("Where does Spongebob work?");
    $("#trivia2").html("Where does Spongebob live?");
    $("#trivia3").html("What is the name of Spongebob's pet?");
    $("#trivia4").html("Who is Spongebob's neighbor?");
    $("#trivia5").html("Who is Spongebob's best friend?");
}
//triva responses to appear in placeholders in html
function triviaResponses() {
    for (i = 0; i < answers1.length; i++) {
        //This line only add the first word of the name in the value field, example the word "The Krusty Krab" only insert "The" as a value attribute
        // $("#response1a").append("<input type='radio' name='response1a' value=" + answers1[i] + ">" + "<label>" + answers1[i] + "</label>");
        //by this way inserts the name completely
        var _input = $('<input type="radio" name="response1a" ><label>' + answers1[i] + '</label>');
        _input.val(answers1[i]);
        $("#response1a").append(_input)
    }
    for (i = 0; i < answers2.length; i++) {
        var _input = $('<input type="radio" name="response2a" ><label>' + answers2[i] + '</label>');
        _input.val(answers2[i]);
        $("#response2a").append(_input)
    }
    for (i = 0; i < answers3.length; i++) {
        var _input = $('<input type="radio" name="response3a" ><label>' + answers3[i] + '</label>');
        _input.val(answers3[i]);
        $("#response3a").append(_input)
    }
    for (i = 0; i < answers4.length; i++) {
        var _input = $('<input type="radio" name="response4a" ><label>' + answers4[i] + '</label>');
        _input.val(answers4[i]);
        $("#response4a").append(_input)
    }
    for (i = 0; i < answers5.length; i++) {
        var _input = $('<input type="radio" name="response5a" ><label>' + answers5[i] + '</label>');
        _input.val(answers5[i]);
        $("#response5a").append(_input)
    }
}
$("#startGame").click(function () {
    $("#startGame").remove();
    countDown();
    triviaQuestions();
    triviaResponses();
})