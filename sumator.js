function takeSimbol() {
    let total = 0;
    let simbol = document.getElementById("simbol").value;
    let first = Number(document.getElementById("inputFirst").value);
    let second = Number(document.getElementById('inputSecond').value);

    if (simbol === '+') {
        total = Number(first + second);
    } else if (simbol === '-') {
        total = Number(first - second);
    } else if (simbol === '*') {
        total = Number(first * second);
    } else if (simbol === '/') {
        total = Number(first / second);
    } else if (simbol === '%') {
        total = Number(first % second);
    } else if (simbol === 'pow') {
        total = Math.pow(first, second);
    }
    document.getElementById('showResult').innerHTML = (`${total}`)

    if (total % 2 !== 0) {
        document.getElementById('showResult').innerHTML = (`${total.toFixed(2)}`)

    }


}
