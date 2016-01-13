//Here are three object variables which each have the same properties.
//The object properties are:
//    - the name of the object
//    - the name of the object it will win against
//    - the name of the object it will lose against
var rockObject = {name: 'rock', win: 'scissors', lose: 'paper'};
var paperObject = {name: 'paper', win: 'rock', lose: 'scissors'};
var scissorsObject = {name: 'scissors', win: 'paper', lose: 'rock'};


//This is a function which will calculate if the last turn was a draw, win or lose.
//It will generate a resultMessage and display it in an alert box.
function getResult(player1Object, player2Object){

  //This variable is a string. It will store the result text that is displayed in an alert box.
  var resultMessage;

  if (player1Object.name === player2Object.name){
    resultMessage = player1Object.name + " DRAWS with " + player2Object.name;
  }else if (player2Object.name === player1Object.win){
    resultMessage = player1Object.name + " WINS against " + player2Object.name;
  }else if (player2Object.name === player1Object.lose){
  	resultMessage = player1Object.name + " LOSES against " + player2Object.name;
  }
  alert(resultMessage);
}

//This function gets called by the buttons in the html. It is the click event handler.
//It will get the correct object based on which button the user clicked.
//It will then randomly choose another object, and then send these two objects to the
//getResult function.
function playGame(event){
  //this is an array (list) which stores the different objects
  var choices = [rockObject, paperObject, scissorsObject];

  //get the user choice (the string of text inside the <button>)
  //transform it to lowercase before using it
  var userChoiceName = event.target.textContent.toLowerCase();

  //loop through the choices array to find the object whose name
  //matches the userChoiceName
  var userChoice;
  for(var i=0; i< choices.length; i++){
    if(choices[i].name === userChoiceName){
      userChoice = choices[i];
      break;
    }
  }

  //randomly choose one of the three choices as the "computer's choice"
  var randomNumber = Math.floor(Math.random()*3);
  var randomChoice = choices[randomNumber];

  //send the two choices to the getResult function
  getResult(userChoice, randomChoice);
}

//finally this code binds the playGame click event handler to each of the buttons
//in the HTML. This needs to be done AFTER the page has loaded
window.onload = function(){
  var buttonsContainer = document.getElementById('choiceButtons');
  var buttons = buttonsContainer.childNodes;
  var button;
  for(var i = 0; i < buttons.length; i++){
    button = buttons[i];
    button.addEventListener("click", playGame);
  }
}
