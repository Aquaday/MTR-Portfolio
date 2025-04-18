let darkModeOn = false
let wackyModeState = false
function darkMode() {
    let darkModeButtonChange = document.querySelector(".darkModeButton")
    if (wackyModeState === true) {
        darkModeButtonChange.textContent = "Dark Mode"
        document.documentElement.style.setProperty('--black', '#000')
        document.documentElement.style.setProperty('--white', '#fff')
        document.documentElement.style.setProperty('--darkestblue', '#03045eff')
        document.documentElement.style.setProperty('--lightblue', '#90e0efff')
        wackyModeState = false
    } else {
        if (darkModeOn === false) {
            document.documentElement.style.setProperty('--black', '#fff')
            document.documentElement.style.setProperty('--white', '#000')
            document.documentElement.style.setProperty('--darkestblue', '#90e0efff')
            document.documentElement.style.setProperty('--lightblue', '#03045eff')
        darkModeOn = true
    } else {
        darkModeOn = false
        document.documentElement.style.setProperty('--black', '#000')
        document.documentElement.style.setProperty('--white', '#fff')
        document.documentElement.style.setProperty('--darkestblue', '#03045eff')
        document.documentElement.style.setProperty('--lightblue', '#90e0efff')
    }  

    }
}

// --darkestblue: #03045eff;
// --darkerblue: #0077b6ff;
// --middleblue: #00b4d8ff;
// --lightblue: #90e0efff;
// --white: #fff;
// --black: #000;



function wackyMode() {
        let darkModeButtonChange = document.querySelector(".darkModeButton")
            darkModeButtonChange.textContent = "Turn off"
        const colorHexArray = ["#03045eff", "#0077b6ff", "#00b4d8ff", "#90e0efff", "#fff", "#000","#ffb703","#fb8500","#780000","#a7c957","#ffc8dd"]
        let randomNumber = Math.floor(Math.random()* colorHexArray.length);
            document.documentElement.style.setProperty('--black', colorHexArray[randomNumber])
            randomNumber = Math.floor(Math.random()* colorHexArray.length);
            document.documentElement.style.setProperty('--white', colorHexArray[randomNumber])
            randomNumber = Math.floor(Math.random()* colorHexArray.length);
            document.documentElement.style.setProperty('--darkestblue', colorHexArray[randomNumber])
            randomNumber = Math.floor(Math.random()* colorHexArray.length);
            document.documentElement.style.setProperty('--lightblue', colorHexArray[randomNumber])
        wackyModeState = true
}

export {darkMode, wackyMode}