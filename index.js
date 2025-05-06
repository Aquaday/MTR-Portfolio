import {darkMode, wackyMode} from "./global/script.js"

const darkModeButton = document.querySelector(".darkModeButton")
darkModeButton.addEventListener("click", darkMode)

const wackyButton = document.querySelector(".wackyButton")
wackyButton.addEventListener("click", wackyMode)



let designsArray = [
    {
        image: "designImages/FoundationFurnitures.png",
        name: "Foundation Furnitures",
        info: "A design project, idea from Goodbrief",
        websiteLink : "https://goodbrieffoundationfurnitures.vercel.app/",
        gitLink: "https://github.com/Aquaday/Goodbrief---Foundation-Furnitures"
    },
    {
        image: "designImages/Fjellturerinorge.png",
        name: "Fjellturer i norge",
        info: "First website created from Kodeloftet course",
        websiteLink : "https://first-website-fjellturer-i-norge.vercel.app/",
        gitLink: "https://github.com/Aquaday/kodeloftet-oppgave-3-plan-and-create-website"
    }
]

let workArray = [

]


let otherArray = [
    {
        image: "otherImages/RockPaperScissors.png",
        name: "rock-paper-scissors",
        info: "Stein saks papir med ting på",
        websiteLink : "https://rock-paper-scissors-eight-snowy.vercel.app/",
        gitLink: "https://stackblitz.com/~/github.com/Aquaday/rock-paper-scissors"
    },
    {
        image: "otherImages/t-rex-run.png",
        name: "T-Rex run/Dino game",
        info: "Jump over obstacles and get a new high score!",
        websiteLink : "https://javascript-t-rex-run.vercel.app/",
        gitLink: "https://github.com/Aquaday/javascript-t-rex-run"
    },
    {
        image: "otherImages/CatAndChuckNorris.png",
        name: "Cat fact and Chuck Norris jokes",
        info: "Get 10 cat facts, and get a random Chuck Norris joke when you press the button!",
        websiteLink : "https://oppgave-5-kodeloftet-api.vercel.app/",
        gitLink: "https://github.com/Aquaday/Oppgave-5-kodeloftet-API"
    }

]



let chosenArrayLength = 0
let chosenArray = ""

let showDesigns = document.querySelector("#designsButton")
let showWork = document.querySelector("#workButton")
let showOther = document.querySelector("#otherButton")
let designArrow = document.querySelector("#designArrow")
let workArrow = document.querySelector("#workArrow")
let otherArrow = document.querySelector("#otherArrow")

let designPressed = false
let workPressed = false
let otherPressed = false

showDesigns.addEventListener("click", () => {
    if (designPressed === true) {
        designArrow.setAttribute('class', 'flipArrowBack')
        designPressed = false
        displayContent.innerHTML = ""
    } else {
    chosenArrayLength = designsArray.length
    chosenArray = designsArray
    designArrow.setAttribute('class', 'flipArrow')
    designPressed = true
    placeElements()
}
})

showWork.addEventListener("click", () => {
    if (workPressed === true) {
        workArrow.setAttribute('class', 'flipArrowBack')
        workPressed = false
        displayContent.innerHTML = ""
    } else {
        workPressed = true
    chosenArrayLength = workArray.length
    chosenArray = workArray
    workArrow.setAttribute('class', 'flipArrow')
    placeElements()
}
})

showOther.addEventListener("click", () => {
    if (otherPressed === true) {
        otherArrow.setAttribute('class', 'flipArrowBack')
        otherPressed = false
        displayContent.innerHTML = ""
    } else {
        otherPressed = true
    chosenArrayLength = otherArray.length
    chosenArray = otherArray
    otherArrow.setAttribute('class', 'flipArrow')
    placeElements()
}
})


function placeElements() {
    if (chosenArrayLength === 0) {
        displayContent.innerHTML = "Nothing here yet!"
    } else {
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
             + chosenArray[arrayNumber].websiteLink  
             + '">Link til nettsiden</a></button>'
             + '<button><a href="' 
             + chosenArray[arrayNumber].gitLink 
             + '">Link til GitHub</a></button>'
             + '</div></div>' 
        displayContent.appendChild(divElement)
        arrayNumber = arrayNumber + 1
        
    }
}
}

placeElements()
