// 

function copyToClipboard (value: string): void {
	const id = 'clipboard-dummy'
	let $ = document.getElementById(id)

	if (!$) {
		$ = document.createElement('textarea')
		$.setAttribute('id', id)
		$.style.position = 'absolute'
		$.style.left = '-100px'
		document.body.appendChild($)
	}
	//@ts-ignore
	$.value = value
	//@ts-ignore
	$.select()
	document.execCommand('copy')
}

export default copyToClipboard