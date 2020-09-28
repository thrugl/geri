import { compose, converge, curry } from 'ramda'

const tikka = converge(curry, [compose])

export default tikka