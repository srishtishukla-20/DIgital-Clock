function clock(){
    var hours=document.getElementById("hour");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var ampm=document.getElementById("ampm");
    
    var h=new Date().getHours();
    var m=new Date().getMinutes();
    var s=new Date().getSeconds();
    var am = "AM";
    
    if (h>12){
        h=h-12;
        var am="PM"
    }
    if (h == 0) {
        hr = 12;
        am_pm = "AM";
    }
    if (h<10){
        h="0"+h
    }
    if (m<10){
        m="0"+m
    }
    if (s<10){
        s="0"+s
    }
      
    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
    ampm.innerHTML = am;
    }
    var interval=setInterval(clock,1000);

function initiate(){
    if(check===true){
        check=false;
        clear=setInterval(start,10);
        }
}
    
function stop(){
    check=true;
    clearInterval(clear);
}
    
function reset(){
    msec=0;
    seconds=0;
    minutes=0;
    check=true;
    clearInterval(clear);
    stopwatch.innerHTML='00:00:00';
}
