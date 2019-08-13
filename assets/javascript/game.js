var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

$('.greetings').text(  greeting + ' Crystal Collector');


var losses = 0;
var wins = 0;
var accuNum = 0
// var targetNum = "";
var targetNum = Math.floor(Math.random() * 102) + 19;
var blueCrystal = Math.floor(Math.random() * 12) + 1;
var purpleCrystal = Math.floor(Math.random() * 12) + 1;
var redCrystal = Math.floor(Math.random() * 12) + 1;
var yellowCrystal = Math.floor(Math.random() * 12) + 1;

$('#random-number').text(targetNum);
$('win-counter').text(wins);
$('loss-counter').text(losses);


function crystalreset(){
 targetNum = Math.floor(Math.random() * 102) + 19;
 $('#random-number').text(targetNum);
 blueCrystal = Math.floor(Math.random() * 12) + 1;
 purpleCrystal = Math.floor(Math.random() * 12) + 1;
 redCrystal = Math.floor(Math.random() * 12) + 1;
 yellowCrystal = Math.floor(Math.random() * 12) + 1;
 accuNum = 0;
 $('#total-score').text(accuNum);  //check this if errors
 
};


function gameRules() {
    
    $('#total-score').text(accuNum); 
if (accuNum ===targetNum ) {
    $('#total-score').text(accuNum); 
    alert('You Win!')
    wins++
    console.log(accuNum);
   $('#win-counter').text( wins );
    crystalreset();

} else if (accuNum > targetNum) {
    $('#total-score').text(accuNum); 
    alert('You lost!')
    losses++
  $('#loss-counter').text( losses );
    crystalreset()
}
};

$('#blueCrystal').on('click', function(){
accuNum = accuNum + blueCrystal;
$('#total-score').text(accuNum);
gameRules();
});

$('#purpleCrystal').on('click', function(){
    accuNum = accuNum + purpleCrystal;
    $('#total-score').text(accuNum);
    gameRules();
});

$('#redCrystal').on('click', function(){
    accuNum = accuNum + redCrystal;
    $('#total-score').text(accuNum);
    
    gameRules();
});

$('#yellowCrystal').on('click', function(){
    accuNum = accuNum + yellowCrystal;
    $('#total-score').text(accuNum);

    gameRules();
});

