var clicksCount = 0;
var result = document.getElementById("resultDiv");

function showTime(){
    let currentDate = new Date();
    if (currentDate.getHours() <= 9) {
        var hours = "0" + currentDate.getHours();
    }
    else {
        var hours = currentDate.getHours();
    } 
    if (currentDate.getMinutes() <= 9) {
        var minutes = "0" + currentDate.getMinutes();
    }
    else {
        var minutes = currentDate.getMinutes();
    } 
    if (currentDate.getSeconds() <= 9) {
        var seconds = "0" + currentDate.getSeconds();
    }
    else {
        var seconds = currentDate.getSeconds();
    } 
    let time = hours + ":" + minutes + ":" + seconds;
    result.innerHTML = "The time is " + time;
}

function showDay(){
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let day = days[new Date().getDay()];
    result.innerHTML = "Today is " + day;
}

function showDoubleClicks(){
    clicksCount++;    
    result.innerHTML = "I have been double clicked " + Math.floor(clicksCount/2) + " times";
}


function showSum() {
    let n = document.getElementById("sumNum").value;
    if(n < 1 || n !== Math.floor(n))
    {
        result.innerHTML = "The sum is NaN";         
    }
    var sum = 0;
    for(let i = 1; i <= n; i++) {
        sum +=  i;
    }
    result.innerHTML= "The sum is " + sum;
}