(function() {
  "use strict";

  window.addEventListener("load", init);

  function init() {
    const encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleClick);

    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  function handleReset() {
    // Set the value of the text area to an empty string
    const inputText = document.getElementById("input-text");
    inputText.value = "";
  
    // Set the text content of the result paragraph to an empty string
    const resultParagraph = document.getElementById("result");
    resultParagraph.textContent = "";
  }

  function handleClick() {
    const inputText = document.getElementById("input-text").value;
    const encryptedText = shiftCipher(inputText);
    const output = document.getElementById("result");
    output.textContent = encryptedText;
  }

  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

})();