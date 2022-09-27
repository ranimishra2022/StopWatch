const timer = document.querySelector('.timer');
var hr = 0;
var min = 0;
var sec = 0;
var stopwatch = true;

function startTimer(){
    if(stopwatch==true){
        stopwatch = false;
        timercycle();
    }
}
function timercycle(){
  if(stopwatch==false){
    hr = parseInt(hr);
    min = parseInt(min);
    sec = parseInt(sec);
 sec = sec + 1;
    if(sec==60){
        min = min + 1;
        sec = 0;
    }
    if(min==60){
        hr = hr + 1;
        min = 0;
        sec = 0;
    }
    if(sec<10){
        sec = '0'+sec;
    }
    if(min<10){
        min = '0'+ min;
    }
    if(hr<10){
        hr = '0'+hr;
    }

    timer.innerHTML = hr + ":" + min + ":" + sec;

    setTimeout("timercycle()",1000);
  }
}
function stopTimer(){
    if(stopwatch==false){
        stopwatch = true;
    }
}
function resetTimer(){
    timer.innerHTML = "00:00:00";
        stopwatch = true;
        hr = 0;
        min = 0;
        sec = 0;
    
}