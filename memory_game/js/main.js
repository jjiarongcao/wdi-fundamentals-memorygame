var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2) {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert ("You found a match! Congrats!");
		console.log("You found a match!");
	} else {
		alert ("Sorry :( Please try again!")
		console.log("Sorry, try again.");
		}
	}
}


function flipCard() {

	cardID = this.getAttribute('data-id');
	this.setAttribute('src',cards[cardID].cardImage);
	cardsInPlay.push(cards[cardID].rank);
	checkForMatch();

}

function createBoard () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

createBoard();
