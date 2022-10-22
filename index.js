let firstCard, secondCard;
console.log(firstCard);
let cardsEl = document.querySelector(".cards");
let sumEl = document.querySelector(".sum");

let player = {
  name: "Krisztian",
  chips: 500,
};
let playerEl = document.querySelector(".player");
playerEl.innerText = player.name + " : $" + player.chips;
let myCards = [firstCard, secondCard];
console.log(myCards);
function newGame() {
  firstCard = Math.floor(Math.random() * 13) + 1;
  secondCard = Math.floor(Math.random() * 13) + 1;
  if (firstCard === 1) {
    firstCard = 11;
  } else if (firstCard === 11 || firstCard === 12 || firstCard === 13) {
    firstCard = 10;
  }
  if (secondCard === 1) {
    secondCard = 11;
  } else if (secondCard === 11 || secondCard === 12 || secondCard === 13) {
    secondCard = 10;
  }
  yourCards = firstCard + " " + secondCard;
  sum = firstCard + secondCard;
  cardsEl.innerText = "Cards: " + yourCards;
  sumEl.innerText = "Sum: " + sum;
}

function newCard() {
  let newCard = Math.floor(Math.random() * 13) + 1;
  if (newCard === 1) {
    newCard = 11;
  } else if (newCard === 11 || newCard === 12 || newCard === 13) {
    newCard = 10;
  }
  myCards.push(newCard);
  cardsEl.innerText += " " + newCard;
  sum += newCard;
  sumEl.innerText = "Sum: " + sum;
}
