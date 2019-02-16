$( document ).ready(function(){

//defining variables
var timeRemaining = 30;
var correct = 0;
var incorrect = 0;
var answers1 = ["The Krusty Krab", "The Chum Bucket"];
var answers2 = ["Bikini Bottom", "Rock Bottom"];
var answers3 = ["Gary", "Jerry"];
var answers4 = ["Squidward", "Sandy"]; 
var answers5 = ["Patty", "Patrick"]; 



//starts timer.
function countDown() {
    intervalId = setInterval(decrement, 1000)
}

function decrement() {

    timeRemaining--;
    $("#timer").html("Time Remaining: " + timeRemaining + " seconds");
    checkResponses();
    console.log(timeRemaining)

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
function checkResponses() {
    $("input[type=radio][name=response1a]").change(function(){
        if (this.value == "The Krusty Krab" && this.checked) {
            correct++;
        }
        else {
            incorrect++;
        }
        console.log(correct)
    });
    $("input[type=radio][name=response2a]").change(function(){
        if (this.value == "Bikini Bottom" && this.checked) {
            correct++;
        }
        else {
            incorrect++;
        }
    });
    $("input[type=radio][name=response3a]").change(function(){
        if (this.value == "Gary" && this.checked) {
            correct++;
        }
        else {
            incorrect++;
        }
    });
    $("input[type=radio][name=response4a]").change(function(){
        if (this.value == "Squidward" && this.checked) {
            correct++;
        }
        else {
            incorrect++;
        }
    });
    $("input[type=radio][name=response5a]").change(function(){
        if (this.value == "Patrick" && this.checked) {
            correct++;
        }
        else {
            incorrect++;
        }
    });
}

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
        $("#response1a").append("<input type='radio' name='response1a' value=" + answers1[i] + ">" + "<label>" + answers1[i] + "</label>");
    }


    for (i = 0; i < answers2.length; i++) {
        $("#response2a").append("<input type='radio' name='response2a' value=" + answers2[i] + ">" + "<label>" + answers2[i] + "</label>");
    }

	
    for (i = 0; i < answers3.length; i++) {
        $("#response3a").append("<input type='radio' name='response3a' value=" + answers3[i] + ">" + "<label>" + answers3[i] + "</label>");
    }


    for (i = 0; i < answers4.length; i++) {
        $("#response4a").append("<input type='radio' name='response4a' value=" + answers4[i] + ">" + "<label>" + answers4[i] + "</label>");
    }


    for (i = 0; i < answers5.length; i++) {
        $("#response5a").append("<input type='radio' name='response5a' value=" + answers5[i] + ">" + "<label>" + answers5[i] + "</label>");
    }

}

$("#startGame").click(function() {
    $("#startGame").remove();
    countDown();
    setTimeout(function() {
        triviaQuestions();
        triviaResponses();
    }, 1000);
    })
})