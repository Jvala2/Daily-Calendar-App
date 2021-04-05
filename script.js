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

} else {
    document.getElementById("t7").style.backgroundColor = "#77dd77";
    document.getElementById("t7").style.color = "white";
    //Future. Indoor plumbing. It's gonna be big!

}
if (time8 == currentTime) {
    document.getElementById("t8").style.backgroundColor = "#ff6961";
    document.getElementById("t8").style.color = "white";

} else if (time8 < currentTime) {
    document.getElementById("t8").style.backgroundColor = "#d3d3d3";
    document.getElementById("t8").style.color = "white";

} else {
    document.getElementById("t8").style.backgroundColor = "#77dd77";
    document.getElementById("t8").style.color = "white";

}

if (time9 == currentTime) {
    document.getElementById("t9").style.backgroundColor = "#ff6961";
    document.getElementById("t9").style.color = "white";

} else if (time9 < currentTime) {
    document.getElementById("t9").style.backgroundColor = "#d3d3d3";
    document.getElementById("t9").style.color = "white";

} else {
    document.getElementById("t9").style.backgroundColor = "#77dd77";
    document.getElementById("t9").style.color = "white";

}

if (time10 == currentTime) {
    document.getElementById("t10").style.backgroundColor = "#ff6961";
    document.getElementById("t10").style.color = "white";

} else if (time10 < currentTime) {
    document.getElementById("t10").style.backgroundColor = "#d3d3d3";
    document.getElementById("t10").style.color = "white";

} else {
    document.getElementById("t10").style.backgroundColor = "#77dd77";
    document.getElementById("t10").style.color = "white";

}

if (time11 == currentTime) {
    document.getElementById("t11").style.backgroundColor = "#ff6961";
    document.getElementById("t11").style.color = "white";

} else if (time11 < currentTime) {
    document.getElementById("t11").style.backgroundColor = "#d3d3d3";
    document.getElementById("t11").style.color = "white";

} else {
    document.getElementById("t11").style.backgroundColor = "#77dd77";
    document.getElementById("t11").style.color = "white";

}

if (time12 == currentTime) {
    document.getElementById("t12").style.backgroundColor = "#ff6961";
    document.getElementById("t12").style.color = "white";

} else if (time12 < currentTime) {
    document.getElementById("t12").style.backgroundColor = "#d3d3d3";
    document.getElementById("t12").style.color = "white";

} else {
    document.getElementById("t12").style.backgroundColor = "#77dd77";
    document.getElementById("t12").style.color = "white";

}

if (time13 == currentTime) {
    document.getElementById("t13").style.backgroundColor = "#ff6961";
    document.getElementById("t13").style.color = "white";

} else if (time13 < currentTime) {
    document.getElementById("t13").style.backgroundColor = "#d3d3d3";
    document.getElementById("t13").style.color = "white";

} else {
    document.getElementById("t13").style.backgroundColor = "#77dd77";
    document.getElementById("t13").style.color = "white";

}

if (time14 == currentTime) {
    document.getElementById("t14").style.backgroundColor = "#ff6961";
    document.getElementById("t14").style.color = "white";

} else if (time14 < currentTime) {
    document.getElementById("t14").style.backgroundColor = "#d3d3d3";
    document.getElementById("t14").style.color = "white";

} else {
    document.getElementById("t14").style.backgroundColor = "#77dd77";
    document.getElementById("t14").style.color = "white";

}

if (time15 == currentTime) {
    document.getElementById("t15").style.backgroundColor = "#ff6961";
    document.getElementById("t15").style.color = "white";

} else if (time15 < currentTime) {
    document.getElementById("t15").style.backgroundColor = "#d3d3d3";
    document.getElementById("t15").style.color = "white";

} else {
    document.getElementById("t15").style.backgroundColor = "#77dd77";
    document.getElementById("t15").style.color = "white";

}

if (time16 == currentTime) {
    document.getElementById("t16").style.backgroundColor = "#ff6961";
    document.getElementById("t16").style.color = "white";

} else if (time16 < currentTime) {
    document.getElementById("t16").style.backgroundColor = "#d3d3d3";
    document.getElementById("t16").style.color = "white";

} else {
    document.getElementById("t16").style.backgroundColor = "#77dd77";
    document.getElementById("t16").style.color = "white";

}

if (time17 == currentTime) {
    document.getElementById("t17").style.backgroundColor = "#ff6961";
    document.getElementById("t17").style.color = "white";

} else if (time17 < currentTime) {
    document.getElementById("t17").style.backgroundColor = "#d3d3d3";
    document.getElementById("t17").style.color = "white";

} else {
    document.getElementById("t17").style.backgroundColor = "#77dd77";
    document.getElementById("t17").style.color = "white";

}




var button7 = document.querySelector("#btn7");
var input7 = document.querySelector("#t7");
var button8 = document.querySelector("#btn8");
var input8 = document.querySelector("#t8");
var button9 = document.querySelector("#btn9");
var input9 = document.querySelector("#t9");
var button10 = document.querySelector("#btn10");
var input10 = document.querySelector("#t10");
var button11 = document.querySelector("#btn11");
var input11 = document.querySelector("#t11");
var button12 = document.querySelector("#btn12");
var input12 = document.querySelector("#t12");
var button13 = document.querySelector("#btn13");
var input13 = document.querySelector("#t13");
var button14 = document.querySelector("#btn14");
var input14 = document.querySelector("#t14");
var button15 = document.querySelector("#btn15");
var input15 = document.querySelector("#t15");
var button16 = document.querySelector("#btn16");
var input16 = document.querySelector("#t16");
var button17 = document.querySelector("#btn17");
var input17 = document.querySelector("#t17");

//Push to localstorage

button7.addEventListener("click", function(event){
    event.preventDefault();

    var ev7 = document.querySelector("#t7").value;

    localStorage.setItem("ev7", ev7);
    console.log("button clicked")
});

//Shows what's in localstorage and displays it.
function display7() {
    var ev7 = localStorage.getItem("ev7");
    document.querySelector("#t7").textContent = ev7;
};

display7();




button8.addEventListener("click", function(event){
    event.preventDefault();

    var ev8 = document.querySelector("#t8").value;

    localStorage.setItem("ev8", ev8);
    console.log("button clicked")
});

function display8() {
    var ev8 = localStorage.getItem("ev8");
    document.querySelector("#t8").textContent = ev8;
};

display8();






button9.addEventListener("click", function(event){
    event.preventDefault();

    var ev9 = document.querySelector("#t9").value;

    localStorage.setItem("ev9", ev9);
    console.log("button clicked")
});

function display9() {
    var ev9 = localStorage.getItem("ev9");
    document.querySelector("#t9").textContent = ev9;
};

display9();





button10.addEventListener("click", function(event){
    event.preventDefault();

    var ev10 = document.querySelector("#t10").value;

    localStorage.setItem("ev10", ev10);
    console.log("button clicked")
});

function display10() {
    var ev10 = localStorage.getItem("ev10");
    document.querySelector("#t10").textContent = ev10;
};

display10();






button11.addEventListener("click", function(event){
    event.preventDefault();

    var ev11 = document.querySelector("#t11").value;

    localStorage.setItem("ev11", ev11);
    console.log("button clicked")
});

function display11() {
    var ev11 = localStorage.getItem("ev11");
    document.querySelector("#t11").textContent = ev11;
};

display11();





button12.addEventListener("click", function(event){
    event.preventDefault();

    var ev12 = document.querySelector("#t12").value;

    localStorage.setItem("ev12", ev12);
    console.log("button clicked")
});

function display12() {
    var ev12 = localStorage.getItem("ev12");
    document.querySelector("#t12").textContent = ev12;
};

display12();






button13.addEventListener("click", function(event){
    event.preventDefault();

    var ev13 = document.querySelector("#t13").value;

    localStorage.setItem("ev13", ev13);
    console.log("button clicked")
});

function display13() {
    var ev13 = localStorage.getItem("ev13");
    document.querySelector("#t13").textContent = ev13;
};

display13();





button14.addEventListener("click", function(event){
    event.preventDefault();

    var ev14 = document.querySelector("#t14").value;

    localStorage.setItem("ev14", ev14);
    console.log("button clicked")
});

function display14() {
    var ev14 = localStorage.getItem("ev14");
    document.querySelector("#t14").textContent = ev14;
};

display14();




button15.addEventListener("click", function(event){
    event.preventDefault();

    var ev15 = document.querySelector("#t15").value;

    localStorage.setItem("ev15", ev15);
    console.log("button clicked")
});

function display15() {
    var ev15 = localStorage.getItem("ev15");
    document.querySelector("#t15").textContent = ev15;
};

display15();




button16.addEventListener("click", function(event){
    event.preventDefault();

    var ev16 = document.querySelector("#t16").value;

    localStorage.setItem("ev16", ev16);
    console.log("button clicked")
});

function display16() {
    var ev16 = localStorage.getItem("ev16");
    document.querySelector("#t16").textContent = ev16;
};

display16();





button17.addEventListener("click", function(event){
    event.preventDefault();

    var ev17 = document.querySelector("#t17").value;

    localStorage.setItem("ev17", ev17);
    console.log("button clicked")
});

function display17() {
    var ev17 = localStorage.getItem("ev17");
    document.querySelector("#t17").textContent = ev17;
};

display17();
