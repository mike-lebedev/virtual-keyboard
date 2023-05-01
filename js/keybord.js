const altKey = document.querySelector('[data-code="AltLeft"]');
const ctrlKey = document.querySelector('[data-code="ControlLeft"]');
const keys = document.querySelectorAll('.key');

let isRussian = false;

document.addEventListener('keydown', function(event) {
  if (event.altKey && event.ctrlKey) {
    keys.forEach(key => {
      switch (key.getAttribute('data-code')) {

        case 'KeyQ':
          key.innerText = isRussian ? 'q' : 'й';
          break;
        case 'KeyW':
          key.innerText = isRussian ? 'w' : 'ц';
          break;
        case 'KeyE':
          key.innerText = isRussian ? 'e' : 'у';
          break;
        case 'KeyR':
          key.innerText = isRussian ? 'r' : 'к';
          break;
        case 'KeyT':
          key.innerText = isRussian ? 't' : 'е';
          break;
        case 'KeyY':
          key.innerText = isRussian ? 'y' : 'н';
          break;
        case 'KeyU':
          key.innerText = isRussian ? 'u' : 'г';
          break;
        case 'KeyI':
          key.innerText = isRussian ? 'i' : 'ш';
          break;
        case 'KeyO':
          key.innerText = isRussian ? 'o' : 'щ';
          break;
        case 'KeyP':
          key.innerText = isRussian ? 'p' : 'з';
          break;
        case 'BracketLeft':
          key.innerText = isRussian ? '[' : 'х';
          break;
        case 'BracketRight':
          key.innerText = isRussian ? ']' : 'ъ';
          break;
        case 'KeyA':
          key.innerText = isRussian ? 'a' : 'ф';
          break;
        case 'KeyS':
          key.innerText = isRussian ? 's' : 'ы';
          break;
        case 'KeyD':
          key.innerText = isRussian ? 'd' : 'в';
          break;
        case 'KeyF':
          key.innerText = isRussian ? 'f' : 'а';
          break;
        case 'KeyG':
          key.innerText = isRussian ? 'g' : 'п';
          break;
        case 'KeyH':
          key.innerText = isRussian ? 'h' : 'р';
          break;
        case 'KeyJ':
          key.innerText = isRussian ? 'j' : 'о';
          break;
        case 'KeyK':
          key.innerText = isRussian ? 'k' : 'л';
          break;
        case 'KeyL':
          key.innerText = isRussian ? 'l' : 'д';
          break;
        case 'Semicolon':
          key.innerText = isRussian ? ';' : 'ж';
          break;
        case 'Quote':
          key.innerText = isRussian ? "'" : 'э';
          break;
        case 'KeyZ':
          key.innerText = isRussian ? "z" : 'я';
          break;
        case 'KeyX':
          key.innerText = isRussian ? "x" : 'ч';
          break;
        case 'KeyC':
          key.innerText = isRussian ? "c" : 'с';
          break;
        case 'KeyV':
          key.innerText = isRussian ? "v" : 'м';
          break;
        case 'KeyB':
          key.innerText = isRussian ? "b" : 'и';
          break;
        case 'KeyN':
          key.innerText = isRussian ? "n" : 'т';
          break;
        case 'KeyM':
          key.innerText = isRussian ? "m" : 'ь';
          break;
        case 'Comma':
          key.innerText = isRussian ? "," : 'б';
          break;
        case 'Period':
          key.innerText = isRussian ? "." : 'ю';
          break;
        case 'Slash':
          key.innerText = isRussian ? "/" : '.';
          break;

      }
    });
    isRussian = !isRussian;
  }
});
