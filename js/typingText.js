const textarea = document.getElementById('input');
const capsLockBtn = document.querySelector('.key[data-code="CapsLock"]');
const letters = document.querySelectorAll('.en-letter');
const shiftRight = document.querySelector('.key[data-code="ShiftLeft"]');

//верхний регистр
function toggleUppercase() {
  for (let i = 0; i < letters.length; i++) {
    if (capsLockBtn.classList.contains('active') || shiftRight.classList.contains('active')) {
      letters[i].classList.add('uppercase');
    } else {
      letters[i].classList.remove('uppercase');
    }
  }
}

function printWithUppercase(key) {
  if (capsLockBtn.classList.contains('active') || shiftRight.classList.contains('active')) {
    textarea.value += key.toUpperCase();
  } else {
    textarea.value += key;
  }
}

capsLockBtn.addEventListener('click', function() {
  toggleUppercase();
});

document.addEventListener('keydown', function(event) {
  if (event.code === "CapsLock" || event.code === "ShiftLeft" ) {
    toggleUppercase();
  }
});

document.addEventListener('keyup', function(event) {
  if (event.code === "CapsLock" || event.code === "ShiftLeft" ) {
    toggleUppercase();
  }
});

// обработчик нажатия клавиш на физической клавиатуре
document.addEventListener('keydown', (event) => {
    // получаем символ, нажатый на клавиатуре
    const key = event.key;
    // добавляем символ в значение текстового поля, если это не специальная клавиша
    if (key !== "Shift" && key !== "CapsLock" && key !== "Control" && key !== "Tab" && key !== "Alt" && key !== "Backspace" && key !== "Delete" && key !== "Enter") {
      if (key === " ") {
        event.preventDefault(); // отменяем стандартное действие браузера для клавиши "пробел"
        textarea.value += " ";
      } else if (key === "ArrowUp") {
        textarea.value += "▲";
      } else if (key === "ArrowRight") {
        textarea.value += "►";
      } else if (key === "ArrowDown") {
        textarea.value += "▼";
      } else if (key === "ArrowLeft") {
        textarea.value += "◄";
      } else {
        printWithUppercase(key);
      }
    }
  });

// обработчик нажатия клавиш на виртуальной клавиатуре
keys.forEach((key) => {
    key.addEventListener('click', () => {
      // получаем символ, соответствующий нажатой клавише
      const symbol = key.textContent;
      // добавляем символ в значение текстового поля, если это не специальная клавиша, за исключением пробела
      if (symbol !== "Win" && symbol !== "Shift" && symbol !== "Caps Lock" && symbol !== "Ctrl" && symbol !== "Tab" && symbol !== "Alt" && symbol !== "Backspace" && symbol !== "Del" && symbol !== "Enter") {
        if (symbol === " ") { // если символ - пробел, добавляем его в значение текстового поля
          textarea.value += " ";
        } else { // для всех остальных символов вызываем функцию для добавления символа в верхнем регистре
          printWithUppercase(symbol);
        }
      }
    });
  });


//удаление на backspace
const backspaceButton = document.querySelector('.key.backspace');
const enter = document.querySelector('[data-code="Enter"]');

// обработчик нажатия на кнопку "Backspace"
backspaceButton.addEventListener('click', () => {
  // удаляем последний символ из значения текстового поля
  textarea.value = textarea.value.slice(0, -1);
});

enter.addEventListener('click', () => {
  // удаляем последний символ из значения текстового поля
  textarea.value = textarea.value += "\n";
});





document.addEventListener('keydown', function(event) {
  if (event.code === "Backspace") {
    textarea.value = textarea.value.slice(0, -1);
  }
});

document.addEventListener('keydown', function(event) {
  if (event.code === "Enter") {
    event.preventDefault();
    textarea.value += "\n";
  }
});