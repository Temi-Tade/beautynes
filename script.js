var men =document.querySelector('.mobile-ul')
var over =document.querySelector('.overlay')

function addClass(icon){
    if (icon.getAttribute("class") === "fa-solid fa-bars") {
        icon.setAttribute("class", "fa-solid fa-times")
    } else {
        icon.setAttribute("class", "fa-solid fa-bars")
    }

    men.classList.toggle("hh")
    over.classList.toggle("hhh")
}