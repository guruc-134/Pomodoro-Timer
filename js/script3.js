// getting all the elements

//break  settings
var breakInc= document.getElementById('break-increment');
var breakDec= document.getElementById('break-decrement');
var breakLen= document.getElementById('break-length');

//session  settings
var sessionInc= document.getElementById('session-increment');
var sessionDec= document.getElementById('session-decrement');
var sessionLen= document.getElementById('session-length');

// timer display settings
var timerLbl=document.getElementById('timer-label');
const timeLeft=document.getElementById('time-left');


// clock settings
const startStop=document.getElementById('start-stop');
const reset=document.getElementById('reset')
var currentStartStop=false
var interval=10;

const styles=
{
    timerLabel:timerLbl.style
}
var createInterval=()=>  
{
    i=0
    interval=setInterval(()=>
    {
        i+=1
        if(currentStartStop)
        {
            timeLeft=document.getElementById('time-left');
            let time=timeLeft.innerHTML.split(':')
            let mm=time[0]
            let ss=time[1]
            if( ss==0 && mm==0)
            {
                clearInterval(interval)
                timeLeft.innerHTML='00:00'
                timeLeft.style.color='tomato'
            }
            else if(ss==0){
                mm--;
                ss=59
                timeLeft.innerHTML=`${mm}:${ss}`
            }
            else{
                ss--
                timeLeft.innerHTML=`${mm}:${ss}`
            }
            document.title=timeLeft.innerHTML
        }
    },1000*i)
}

// current start-pause state

// toggling start stop state 
startStop.addEventListener('click' , function()
{
    currentStartStop=!currentStartStop
    createInterval()
})

//calling the reset
reset.addEventListener('click',function()
{
    console.log('reset clicked');
    timeLeft.innerHTML=sessionLen.innerHTML+':00';
    currentStartStop=false
    timerLbl.style=styles.timerLabel
}
);

// increment the session
sessionInc.addEventListener('click' ,function(){
    let curLen=parseInt(sessionLen.innerHTML)
    if (curLen<60)
    sessionLen.innerHTML=curLen+1;
    timeLeft.innerHTML=sessionLen.innerHTML+':00';
    
})
// decrement the session
sessionDec.addEventListener('click' ,function(){
    let curLen=parseInt(sessionLen.innerHTML)
    if(curLen>1) sessionLen.innerHTML=curLen-1;
    timeLeft.innerHTML=sessionLen.innerHTML+':00';

})

// increment break len
breakInc.addEventListener('click' ,function(){
    let curLen=parseInt(breakLen.innerHTML)
    if (curLen<60)
    breakLen.innerHTML=curLen+1;
})

// decrement break len
breakDec.addEventListener('click' ,function(){
    let curLen=parseInt(breakLen.innerHTML)
    if (curLen>0)
    {
    breakLen.innerHTML=curLen-1;
    }
})