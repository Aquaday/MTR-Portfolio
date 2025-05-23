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
        websiteLink : "https://goodbrief-foundation-furnitures.vercel.app/",
        gitLink: "https://github.com/Aquaday/Goodbrief---Foundation-Furnitures"
    },
    {
        image: "designImages/Fjellturerinorge.png",
        name: "Fjellturer i norge",
        info: "First website created from Kodeloftet course",
        websiteLink : "https://first-website-fjellturer-i-norge.vercel.app/",
        gitLink: "https://github.com/Aquaday/kodeloftet-oppgave-3-plan-and-create-website"
    },
    {
        image: "designImages/MTR portfoilo.png",
        name: "This website",
        info: "This website",
        websiteLink : "https://mtr-portfolio-chi.vercel.app/",
        gitLink: "https://github.com/Aquaday/MTR-Portfolio"
    }
]

let workArray = [
    // {
    //     image: "designImages/FoundationFurnitures.png",
    //     name: "Foundation Furnitures",
    //     info: "A design project, idea from Goodbrief",
    //     websiteLink : "https://goodbrief-foundation-furnitures.vercel.app/",
    //     gitLink: "https://github.com/Aquaday/Goodbrief---Foundation-Furnitures"
    // },
    // {
    //     image: "designImages/Fjellturerinorge.png",
    //     name: "Fjellturer i norge",
    //     info: "First website created from Kodeloftet course",
    //     websiteLink : "https://first-website-fjellturer-i-norge.vercel.app/",
    //     gitLink: "https://github.com/Aquaday/kodeloftet-oppgave-3-plan-and-create-website"
    // }

]


let otherArray = [
    {
        image: "otherImages/javascript space invaders.png",
        name: "Space Invaders",
        info: "Simple Space Invaders game",
        websiteLink : "https://javascript-space-invaders.vercel.app/",
        gitLink: "https://github.com/Aquaday/Javascript-Space-Invaders"
    },
    {
        image: "otherImages/javascript snake.png",
        name: "Javascript snake",
        info: "Simple javascript snake game",
        websiteLink : "https://snake-javascript-peach.vercel.app/",
        gitLink: "https://github.com/Aquaday/snake-javascript"
    },
    {
        image: "otherImages/RockPaperScissors.png",
        name: "Rock paper scissors",
        info: "Rock paper scissors, 4 different versions",
        websiteLink : "https://rock-paper-scissors-eight-snowy.vercel.app/",
        gitLink: "https://github.com/Aquaday/rock-paper-scissors"
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

// open others
otherPressed = true
chosenArrayLength = otherArray.length
chosenArray = otherArray
otherArrow.setAttribute('class', 'flipArrow')
showOther.style.backgroundColor = "var(--white)"
placeElements()

showDesigns.addEventListener("click", () => {
    if (otherPressed === true) {
        otherArrow.setAttribute('class', 'flipArrowBack')
        otherPressed = false
        displayContent.innerHTML = ""
        showOther.style.backgroundColor = ""
    }
    if (workPressed === true) {
        workArrow.setAttribute('class', 'flipArrowBack')
        workPressed = false
        displayContent.innerHTML = ""
        showWork.style.backgroundColor = ""
    }
    if (designPressed === true) {
        designArrow.setAttribute('class', 'flipArrowBack')
        designPressed = false
        displayContent.innerHTML = ""
        showDesigns.style.backgroundColor = ""
    } else {
    chosenArrayLength = designsArray.length
    chosenArray = designsArray
    showDesigns.style.backgroundColor = "var(--white)"
    designArrow.setAttribute('class', 'flipArrow')
    designPressed = true
    placeElements()
}
})

showWork.addEventListener("click", () => {
    if (otherPressed === true) {
        otherArrow.setAttribute('class', 'flipArrowBack')
        otherPressed = false
        displayContent.innerHTML = ""
        showOther.style.backgroundColor = ""
    }
    if (designPressed === true) {
        designArrow.setAttribute('class', 'flipArrowBack')
        designPressed = false
        displayContent.innerHTML = ""
        showDesigns.style.backgroundColor = ""
    } 
    if (workPressed === true) {
        workArrow.setAttribute('class', 'flipArrowBack')
        workPressed = false
        displayContent.innerHTML = ""
        showWork.style.backgroundColor = ""
    } else {
    workPressed = true
    chosenArrayLength = workArray.length
    chosenArray = workArray
    workArrow.setAttribute('class', 'flipArrow')
    showWork.style.backgroundColor = "var(--white)"
    placeElements()
}
})

showOther.addEventListener("click", () => {
    if (workPressed === true) {
        workArrow.setAttribute('class', 'flipArrowBack')
        workPressed = false
        displayContent.innerHTML = ""
        showWork.style.backgroundColor = ""
    }
    if (designPressed === true) {
        designArrow.setAttribute('class', 'flipArrowBack')
        designPressed = false
        displayContent.innerHTML = ""
        showDesigns.style.backgroundColor = ""
    } 
    if (otherPressed === true) {
        otherArrow.setAttribute('class', 'flipArrowBack')
        otherPressed = false
        displayContent.innerHTML = ""
        showOther.style.backgroundColor = ""
    } else {
        otherPressed = true
    chosenArrayLength = otherArray.length
    chosenArray = otherArray
    otherArrow.setAttribute('class', 'flipArrow')
    showOther.style.backgroundColor = "var(--white)"
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
            '"> <h3> '
             +  chosenArray[arrayNumber].name 
             + ' </h3>'
             + '<p>' 
             + chosenArray[arrayNumber].info 
             +'</p> <div class="displayContentButtons">'
             + '<a href="' 
             + chosenArray[arrayNumber].websiteLink  
             + '">Link to Website</a>'
             + '<a href="' 
             + chosenArray[arrayNumber].gitLink 
             + '">Link to GitHub</a></div>'
              
        displayContent.appendChild(divElement)
        arrayNumber = arrayNumber + 1
        
    }
}
}

placeElements()
