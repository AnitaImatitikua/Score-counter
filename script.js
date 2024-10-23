let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let resetEl = document.getElementById("reset-home")

let score = 0

function homeAddOne(){
 score += 1
 homeScoreEl.textContent = score

}

function homeAddTwo(){
  score += 2
  homeScoreEl.textContent = score
}

function homeaddThree(){
  score += 3
  homeScoreEl.textContent = score
}

function resetAll(){
  score = 0
  homeScoreEl.textContent = score;
}

function guestAddOne() {
  score += 1
  guestScoreEl.textContent = score
}

function guestAddTwo(){
  score += 2
  guestScoreEl.textContent = score
}

function guestAddThree(){
  score += 3
  guestScoreEl.textContent = score
}

function resetAll2(){
  guestScoreEl.textContent = 0
  score = 0 
}



