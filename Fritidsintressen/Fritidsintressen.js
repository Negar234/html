function showPanel(header) {
    header.parentElement.getElementsByTagName("img")[0].style.display = "block"
    header.parentElement.getElementsByTagName("p")[0].style.display = "block"

}

function setMyTimer() {
    setInterval(changeKartImage, 1000);
    setInterval(changeBadmintonImage, 1000);
    setInterval(changeBokImage, 1000);
}

let kartIndex = 1
function changeKartImage() {
    if (kartIndex % 2 == 1)
        document.getElementById("p3").style.backgroundImage = "url('../images/go kart1.jpg')"
    else
        document.getElementById("p3").style.backgroundImage = "url('../images/go kart.jpg')"

    ++kartIndex
}

let badmintonIndex = 1
function changeBadmintonImage() {
    if (badmintonIndex % 2 == 1)
        document.getElementById("p1").style.backgroundImage = "url('../images/badminton.jpg')"
    else
        document.getElementById("p1").style.backgroundImage = "url('../images/badminton1.jpg')"

    ++badmintonIndex
}

let bokIndex = 1
function changeBokImage() {
    if (bokIndex % 2 == 1)
        document.getElementById("p2").style.backgroundImage = "url('../images/bok.jpg')"
    else
        document.getElementById("p2").style.backgroundImage = "url('../images/bok1.jpg')"

    ++bokIndex
}