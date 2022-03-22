// the var can be anything, but best practice is to use something another coder stepping in will understand
var playerName = window.prompt("What is your robot's name?");

// Note the lack of quotation marks around playerName
window.alert(playerName);

// this creates a function named "fight"

function fight() {
    window.alert("The fight has begun!");
}

// this is to "call" the function / make it do something (above function won't do anything if you don't call it)

//fight();