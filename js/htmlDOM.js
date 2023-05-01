let htmlDOM = '<div class="container">'+
'<textarea class="container__textarea" id="input" rows="15" cols="109" readonly></textarea>'+
'<div id="keyboard">'+
  '<div class="row">'+
    '<button class="key ru-letter" data-code="Backquote">`</button>'+
    '<button class="key" data-code="Digit1">1</button>'+
    '<button class="key" data-code="Digit2">2</button>'+
    '<button class="key" data-code="Digit3">3</button>'+
    '<button class="key" data-code="Digit4">4</button>'+
    '<button class="key" data-code="Digit5">5</button>'+
    '<button class="key" data-code="Digit6">6</button>'+
    '<button class="key" data-code="Digit7">7</button>'+
    '<button class="key" data-code="Digit8">8</button>'+
    '<button class="key" data-code="Digit9">9</button>'+
    '<button class="key" data-code="Digit0">0</button>'+
    '<button class="key" data-code="Minus">-</button>'+
    '<button class="key" data-code="Equal">=</button>'+
    '<button class="key backspace" data-code="Backspace">Backspace</button>'+
  '</div>'+
  '<div class="row">'+
    '<button class="key tab" data-code="Tab">Tab</button>'+
    '<button class="key ru-letter en-letter" data-code="KeyQ">q</button>'+
    '<button class="key ru-letter en-letter" data-code="KeyW" data-key="87">w</button>'+
    '<button class="key ru-letter en-letter" data-code="KeyE">e</button>'+
    '<button class="key ru-letter en-letter" data-code="KeyR">r</button>'+
    '<button class="key ru-letter en-letter" data-code="KeyT">t</button>'+
    '<button class="key ru-letter en-letter" data-code="KeyY">y</button>'+
    '<button class="key ru-letter en-letter" data-code="KeyU">u</button>'+
    '<button class="key ru-letter en-letter" data-code="KeyI">i</button>'+
    '<button class="key ru-letter en-letter" data-code="KeyO">o</button>'+
    '<button class="key ru-letter en-letter" data-code="KeyP">p</button>'+
    '<button class="key ru-letter" data-code="BracketLeft">[</button>'+
    '<button class="key ru-letter" data-code="BracketRight">]</button>'+
    '<button class="key" data-code="Backslash">\\</button>'+
    '<button class="key" data-code="Del">Del</button>'+
  '</div>'+
  '<div class="row">'+
    '<button class="key key-medium" data-code="CapsLock">Caps Lock</button>'+
    '<button class="key en-letter ru-letter" data-code="KeyA">a</button>'+
    '<button class="key en-letter ru-letter" data-code="KeyS">s</button>'+
    '<button class="key en-letter ru-letter" data-code="KeyD">d</button>'+
    '<button class="key en-letter ru-letter" data-code="KeyF">f</button>'+
    '<button class="key en-letter ru-letter" data-code="KeyG">g</button>'+
    '<button class="key en-letter ru-letter" data-code="KeyH">h</button>'+
    '<button class="key en-letter ru-letter" data-code="KeyJ">j</button>'+
    '<button class="key en-letter ru-letter" data-code="KeyK">k</button>'+
    '<button class="key en-letter ru-letter" data-code="KeyL">l</button>'+
    '<button class="key ru-letter" data-code="Semicolon">;</button>'+
'<button class="key ru-letter" data-code="Quote">\'</button>'+
'<button class="key key-medium" data-code="Enter">Enter</button>'+
'</div>'+
'<div class="row">'+
'<button class="key shift key-medium" data-code="ShiftLeft">Shift</button>'+
'<button class="key en-letter ru-letter" data-code="KeyZ">z</button>'+
'<button class="key en-letter ru-letter" data-code="KeyX">x</button>'+
'<button class="key en-letter ru-letter" data-code="KeyC">c</button>'+
'<button class="key en-letter ru-letter" data-code="KeyV">v</button>'+
'<button class="key en-letter ru-letter" data-code="KeyB">b</button>'+
'<button class="key en-letter ru-letter" data-code="KeyN">n</button>'+
'<button class="key en-letter ru-letter" data-code="KeyM">m</button>'+
'<button class="key ru-letter" data-code="Comma">,</button>'+
'<button class="key ru-letter" data-code="Period">.</button>'+
'<button class="key ru-letter" data-code="Slash">/</button>'+
'<button class="key" data-code="ArrowUp">▲</button>'+
'<button class="key shift key-medium" data-code="ShiftRight">Shift</button>'+
'</div>'+
'<div class="row">'+
'<button class="key" data-code="ControlLeft">Ctrl</button>'+
'<button class="key" data-code="Win">Win</button>'+
'<button class="key" data-code="AltLeft">Alt</button>'+
'<button class="key space" data-code="Space"> </button>'+
'<button class="key" data-code="ControlRight">Ctrl</button>'+
'<button class="key" data-code="ArrowLeft">◄</button>'+
'<button class="key" data-code="ArrowDown">▼</button>'+
'<button class="key" data-code="ArrowRight">►</button>'+
'<button class="key" data-code="AltRight">Alt</button>'+
'</div>'+
'</div>'+
'<div>'+
'<p>Клавиатура создана в операционной системе Windows</p>'+
'<p>Для переключения языка комбинация: левыe ctrl + alt</p>'+
'</div>'
'</div>';

document.write(htmlDOM);
