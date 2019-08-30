//Global variables
var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;

//Sequence function
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);
  $("#level-title").text("Level " + level);
  level++;

  playSound(randomChosenColor);
  $("." + randomChosenColor).fadeOut(100).fadeIn(100);
}

//Event Listeners
$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  animatePressed(userChosenColor);
  playSound(userChosenColor);
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
