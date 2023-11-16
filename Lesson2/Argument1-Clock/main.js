var rotateHourHand;
var rotateMinuteHand;
var rotateSecondHand;

function time(){
    var curDateClock = new Date();
    var hours = curDateClock.getHours();
    var minutes = curDateClock.getMinutes();
    var seconds = curDateClock.getSeconds();
    rotateHourHand = "rotate("+ (-90+hours*6).toString() +"deg)";
    rotateMinuteHand = "rotate("+ (-90+minutes*6).toString() +"deg)";
    rotateSecondHand = "rotate("+ (-90+seconds*6).toString() +"deg)";
    var p = document.getElementById('time');
    p.style.fontSize = "50px"
    p.style.color = "#fff";
    p.style.position = "absolute";
    p.style.display = "flex";
    p.style.top = "55%";
    p.style.left = "250px";
    function formatTime(time){
        if (time < 10) return "0" + time;
        else return time;
    }
    p.innerText = formatTime(hours) + ":" + formatTime(minutes);
    setTimeout(time,1000);
}time();

function day(){
    var options = { weekday: 'long', month: 'short', day: 'numeric' };
    var curDate = new Date();
    var p = document.getElementById('day');
    p.style.fontSize = "20px"
    p.style.color = "#fff";
    p.style.position = "absolute";
    p.style.display = "flex";
    p.style.top = "65%";
    p.style.left = "40%";
    p.innerText = curDate.toLocaleDateString("en-US", options);
    setTimeout(day,1000);
}day();

function watch(){
    var p = document.getElementById('watch');
    p.style.width = "600px";
    p.style.height = "600px";
    p.style.background = "#CC00FF";
    p.style.color = "#CC00FF";
    p.style.borderRadius = "30%";
    p.style.position = "relative";
    //p.style.alignItems = "center";
    //p.style.justifyContent = "center";
    p.style.display = "flex";
}watch();

function circle(){
    var p = document.getElementById('circle');
    p.style.width = "200px";
    p.style.height = "200px";
    p.style.background = "#660066";
    p.style.color = "#fff";
    p.style.borderRadius = "50%";
    p.style.position = "relative";
    p.style.alignItems = "center";
    p.style.justifyContent = "center";
    p.style.top = "20%";
    p.style.left = "200px"
    p.style.display = "flex";
    p.style.border = "2px solid #dadada";
    p.style.outline = "none";
    p.style.borderColor = "#FFCC66";
    p.style.boxShadow = "0px 0px 4px #4195fc";
}circle();

function hourHand(){
    var p = document.getElementById('hourHand');
    p.style.width = "40px";
    p.style.height = "5px";
    p.style.background = "#fff";
    p.style.color = "#fff"
    p.style.position = "absolute";
    p.style.transformOrigin = "0%";
    p.style.top = "100px";
    p.style.right = "60px";
    p.style.transform = rotateHourHand;
    setTimeout(hourHand,1000);
}hourHand();

function minutesHand(){
    var p = document.getElementById('minuteHand');
    p.style.width = "60px";
    p.style.height = "5px";
    p.style.background = "#222222";
    p.style.color = "#fff"
    p.style.position = "absolute";
    p.style.transformOrigin = "0%";
    p.style.top = "100px";
    p.style.right = "40px";
    p.style.transform = rotateMinuteHand;
    setTimeout(minutesHand,1000);
}minutesHand();

function secondHand(){
    var p = document.getElementById('secondHand');
    p.style.width = "80px";
    p.style.height = "3px";
    p.style.background = "#BB0000";
    p.style.color = "#fff"
    p.style.position = "absolute";
    p.style.transformOrigin = "0%";
    p.style.top = "100px";
    p.style.right = "20px";
    p.style.transform = rotateSecondHand;
    setTimeout(secondHand,1000);
}secondHand();

function centerDot(){
    var p = document.getElementById('centerDot');
    p.style.width = "20px";
    p.style.height = "20px";
    p.style.background = "#000";
    p.style.color = "#fff";
    p.style.borderRadius = "30px";
    p.style.position = "absolute";
}centerDot();


