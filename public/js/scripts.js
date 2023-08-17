console.log('scripts.js loaded!');
const textElement = document.getElementById('text');
let text = "Em desenvolvimento...";
let index = 0;
let aux = 0;

function type() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (index >= 0) {
    textElement.textContent = text.substring(0, index);
    index--;
    setTimeout(erase, 100);
  } else {
    setTimeout(type, 500);
    aux++;
    if (aux % 2 == 0) {
      text = "Em desenvolvimento...";
    } else {
      text = "Under development...";
    }
  }
}

type();
