//Home Score//
let homeScore = 0
let homeScoreEl = document.getElementById("home-score") 

function homeAdd1() {
      homeScore += 1
       homeScoreEl.textContent = homeScore
       updateLeader()
}

function homeAdd2() {
      homeScore += 2
       homeScoreEl.textContent = homeScore
       updateLeader()
}

function homeAdd3() {
      homeScore += 3
       homeScoreEl.textContent = homeScore
       updateLeader()
}

//Guest Score//
let guestScore = 0
let guestScoreEl = document.getElementById("guest-score") 


function guestAdd1() {
      guestScore += 1
       guestScoreEl.textContent =  guestScore
       updateLeader()
}

function guestAdd2() {
      guestScore += 2
       guestScoreEl.textContent =  guestScore
       updateLeader()
}

function guestAdd3() {
      guestScore += 3
       guestScoreEl.textContent =  guestScore
       updateLeader()
}


//Leader highlights
function updateLeader() {
    // remove highlight from both first
    homeScoreEl.classList.remove("leader")
    guestScoreEl.classList.remove("leader")

    if (homeScore > guestScore) {
        homeScoreEl.classList.add("leader")
    } else if (guestScore > homeScore) {
        guestScoreEl.classList.add("leader")
    }
    // if they are equal, nobody has the leader class
}


// Home Fouls//

let homeFouls = 0
let homeFoulsEl = document.getElementById("home-foul-value") 

function homeFoulMinus() {
    if (homeFouls > 0){
    homeFouls -= 1
    }
    homeFoulsEl.textContent = homeFouls
}

function homeFoulPlus() {
    homeFouls += 1
    homeFoulsEl.textContent = homeFouls
}

// Guest Fouls//

let guestFouls = 0
let guestFoulsEl = document.getElementById("guest-foul-value") 

function guestFoulMinus() {
    if (guestFouls > 0){
    guestFouls -= 1
    }
    guestFoulsEl.textContent = guestFouls
}

function guestFoulPlus() {
    guestFouls += 1
    guestFoulsEl.textContent = guestFouls
}

//Period//

let period = 0
let periodEl = document.getElementById("period-value")

function periodMinus() {
    if (period > 0) {
        period -= 1
    }
    periodEl.textContent = period
}

function periodPlus() {
    period += 1
    periodEl.textContent = period
}

// TIMER
let minutes = 59
let seconds = 0
let timerRunning = false
let timerInterval = null

let startTimerEl = document.getElementById("start-btn")
let minutesEl = document.getElementById("minutes")
let secondsEl = document.getElementById("seconds")

// show initial time
minutesEl.textContent = "59"
secondsEl.textContent = "00"

function startTimer() {
    if (timerRunning === false) {
        timerRunning = true
        timerInterval = setInterval(updateTimer, 1000)
        startTimerEl.textContent = "Pause"
        //button is red when running
        startTimerEl.style.backgroundColor = "#F94f6d"
        startTimerEl.style.borderColor = "#fff"
    } else {
        timerRunning = false
        clearInterval(timerInterval)
        startTimerEl.textContent = "Start"
        //reset button color when paused
        startTimerEl.style.backgroundColor = "#392B93"
        startTimerEl.style.borderColor = "#fff"
    }
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        // stop at 00:00
        clearInterval(timerInterval)
        timerRunning = false
        startTimerEl.textContent = "Start"
        return
    }

    if (seconds === 0) {
        minutes -= 1
        seconds = 59
    } else {
        seconds -= 1
    }

    minutesEl.textContent = formatNumber(minutes)
    secondsEl.textContent = formatNumber(seconds)
}

function formatNumber(num) {
    if (num < 10) {
        return "0" + num
    } else {
        return num
    }
}

//New Game

function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    
    period = 0
    periodEl.textContent = 0
    
    homeFouls = 0
    guestFouls = 0
    homeFoulsEl.textContent = 0
    guestFoulsEl.textContent = 0
    
    minutes = 59
    seconds = 0
    clearInterval(timerInterval)
    timerRunning = false
    startTimerEl.textContent = "Start"
    // Reset button styling in case timer was running when New Game was clicked
    startTimerEl.style.backgroundColor = "#392B93"
    startTimerEl.style.borderColor = "#fff"
    
    minutesEl.textContent = "59"
    secondsEl.textContent = "00"
    
    updateLeader()
}