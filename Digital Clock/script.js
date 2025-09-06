function time() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    hour = hour>10 ? hour : "0" + hour;
    min = min>10 ? min : "0" + min;
    sec = sec>10 ? sec : "0" + sec;

    let timeString = `${hour}:${min}:${sec}`;
    document.querySelector(".clock").innerHTML = timeString;
}
time()
setInterval(time , 1000)