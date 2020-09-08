// timeout using a promise, for use with async/await

function delay (wait = 250) {
	return new Promise((resolve) => {
		setTimeout(() => resolve(undefined), wait)
	})
}

export default delay