let hr = 0, min = 0, sec = 0, count = 0;
let timer = false;
let interval;

function $id(id) { return document.getElementById(id); }

function start() {
    if (!timer) {
        timer = true;
        interval = setInterval(stopwatch, 10);
        $id('startPause').textContent = 'Pause';
        $id('startPause').className = 'stop';
    } else {
        stop();
    }
}


function stop() {
    timer = false;
    clearInterval(interval);
    $id('startPause').textContent = 'Start';
    $id('startPause').className = 'start';
}


function reset() {
    stop();
    hr = min = sec = count = 0;
    $id('time').textContent = '00:00:00.00';
    $id('laps').innerHTML = '';
}


function stopwatch() {
    count++;
    if (count === 100) { sec++; count = 0; }
    if (sec === 60) { min++; sec = 0; }
    if (min === 60) { hr++; min = 0; sec = 0; }
    updateDisplay();
}


function updateDisplay() {
    $id('time').textContent = `${hr.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}.${count.toString().padStart(2, '0')}`;
}


function lap() {
    const laps = $id('laps');
    const li = document.createElement('li');
    li.textContent = `${hr.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}.${count.toString().padStart(2, '0')}`;
    laps.appendChild(li);
}

$id('startPause').addEventListener('click', start);
$id('stop').addEventListener('click', stop);
$id('reset').addEventListener('click', reset);
$id('lap').addEventListener('click', lap);
$id('clear').addEventListener('click', clearLap);