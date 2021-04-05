var now;

var newTime = function() {
    setInterval(function() {
        now = moment().format("MMM DD, YYYY @ HH:mm:ss")
        $("#currentDay").text(now);
    
    }, 200);
}

newTime();
/* Great, the date and time module works properly */


var currentTime;

currentTime = JSON.parse(moment().format("HH"))

// This part is supposed to get the current time and make it a variable.

console.log(currentTime)

var time7 = 07;
var time8 = 08;
var time9 = 09;
var time10 = 10;
var time11 = 11;
var time12 = 12;
var time13 = 13;
var time14 = 14;
var time15 = 15;
var time16 = 16;
var time17 = 17;

// This part determines what time it is and plugs it into the display changing
// the colors of the input boxes based on the time of the day, and whether or
// not the boxes are in the future, past or now.

if (time7 == currentTime) {
    document.getElementById("t7").style.backgroundColor = "#ff6961";
    document.getElementById("t7").style.color = "white";
    //Present

} else if (time7 < currentTime) {
    document.getElementById("t7").style.backgroundColor = "#d3d3d3";
    document.getElementById("t7").style.color = "white";
    // Past 

} else (time7 > currentTime); {
    document.getElementById("t7").style.backgroundColor = "#77dd77";
    document.getElementById("t7").style.color = "white";
    //Future. Indoor plumbing. It's gonna be big!

}
if (time7 == currentTime) {
    document.getElementById("t8").style.backgroundColor = "#ff6961";
    document.getElementById("t8").style.color = "white";

} else if (time7 < currentTime) {
    document.getElementById("t8").style.backgroundColor = "#d3d3d3";
    document.getElementById("t8").style.color = "white";

} else (time7 > currentTime); {
    document.getElementById("t8").style.backgroundColor = "#77dd77";
    document.getElementById("t8").style.color = "white";

}

if (time7 == currentTime) {
    document.getElementById("t9").style.backgroundColor = "#ff6961";
    document.getElementById("t9").style.color = "white";

} else if (time7 < currentTime) {
    document.getElementById("t9").style.backgroundColor = "#d3d3d3";
    document.getElementById("t9").style.color = "white";

} else (time7 > currentTime); {
    document.getElementById("t9").style.backgroundColor = "#77dd77";
    document.getElementById("t9").style.color = "white";

}

if (time7 == currentTime) {
    document.getElementById("t10").style.backgroundColor = "#ff6961";
    document.getElementById("t10").style.color = "white";

} else if (time7 < currentTime) {
    document.getElementById("t10").style.backgroundColor = "#d3d3d3";
    document.getElementById("t10").style.color = "white";

} else (time7 > currentTime); {
    document.getElementById("t10").style.backgroundColor = "#77dd77";
    document.getElementById("t10").style.color = "white";

}

if (time7 == currentTime) {
    document.getElementById("t11").style.backgroundColor = "#ff6961";
    document.getElementById("t11").style.color = "white";

} else if (time7 < currentTime) {
    document.getElementById("t11").style.backgroundColor = "#d3d3d3";
    document.getElementById("t11").style.color = "white";

} else (time7 > currentTime); {
    document.getElementById("t11").style.backgroundColor = "#77dd77";
    document.getElementById("t11").style.color = "white";

}

if (time7 == currentTime) {
    document.getElementById("t12").style.backgroundColor = "#ff6961";
    document.getElementById("t12").style.color = "white";

} else if (time7 < currentTime) {
    document.getElementById("t12").style.backgroundColor = "#d3d3d3";
    document.getElementById("t12").style.color = "white";

} else (time7 > currentTime); {
    document.getElementById("t12").style.backgroundColor = "#77dd77";
    document.getElementById("t12").style.color = "white";

}

if (time7 == currentTime) {
    document.getElementById("t13").style.backgroundColor = "#ff6961";
    document.getElementById("t13").style.color = "white";

} else if (time7 < currentTime) {
    document.getElementById("t13").style.backgroundColor = "#d3d3d3";
    document.getElementById("t13").style.color = "white";

} else (time7 > currentTime); {
    document.getElementById("t13").style.backgroundColor = "#77dd77";
    document.getElementById("t13").style.color = "white";

}

if (time7 == currentTime) {
    document.getElementById("t14").style.backgroundColor = "#ff6961";
    document.getElementById("t14").style.color = "white";

} else if (time7 < currentTime) {
    document.getElementById("t14").style.backgroundColor = "#d3d3d3";
    document.getElementById("t14").style.color = "white";

} else (time7 > currentTime); {
    document.getElementById("t14").style.backgroundColor = "#77dd77";
    document.getElementById("t14").style.color = "white";

}

if (time7 == currentTime) {
    document.getElementById("t15").style.backgroundColor = "#ff6961";
    document.getElementById("t15").style.color = "white";

} else if (time7 < currentTime) {
    document.getElementById("t15").style.backgroundColor = "#d3d3d3";
    document.getElementById("t15").style.color = "white";

} else (time7 > currentTime); {
    document.getElementById("t15").style.backgroundColor = "#77dd77";
    document.getElementById("t15").style.color = "white";

}

if (time7 == currentTime) {
    document.getElementById("t16").style.backgroundColor = "#ff6961";
    document.getElementById("t16").style.color = "white";

} else if (time7 < currentTime) {
    document.getElementById("t16").style.backgroundColor = "#d3d3d3";
    document.getElementById("t16").style.color = "white";

} else (time7 > currentTime); {
    document.getElementById("t16").style.backgroundColor = "#77dd77";
    document.getElementById("t16").style.color = "white";

}

if (time7 == currentTime) {
    document.getElementById("t17").style.backgroundColor = "#ff6961";
    document.getElementById("t17").style.color = "white";

} else if (time7 < currentTime) {
    document.getElementById("t17").style.backgroundColor = "#d3d3d3";
    document.getElementById("t17").style.color = "white";

} else (time7 > currentTime); {
    document.getElementById("t17").style.backgroundColor = "#77dd77";
    document.getElementById("t17").style.color = "white";

}




var button7 = document.querySelector("#btn7");
var button7 = document.querySelector("#btn8");
var button7 = document.querySelector("#btn9");
var button7 = document.querySelector("#btn10");
var button7 = document.querySelector("#btn11");
var button7 = document.querySelector("#btn12");
var button7 = document.querySelector("#btn13");
var button7 = document.querySelector("#btn14");
var button7 = document.querySelector("#btn15");
var button7 = document.querySelector("#btn16");
var button7 = document.querySelector("#btn17");

