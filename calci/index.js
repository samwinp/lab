
function getVal(value) {
    e  = document.getElementById('cal')
    e.value = e.value + value
}

function calculate() {
    e = document.getElementById('cal');
    e.value = eval(e.value)
}

function clearScr() {
    e.value = ""
}