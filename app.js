//Generate random letter

let cellLetter = document.querySelector("p")

function generateRandomLetter() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const randomNumber = Math.floor(Math.random() * letters.length)
  const randomLetter = letters[randomNumber]
  return randomLetter
}

cellLetter.innerHTML = generateRandomLetter();
