function bodyLoad() {
    setInterval(function () { setTimer() }, 1000)
}

function setTimer() {
    var d = new Date()
    document.getElementById("timer").innerHTML = d.toLocaleTimeString()
}

var leftSide = -1050
function showRollingPics() {
    document.getElementById("rollingPicsContainer").style.display = "block"

    $(this).animate({ left: "1000px" })

}

var isRollingOpen = false

$(document).ready(function () {

    $("#tabDiv").on("click", function () {

        if (!isRollingOpen) {
            if ($(window).width() > 600) {

                $("#newPanel").animate({ left: "0px" }, 1000)
            }
            else {
                $("#newPanel").animate({ top: "0px" }, 1000)
            }

            isRollingOpen = true
        }
        else {
            if ($(window).width() > 600) {

                $("#newPanel").animate({ left: "-1000px" }, 1000)
            }
            else {
                $("#newPanel").animate({ top: "-620px" }, 1000)
            }

            isRollingOpen = false
        }

    })


})