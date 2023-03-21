function makeBigger() {
	document.getElementById("input-text").style.fontSize = "24pt";
}

function applyStyles() {
    alert("The 'FancyShmancy' radio button has been selected!")
	var inputText = document.getElementById("input-text");
	if (document.getElementById("radio-fancy").checked) {
		inputText.style.fontWeight = "bold";
		inputText.style.color = "blue";
		inputText.style.textDecoration = "underline";
	}
	else {
		inputText.style.fontWeight = "normal";
		inputText.style.color = "black";
		inputText.style.textDecoration = "none";
	}
}

function makeMoo() {
	var inputText = document.getElementById("input-text");
	inputText.value = inputText.value.toUpperCase();
	var words = inputText.value.split(" ");
	for (var i = 0; i < words.length; i++) {
		if (words[i].endsWith(".")) {
			var lastWord = words[i].substring(0, words[i].length - 1);
			lastWord += "-Moo.";
			words[i] = lastWord;
		}
	}
	inputText.value = words.join(" ");
}




