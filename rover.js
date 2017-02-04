// --------- Mars Rover Kata: Iteration #1  ------------ \\


// ------------------- User Experience using Console --------- \\
var promptSay = "Play with the Console!\nW = UP \nS = DOWN \nD = RIGHT \nA = LEFT";

var gridEdge = "You can\'go there! \n\nPlease notice that you are playing with an imaginary grid and the farest you can go is 9 steps";

var wrongInput = "---WRONG INPUT!--- Please use a correct input i. e. : \nW = UP \nS = DOWN \nD = RIGHT \nA = LEFT";

// Object Definition: (Vars inside a Var , may have functions)  \\

  var myRover = {
  position: [0,0] ,
  direction: 'W',
  invalidInput: function(notright) {     // Notification for invalid Input
      alert(notright);
      this.move(prompt(wrongInput));
  },
};

var gridx = myRover.position[0];
var gridy = myRover.position[1];


// for (var x = 0; x < gridx.length ; x ++) {

function grid(){
  if (myRover.position[0] >= 10) {
    prompt(gridEdge);
  } else if (myRover.position[0] <= -11) {
     prompt(gridEdge);
  } else if (myRover.position[1] >= 11) {
     prompt(gridEdge);
  } else if (myRover.position[1] <= -11) {
     prompt(gridEdge);
  }
}

// }

// var grid = x ;
//
// x <= 9;
// x >= -9;
//
// grid === myRover.position


var obstacles = [0,2];

function checkForobstacles(){
  for (i = 0; i < obstacles.length; i++){
    if (myRover.position[0] === obstacles[0] &&
      myRover.position[1] === obstacles[1]){
       console.log("sorry, obstacle");
       goBackward(myRover);
       }
    }
  }


function goForward(rover) {
  switch(rover.direction.toLowerCase()) {
    case 'd':
      rover.position[0]++;
      break;
    case 'a':
      rover.position[0]--;
      break;
      case 'w':
      rover.position[1]++;
      break;
    case 's':
      rover.position[1]--;
      break;
      default:
      this.invalidInput(wrongInput);
  }
}

function goBackward(rover) {
  switch(rover.direction.toLowerCase()) {
    case 'd':
      rover.position[0]--;
      break;
    case 'a':
      rover.position[0]++;
      break;
    case 'w':
      rover.position[1]--;
      break;
    case 's':
      rover.position[1]++;
      break;
      default:
      this.invalidInput(wrongInput);
  }
}

function goRight(rover) {
  switch(rover.direction.toLowerCase()) {
    case 'd':
      rover.position[1]++;
      break;
    case 'a':
      rover.position[1]--;
      break;
    case 'w':
      rover.position[0]++;
      break;
    case 's':
      rover.position[0]--;
      break;
      default:
      this.invalidInput(wrongInput);
  }
}

function goLeft(rover) {
  switch(rover.direction.toLowerCase()) {
    case 'd':
      rover.position[1]--;
      break;
    case 'a':
      rover.position[1]++;
      break;
    case 'w':
      rover.position[0]--;
      break;
    case 's':
      rover.position[0]++;
      break;
      default:
      this.invalidInput(wrongInput);
  }
}



var commands = prompt(promptSay);


for (var x = 0; x < commands.length ; x ++) {
  if(commands[x] === "w"){
    goForward(myRover);
    checkForobstacles();
    grid();
  } else if (commands[x] === "s"){
    goBackward(myRover);
    checkForobstacles();
    grid();
  } else if (commands[x] === "d"){
    goRight(myRover);
  } else if(commands[x] === "a"){
    goLeft(myRover);
  } else {
    console.log("I'm sorry, you have entered an invalid command");
  }
}


console.log(myRover.position);
