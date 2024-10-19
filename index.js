function bodyLoad() {
    setInterval(function () { setTimer() }, 1000)
}

function setTimer() {
    var d = new Date()
    document.getElementById("timer").innerHTML = d.toLocaleTimeString()
}