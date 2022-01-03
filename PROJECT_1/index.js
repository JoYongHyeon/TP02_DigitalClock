
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
    let seconds     = document.querySelector('#seconds');
    let tens        = document.querySelector('#tens');
    let second = 00;
    let ms     = 00;

    //  업데이트 상황
    setInterval(()=> 
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


   
        
        // if(ms > 99)
        // {
        //     ms = 0;
        //     second += 1;

        //     if(second < 10)
        //     {
        //         seconds.innerText = "0" + second;
        //     }
        //     else{
        //         seconds.innerText = second;
        //     }         
        // }

    }, 10);
}


function timeStop()
{
    // 종료할땐 clearInterval 함수쓰면될듯
    alert('stop');
}
function timereset()
{
    alert('Reset');
}

       
        
// setInterval(()=> 
//     {
//         tens.innerText = ms;
//         ms += 1;
        
//         if(ms > 99)
//         {
//             ms = 0;
//             second += 1;

//             if(second < 10)
//             {
//                 seconds.innerText = "0" + second;
//             }
//             else{
//                 seconds.innerText = second;
//             }         
//         }

//     }, 10);