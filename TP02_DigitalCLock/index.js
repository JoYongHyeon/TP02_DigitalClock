/*
    HTML 문서의 생명주기엔 다음과 같은 3가지 주요 이벤트가 관여한다.
    
    1. DOMContentLoaded - 브라우저가 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 발생한다.
    이미지 파일(<img>)이나 스타일시트 등의 기타 자원은 기다리지 않는다.

    2. load - HTML로 DOM 트리를 만드는게 완성되었을 뿐만 아니라 이미지, 스타일시트 같은
    외부 자원도 모두 불러오는 것이 끝났을 때 발생

    3. beforeunload/unload - 사용자가 페이지를 떠날 때 발생

    ※ DOMContentLoaded 이벤트는 document 객체에서 발생한다.
    그말은 즉 이 이벤트를 다루려면 addEventListenner를 사용해야한다.

    DOMContentLoaded 핸들러는 문서가 로드되었을때 실행된다. 핸들러 아래쪽에 위치한
    <img> 뿐만 아니라 모든 요소에 접근할 수 있다.
    그렇지만 이미지가 로드되는 것은 기다리지 않기때문에 사이즈를 찍어보면 0으로 나올것이다.

    오늘처음 DOMContentLoaded 이벤트를 접하면 그다지 복잡하지 않은 이벤트라 생각이 든다.
    "DOM 트리가 완성되면 DOMContentLoaded 이벤트가 발생한다." 라고 생각하기 때문이다.

    하지만 DOMContentLoaded에는 몇가지 특이사항이 있다.

    ※ DOMContentLoaded와 scripts
    브라우저는 HTML 문서를 처리하는 도중에 <script> 태그를 만나면, 
    DOM 트리 구성을 멈추고 <script>를 실행한다. 
    스크립트실행이 끝난 후에야 나머지 HTML 문서를 처리한다. 
    <script>에 있는 스크립트가 DOM 조작 관련 로직을 담고 있을 수 있기 때문에 이런 방지책이 만들어 졌다고한다.. 
    따라서 DOMContentLoaded 이벤트 역시 <script> 안에 있는 스크립트가 처리되고 난 후에 발생합니다.
*/
document.addEventListener("DOMContentLoaded", ()=>{
    const clock   = new Date();
    const hour    = clock.getHours();
    const minutes = clock.getMinutes();
    const seconds = clock.getSeconds();    

    showTime(hour, minutes, seconds);
});

// 시, 분, 초, AM or PM(위에서부터)
let hh;
let mm;
let ss;
let division;
function showTime(hour, minutes, seconds)
{
    hh = addZero(hour);
    mm = addZero(minutes);
    ss = addZero(seconds);
    division = hour > 12 ? "PM" : "AM";   

    interval = setInterval(calcTime, 1000);
}

    
// 한자리 시,분,초 0 삽입
function addZero(num)
{
    return num < 9 ? "0" + num : num;
}

// 시간 계산 및 화면 출력
function calcTime()
{
    ss++;
    
    if(hh > 12)
    {
        hh = hh - 12;
        division = division == "PM" ? division = "PM" : division == "AM" ? division = "PM" : division == "AM"; 
    }
    if(mm > 59)
    {
        mm = mm - 60;
        hh++;
    }
    if(ss > 59)
    {
        ss = ss - 60;
        mm++;
    }
    let clock = document.getElementById('clock');
    clock.innerText = hh + ":" + mm + ":" + ss +  division;
}