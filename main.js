var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

var startTimer = null;

function startInterval(){
    h = document.getElementById("hour");
    m = document.getElementById("minute");
    s = document.getElementById("sec");
    startTimer = setInterval(function() {
        timer();
    }, 1000);
}

function startCountDown() {
    startInterval();
}

function reset() {
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopInterval()
}

function timer() {
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
}
function stopInterval() {
    clearInterval(startTimer);
}