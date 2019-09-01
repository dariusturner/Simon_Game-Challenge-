//Global variables
var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;


//Event Listeners
$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  animatePressed(userChosenColor);
  playSound(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);
});

$($).keydown(function() {
  nextSequence();
});


//Functions
function playSound(name) {
  new Audio("sounds/" + name + ".mp3").play();
}

function animatePressed(currentColor) {
  $("." + currentColor).addClass("pressed");
  setTimeout(function() {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("Correct");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);

    // Start Over
    $("#level-title").text("Game Over, Press Any Key To Restart");
    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);
  $("#level-title").text("Level " + (level + 1));
  level++;

  playSound(randomChosenColor);
  $("." + randomChosenColor).fadeOut(100).fadeIn(100);
}

function startOver() {
  level = 0;
  userClickedPattern = [];
  gamePattern = [];
}
