let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ampm = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampmEl = "AM"

    if ( h > 12){
        h = h - 12 ;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hr.innerText = h;
    min.innerText = m;
    sec.innerText = s;
    ampm.innerText = ampmEl;
    
    setTimeout(() => {
        updateClock();
        
    }, 1000);

}
updateClock();