import React, { useEffect, useState } from 'react';

function TextAnimation() {
  let text = "Em desenvolvimento...";
  let index = 0;
  let aux = 0;

  useEffect(() => {
    let textElement = document.getElementById('text');

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
  }, [index, aux, text]);

  return <h2 id="text"></h2>;
}

export default TextAnimation;