var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = [ "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function getDeck()
{
	let deck = [];

	for(let i = 0; i < suits.length; i++)
	{
		for(let x = 0; x < values.length; x++)
		{
			let card = {value: values[x], suit: suits[i], score: x};
			deck.push(card);
		}
	}

	return deck;
}

export function shuffle(deck)
{
	// for 1000 turns
	// switch the values of two random cards
	for (let i = 0; i < 1000; i++)
	{
		let location1 = Math.floor((Math.random() * deck.length));
		let location2 = Math.floor((Math.random() * deck.length));
		let tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

export function getSuffledDeck() {
    const deck = getDeck();
	shuffle(deck)
    return deck;
}