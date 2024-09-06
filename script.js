let thing

thing = new XMLHttpRequest();

thing.addEventListener("load", () => {
	document.getElementById("MOTD").innerText = "MOTD: " + thing.responseText.replace(/['"]+/g, '')
})

thing.open("get", "https://cookies2x2-default-rtdb.firebaseio.com/motd.json");

thing.send()