document.getElementById('submit').onclick = sendData

function sendData() {
	let value = document.getElementById('textBox').value
	let url =
		document.location.href.split('2x2scrambs')[0] + 'scramble?value=' + value
	document.location.href = url
}
