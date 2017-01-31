// --------- Mars Rover Kata: Iteration #1  ------------ \\


// ------------------- User Experience using Console --------- \\
var promptSay = "Play with the Console!\nW = UP \nS = DOWN \nD = RIGHT \nA = LEFT";

var gridEdge = "You can\'go there! \n\nPlease notice that you are playing with an imaginary grid and the farest you can go is 9 steps";

var wrongInput = "---WRONG INPUT!--- Please use a correct input i. e. : \nW = UP \nS = DOWN \nD = RIGHT \nA = LEFT";

// Object Definition: (Vars inside a Var , may have functions)  \\




var AJRover = {
    position : [0, 0],
    invalidInput: function(notright) {     // Notification for invalid Input
        alert(notright);
        this.move(prompt(wrongInput));
    },
    invalidKey: function(message) {       // Notification if you reach grid's edge
        alert(message);
        this.move(prompt(promptSay));
    },
    move: function(moveRover) {                       //Directions
        switch(moveRover.toLowerCase()) {
            case 'w':
                this.goDirection("up");
                break;
            case 's':
                this.goDirection("down");
                break;
            case 'd':
                this.goDirection("right");
                break;
            case 'a':
                this.goDirection('left');
                break;
            default:
              this.invalidInput(wrongInput);
            }

        },
    goDirection: function(direction) {      //Directions Functions
        switch(direction) {
            case 'up':
                if (this.position[1] >= -9 && (this.position[1] + 1) <= 9) {
                    this.position[1]++;
                    break;
                } else {
                    this.invalidKey(gridEdge);
                    break;
                }

            case 'down':
                if (this.position[1] <= 9  &&  (this.position[1] -1 ) >= -9) {  // this needs to go back and stop at -9
                    this.position[1]--;
                    break;
                } else {
                    this.invalidKey(gridEdge);
                    break;
                }

            case 'right':
                if (this.position[0] >= -9 && (this.position[0] + 1) <= 9) {
                    this.position[0]++;
                    break;
                } else {
                    this.invalidKey(gridEdge);
                    break;
                }

            case 'left':
                if (this.position[0] <= 9 && (this.position[0] -1) >= -9) {
                    this.position[0]--;
                    break;
                } else {
                    this.invalidKey(gridEdge);
                    break;
                }

        }
    }

};

// ---- object END ----- \\\
// 1- This function calls the object move (this.move)
// 2- Sends the alert to prompts the var promptSay
// 3- Expects input to decide the output

while (true) {                                   //This code block allows user move the rover on mars by interacting with console
    var entry = prompt(promptSay);
    AJRover.move(entry);
    console.log('You are now at position: ', AJRover.position);
}
