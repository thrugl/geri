// returns a random number from range between min and max

function randomInt (min = 1, max = 100) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

export default randomInt