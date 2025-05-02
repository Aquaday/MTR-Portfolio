import {darkMode, wackyMode} from "./global/script.js"

const darkModeButton = document.querySelector(".darkModeButton")
darkModeButton.addEventListener("click", darkMode)

const wackyButton = document.querySelector(".wackyButton")
wackyButton.addEventListener("click", wackyMode)



let designsArray = [
    {
        image: "stone.png",
        name: "rock-paper-scissors",
        info: "Stein saks papir med ting på",
        gitLink : "https://rock-paper-scissors-eight-snowy.vercel.app/",
        stackLink: "https://stackblitz.com/~/github.com/Aquaday/rock-paper-scissors"
    },
    {
        image: "stone.png",
        name: "Orange Armchair",
        info: "An orange armchair with matching footrest",
        gitLink : "https://rock-paper-scissors-eight-snowy.vercel.app/",
        stackLink: ""
    },
    {
        image: "stone.png",
        name: "Orange Armchair",
        info: "An orange armchair with matching footrest",
        gitLink : "https://rock-paper-scissors-eight-snowy.vercel.app/",
        stackLink: ""
    },
    {
        image: "stone.png",
        name: "Orange Armchair",
        info: "An orange armchair with matching footrest",
        gitLink : "https://rock-paper-scissors-eight-snowy.vercel.app/",
        stackLink: ""
    }
]

let workArray = [
    {
        image: "stone.png",
        name: "Orange Armchair",
        info: "An orange armchair with matching footrest",
        gitLink : "https://rock-paper-scissors-eight-snowy.vercel.app/",
        stackLink: "https://stackblitz.com/~/github.com/Aquaday/rock-paper-scissors"
    },
    {
        image: "stone.png",
        name: "Orange Armchair",
        info: "An orange armchair with matching footrest",
        gitLink : "https://rock-paper-scissors-eight-snowy.vercel.app/",
        stackLink: ""
    },
    {
        image: "stone.png",
        name: "Orange Armchair",
        info: "An orange armchair with matching footrest",
        gitLink : "https://rock-paper-scissors-eight-snowy.vercel.app/",
        stackLink: ""
    }

]


let otherArray = [
    {
        image: "stone.png",
        name: "Orange Armchair",
        info: "An orange armchair with matching footrest",
        gitLink : "https://rock-paper-scissors-eight-snowy.vercel.app/",
        stackLink: "https://stackblitz.com/~/github.com/Aquaday/rock-paper-scissors"
    },
    {
        image: "stone.png",
        name: "Orange Armchair",
        info: "An orange armchair with matching footrest",
        gitLink : "https://rock-paper-scissors-eight-snowy.vercel.app/",
        stackLink: ""
    },
    {
        image: "stone.png",
        name: "Orange Armchair",
        info: "An orange armchair with matching footrest",
        gitLink : "https://rock-paper-scissors-eight-snowy.vercel.app/",
        stackLink: ""
    },
    {
        image: "stone.png",
        name: "Orange Armchair",
        info: "An orange armchair with matching footrest",
        gitLink : "https://rock-paper-scissors-eight-snowy.vercel.app/",
        stackLink: ""
    },
    {
        image: "stone.png",
        name: "Orange Armchair",
        info: "An orange armchair with matching footrest",
        gitLink : "https://rock-paper-scissors-eight-snowy.vercel.app/",
        stackLink: ""
    },
    {
        image: "stone.png",
        name: "Orange Armchair",
        info: "An orange armchair with matching footrest",
        gitLink : "https://rock-paper-scissors-eight-snowy.vercel.app/",
        stackLink: ""
    }
]

let chosenArrayLength = 0
let chosenArray = ""

let showDesigns = document.querySelector("#designsButton")
let showWork = document.querySelector("#workButton")
let showOther = document.querySelector("#otherButton")

showDesigns.addEventListener("click", () => {
    chosenArrayLength = designsArray.length
    chosenArray = designsArray
    placeElements()
})

showWork.addEventListener("click", () => {
    chosenArrayLength = workArray.length
    chosenArray = workArray
    placeElements()
})

showOther.addEventListener("click", () => {
    chosenArrayLength = otherArray.length
    chosenArray = otherArray
    placeElements()
})


function placeElements() {
    let arrayNumber = 0
    const displayContent = document.querySelector("#displayContent")
    displayContent.innerHTML = ""
    for (let i = 0; i < chosenArrayLength; i++ ) {
        let divElement = document.createElement("div")
        divElement.classList.add("divElement")
        divElement.innerHTML = ' <img src="' + chosenArray[arrayNumber].image +
            '"><div> <div> <h3> '
             +  chosenArray[arrayNumber].name 
             + ' </h3>'
             + '<p>' 
             + chosenArray[arrayNumber].info 
             +'</p></div>'
             + '<button><a href="' 
             + chosenArray[arrayNumber].gitLink  
             + '">Link til nettsiden</a></button>'
             + '<button><a href="' 
             + chosenArray[arrayNumber].gitLink 
             + '">Link til GitHub</a></button>'
             + '</div></div>' 
        displayContent.appendChild(divElement)
        arrayNumber = arrayNumber + 1
        
    }
}

placeElements()
