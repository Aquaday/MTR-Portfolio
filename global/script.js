let darkModeOn = false
let wackyModeState = false
function darkMode() {
    let darkModeButtonChange = document.querySelector(".darkModeButton")
    if (wackyModeState === true) {
        darkModeButtonChange.textContent = "Dark Mode"
        document.documentElement.style.setProperty('--black', '#000')
        document.documentElement.style.setProperty('--white', '#fff')
        document.documentElement.style.setProperty('--gray', '#888888')
        document.documentElement.style.setProperty('--lightgray', '#bbbbbb')
        document.documentElement.style.setProperty('--dark', '#023e8a')
        document.documentElement.style.setProperty('--lighter', '#0096c7')
        document.documentElement.style.setProperty('--lightest', '#ade8f4')
        wackyModeState = false
    } else {
        if (darkModeOn === false) {
        document.documentElement.style.setProperty('--black', '#fff')
        document.documentElement.style.setProperty('--white', '#000')
        document.documentElement.style.setProperty('--gray', '#bbbbbb')
        document.documentElement.style.setProperty('--lightgray', '#888888')
        document.documentElement.style.setProperty('--dark', '#ade8f4')
        document.documentElement.style.setProperty('--lighter', '#0096c7')
        document.documentElement.style.setProperty('--lightest', '#023e8a')
        darkModeOn = true
    } else {
        darkModeOn = false
        document.documentElement.style.setProperty('--black', '#000')
        document.documentElement.style.setProperty('--white', '#fff')
        document.documentElement.style.setProperty('--gray', '#888888')
        document.documentElement.style.setProperty('--lightgray', '#bbbbbb')
        document.documentElement.style.setProperty('--dark', '#023e8a')
        document.documentElement.style.setProperty('--lighter', '#0096c7')
        document.documentElement.style.setProperty('--lightest', '#ade8f4')
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
            document.documentElement.style.setProperty('--gray', colorHexArray[randomNumber])
            randomNumber = Math.floor(Math.random()* colorHexArray.length);
            document.documentElement.style.setProperty('--lightgray', colorHexArray[randomNumber])
            randomNumber = Math.floor(Math.random()* colorHexArray.length);
            document.documentElement.style.setProperty('--dark', colorHexArray[randomNumber])
            randomNumber = Math.floor(Math.random()* colorHexArray.length);
            document.documentElement.style.setProperty('--lighter', colorHexArray[randomNumber])
            randomNumber = Math.floor(Math.random()* colorHexArray.length);
            document.documentElement.style.setProperty('--lightest', colorHexArray[randomNumber])
        wackyModeState = true
}

export {darkMode, wackyMode}