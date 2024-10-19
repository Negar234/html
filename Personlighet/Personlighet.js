function showContactForm() {
    var mask = document.createElement("div")

    mask.id = "mask"

    mask.onclick = function () { mask.style.display = "none"; document.getElementById("contactForm").style.display = "none"; }
    document.getElementById("closeIcon").onclick = function () { mask.style.display = "none"; document.getElementById("contactForm").style.display = "none"; }
    document.getElementById("contactForm").style.left = (window.innerWidth - 400) / 2
    document.getElementById("contactForm").style.top = (window.innerHeight - 400) / 2



    document.getElementById("contactForm").style.display = "block"

    document.body.appendChild(mask)
}