let timer = 0;

function incrementTimer() {
    timer++;
    document.getElementById("timer").innerHTML = timer;
}

// Call incrementTimer() every 1000 milliseconds (1 second)
setInterval(incrementTimer, 1000);
// Increment the counter
document.getElementById("plus").addEventListener("click", function () {
    timer++;
    document.getElementById("timer").innerHTML = timer;
});

// Decrement the counter
document.getElementById("minus").addEventListener("click", function () {
    timer--;
    document.getElementById("timer").innerHTML = timer;
});
let likes = {};

document.getElementById("like").addEventListener("click", function () {
    if (!likes[timer]) {
        likes[timer] = 1;
    } else {
        likes[timer]++;
    }
    document.getElementById("likes").innerHTML = likes[timer];
});
let intervalId;

function pauseTimer() {
    clearInterval(intervalId);
    document.getElementById("pause").innerHTML = "Resume";
    document.getElementById("plus").disabled = true;
    document.getElementById("minus").disabled = true;
    document.getElementById("like").disabled = true;
}

document.getElementById("pause").addEventListener("click", pauseTimer);

// Start the timer
intervalId = setInterval(incrementTimer, 1000);
document.getElementById("restart").addEventListener("click", function () {
    timer = 0;
    document.getElementById("timer").innerHTML = timer;
    intervalId = setInterval(incrementTimer, 1000);
    document.getElementById("plus").disabled = false;
    document.getElementById("minus").disabled = false;
    document.getElementById("like").disabled = false;
    document.getElementById("pause").innerHTML = "Pause";
});
let comments = [];

document.getElementById("submit").addEventListener("click", function () {
    let comment = document.getElementById("comment").value;
    comments.push(comment);
    document.getElementById("comments").innerHTML = comments.join("<br>");
});
