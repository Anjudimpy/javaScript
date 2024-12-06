const heading = document.createElement('h1');
heading.textContent = 'Time Interval';

const textEle = document.createElement('h2');
let sec = 0;
textEle.textContent =`${sec}`;

document.body.appendChild(heading);
document.body.appendChild(textEle);

const timer = setInterval(() =>{
    sec++;
    textEle.textContent = `${sec}`;

    if(sec >= 5){
        clearInterval(timer);
    }
}, 1000);