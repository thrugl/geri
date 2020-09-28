import sameText from './sameText'

const parseBool = (s: string): boolean|undefined => {
	const matches = sameText(s)

	if (matches('true')) return true
	if (matches('false')) return false
	
	return undefined
}

export default parseBool