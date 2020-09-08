function unixTime (date?: Date) {
	return Math.round((date ?? new Date()).getTime() / 1000)
}

export default unixTime