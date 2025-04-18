import {darkMode, wackyMode} from "./global/script.js"

const darkModeButton = document.querySelector(".darkModeButton")
darkModeButton.addEventListener("click", darkMode)

const wackyButton = document.querySelector(".wackyButton")
wackyButton.addEventListener("click", wackyMode)

