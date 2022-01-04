
window.onload = ()=>
{
    let btnMouseOn = document.querySelectorAll('.inOut');
    let btnMouseOnLength = btnMouseOn.length;

    for(var i=0; i < btnMouseOnLength; i ++)
    {
        btnMouseOn[i].addEventListener('mouseover', mouseOn);
        btnMouseOn[i].addEventListener('mouseout',  mouseOut);
    }
}
let second   = 00;
let ms       = 00;
let interval;

function mouseOn(e)
{
    this.style.backgroundColor = "white";
    this.style.color = "orange";
    // 배경색이 서서히 바뀜
    this.style.transitionDuration = "1s";
}

function mouseOut(e)
{
    this.style.backgroundColor = "orange";
    this.style.color = "white";
    this.style.transitionDuration = "1s";
}

function timeStart()
{
    // setInterval(function(){...}, 지연시간);
    // 1000 당 1초로 계산
    let seconds    = document.querySelector('#seconds');
    let tens       = document.querySelector('#tens');
    
    // (괄호)의 여부. 괄호가 있고 없고는 매우 큰차이이며 괄호가 있으면 함수를 호출한다는 것이다.
    // 괄호가 없다면 함수를 대입하고 있다고 생각하면 될 것 같다.
    // 이렇게 되면 startTimer 는 함수의 반환값인 return문을 반환하는게 아니고 자신이 참조하고 있는 함수의 참조값을 저장하게 된다.

    // ★나만의 결론★
    // startTimer() : function startTimer(){} 라는 함수를 호출,
    // startTimer   : function startTimer의 주소 값을 저장하는것. 포인터 같은 느낌이라고 우선 알아두고 가자! 
    // ※ 이 차이를 알지못해 setInterval 타이머의 0.01초마다 작동하지않고 처음에 딱 한번만 작동된것같다...
    clearInterval(interval);
    interval = setInterval(startTimer, 10);   
}

function startTimer()
{
    ms++;
        
        if(ms <= 9)
        {
            tens.innerText = "0" + ms;
        }
        if(ms > 9)
        {
            tens.innerText = ms;
        }
        if(ms > 99)
        {
            second++;
            seconds.innerText = "0" + second;

            ms = 0;
            tens.innerText = "0" + ms;
            
            if(second > 9)
            {
                seconds.innerText = second;
            }
        }
}

function timeStop()
{
    clearInterval(interval);
}
function timereset()
{
    clearInterval(interval);
    second = "00";
    ms     = "00";
    tens.innerText = ms;
    seconds.innerText = second;
}
