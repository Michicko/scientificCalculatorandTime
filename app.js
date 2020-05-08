const screen = document.querySelector('.screen');
const btns = document.querySelectorAll('.btn');
const equals = document.querySelector('.eqls');
const powerBtn = document.querySelector('.pow');
const timeDisp = document.querySelector('.time-disp');

const showAmPm = true;

// Show time 
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        mins = today.getMinutes(),
        secs = today.getSeconds();

    // Get am or pm
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //  12 hours format
    hour = hour % 12 || 12;

    // Output time 
    timeDisp.innerHTML = `${hour}<span>:</span>${addZero(mins)}<span>:</span>${addZero(secs)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// add zeros to time
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


// Event Listeners for buttons
btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        // show numbers on screen
        screen.value += btn.value;

        // clear button
        if (btn.classList.contains('clr')) {
            screen.value = '';
            // Delete button
        } else if (btn.classList.contains('del')) {
            if (screen.value.length > 0) {
                screen.value = screen.value.slice(0, -1);
            }

            // Square root button
        } else if (btn.classList.contains('sqrt')) {
            let num = Math.floor(screen.value);
            screen.value = Math.sqrt(num);
            // square button
        } else if (btn.classList.contains('sqr')) {
            let num = screen.value;
            screen.value = num * num;
            // pi button
        } else if (btn.classList.contains('pi')) {
            screen.value += Math.PI;
            // sin button
        } else if (btn.classList.contains('sin')) {
            mathsTrig(Math.sin);
            // cos button
        } else if (btn.classList.contains('cos')) {
            mathsTrig(Math.cos);
            // tan button
        } else if (btn.classList.contains('tan')) {
            mathsTrig(Math.tan);
            // log button
        } else if (btn.classList.contains('log')) {
            logs(Math.log10);
            // ln button
        } else if (btn.classList.contains('ln')) {
            logs(Math.log);
            // factorial button
        } else if (btn.classList.contains('fact')) {
            factorial();
        }
    });
});

// equals button
equals.addEventListener('click', function (e) {
    if (e.target.className === 'eqls');
    screen.value = eval(screen.value);
})

// Ans for power button
equals.addEventListener('mousedown', function (e) {
    if (e.target.textContent === 'Ans') {
        // power button
        let b = screen.value[0];
        let p = screen.value[2];
        pow(b, p);
        e.target.textContent = "=";
    };
})

// power button
powerBtn.addEventListener('click', function () {
    equals.textContent = 'Ans';
})

// power
function pow(b, p) {
    let num = 1;
    for (p; p > 0; p--) {
        num *= b;
    }
    screen.value = num;
}

// Factorial
function factorial() {
    let fact = 1;
    let num = Math.floor(screen.value);
    for (num; num > 0; num--) {
        fact *= num;
    }
    screen.value = fact;
}

// Trigonometry functions
function mathsTrig(trig) {
    let num = Math.floor(screen.value);
    let deg = Math.PI / 180;
    screen.value = trig(deg * num).toFixed(9);
}

// logs
function logs(log) {
    let num = Math.floor(screen.value);
    screen.value = log(num).toFixed(9);
}


showTime();
