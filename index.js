import {darkMode, wackyMode} from "./global/script.js"

const darkModeButton = document.querySelector(".darkModeButton")
darkModeButton.addEventListener("click", darkMode)

const wackyButton = document.querySelector(".wackyButton")
wackyButton.addEventListener("click", wackyMode)



let designsArray = [
    {
        image: "images/Orangearmchair.jpg",
        name: "Orange Armchair",
        info: "An orange armchair with matching footrest",
        link: "https://rock-paper-scissors-eight-snowy.vercel.app/",
        stackLink: ""
    },
    {
        image: "images/Orangearmchair.jpg",
        name: "Orange Armchair",
        info: "An orange armchair with matching footrest",
        link: "https://rock-paper-scissors-eight-snowy.vercel.app/",
        stackLink: ""
    },
    {
        image: "images/Orangearmchair.jpg",
        name: "Orange Armchair",
        info: "An orange armchair with matching footrest",
        link: "https://rock-paper-scissors-eight-snowy.vercel.app/",
        stackLink: ""
    },
    {
        image: "images/Orangearmchair.jpg",
        name: "Orange Armchair",
        info: "An orange armchair with matching footrest",
        link: "https://rock-paper-scissors-eight-snowy.vercel.app/",
        stackLink: ""
    },
]

let screenWidth = screen.width
let arrayWidth = 0


let arrayNumber = 0
function placeElements() {
    if (screenWidth < 800) {
        arrayWidth = 1
    } else if (screenWidth < 1050) {
        arrayWidth = 2
    } else if (screenWidth < 1450) {
        arrayWidth = 3
    } else if (screenWidth < 2000) {
        arrayWidth = 4
    } else {
        arrayWidth= 6
    }
console.log(screenWidth, arrayWidth)
    const productsPreviewCard = document.querySelector(".productsPreviewCards")
    productsPreviewCard.innerHTML = ""
    for (let i = 0; i < arrayWidth; i++ ) {
        let divElement = document.createElement("div")
        divElement.classList.add("productsCard")
        divElement.innerHTML = ' <img src="' + productArray[arrayNumber].furnitureImage + '" width="100%">' + 
            '<div class="infoCardPlacement"> <div class="infoCard"> <h3> '
             +  productArray[arrayNumber].name 
             + ' </h3>'
             + '<p>' + productArray[arrayNumber].info +'</p></div>'
             + '<div class="ratingCard"><h5>User Rating</h5><p>' 
             +  productArray[arrayNumber].rating + '</p> </div><div class="buttonCard"><button>Order now</button></div></div>'
        productsPreviewCard.appendChild(divElement)
        arrayNumber = arrayNumber + 1
        
    }
    arrayNumber = arrayNumber - arrayWidth
    console.log(arrayNumber)
}

placeElements()

let shiftLeft = document.querySelector("#shiftLeft")
let shiftRight = document.querySelector("#shiftRight")

function shiftLeftFunction() {
    if (arrayNumber >= 1) {
        arrayNumber -= 1
        placeElements()
    }
}
console.log(productArray.length)
function shiftRightFunction() {
    if (arrayNumber < productArray.length - arrayWidth) {
    arrayNumber += 1
    placeElements()}
}

shiftLeft.addEventListener("click", shiftLeftFunction)
shiftRight.addEventListener("click", shiftRightFunction)