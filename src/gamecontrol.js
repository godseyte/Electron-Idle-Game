/*
Written by Tucker Godsey
Main Brain of the Idle Game.
*/

// Elements from Index
const floatPoints = document.getElementById('points');
const mainButton = document.getElementById('mainbtn');
const multiButton = document.getElementById('multibtn');

// Upgrade Buttons
const upgrade1 = document.getElementById('buy-upgrade1');
const upgrade2 = document.getElementById('buy-upgrade2');

// Variables
let pointsValue = 0; // Current Points Value
let multiplier = 1; // Current Multiplier Value
let upgrade1bool = false;
let upgrade2bool = false;

// Increase points value over time
setInterval(
    function() {
        increasePoints();
    }, 100
)

// Increase points value on btn press
mainButton.onclick = function() {
    pointsValue += 1;
    updatePoints();
}

// Increase Multiplier on btn press
multiButton.onclick = function() {
    multiplier += .1;
}

// Upgrade 1 - +100 Multiplier
upgrade1.onclick = function() {
    if(pointsValue >= 100 && upgrade1bool == false)
    {
        multiplier += 100;
        pointsValue -= 100;
        updatePoints();
        upgrade1bool = true;
    }
}

// Upgrade 2 - +300 Multiplier
upgrade2.onclick = function() {
    if(pointsValue >= 500 && upgrade2bool == false)
    {
        multiplier += 300;
        pointsValue -= 500;
        updatePoints();
        upgrade2bool = true;
    }
}

// Update number by a multiplier
function increasePoints() {
    pointsValue = Math.round(pointsValue + (1 * multiplier));
    updatePoints();
}

// This function updates our Points
function updatePoints() {
    floatPoints.innerHTML = pointsValue;
}