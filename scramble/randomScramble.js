let big =
	'<tr><th>Scramble</th><th>Time &nbsp&nbsp</th><th>Scramble</th><th>Time &nbsp&nbsp</th><th>Scramble</th><th>Time &nbsp&nbsp</th></tr><tr>'
let value = document.location.href.split('?value=')[1] * 2

function get_random(list) {
	return list[Math.floor(Math.random() * list.length)]
}

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

function get_scramble(length) {
	const moves = ['R', 'F', 'U']
	const addons = ['', "'", '2']
	let scramble
	let randomMove = get_random(moves)
	let lastRandom
	for (let i = 0; i < length; i++) {
		scramble += randomMove + get_random(addons) + ' '
		lastRandom = randomMove
		while (randomMove == lastRandom) {
			randomMove = get_random(moves)
		}
	}
	scramble = scramble.split('undefined')[1]
	return scramble
}

for (let i = 0; i < value; i++) {
	if (i % 2 == 1) {
		big += '<td>' + get_scramble(randomInt(6, 9)) + '</td>'
	} else if (i % 2 == 0 && i != 0) {
		big += '<td></td>'
	}
	if (i % 6 == 0 && i != 0) {
		big += '</tr><tr>'
	}
}
big += '<td></td>'

document.getElementById('scramble').innerHTML = big
