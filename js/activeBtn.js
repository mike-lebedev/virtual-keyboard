// const keys = document.querySelectorAll('.key');
let isCapsLockOn = false;

// виртуальная клавиатура
keys.forEach(key => {
  key.addEventListener('mousedown', function() {
    if (!key.classList.contains('active')) {
      key.classList.add('active');
    } else {
      if (key.dataset.code === 'CapsLock') {
        key.classList.remove('active');
      }
    }
  });
  key.addEventListener('mouseup', function() {
    if (key.classList.contains('active')) {
      if (key.dataset.code !== 'CapsLock') {
        key.classList.remove('active');
      }
    }
  });
});

// физическая клавиатура
document.addEventListener('keydown', function(event) {
  keys.forEach(key => {
    if (key.getAttribute('data-code') === event.code) {
      // добавляем класс active, кроме кнопки CapsLock
      if (event.code !== 'CapsLock' ) {
        key.classList.add('active');
      } else {
        // для CapsLock проверяем состояние
        if (isCapsLockOn) {
          key.classList.remove('active');
          isCapsLockOn = false;
        } else {
          key.classList.add('active');
          isCapsLockOn = true;
        }
      }
    }
  });
});

document.addEventListener('keyup', function(event) {
  keys.forEach(key => {
    if (key.getAttribute('data-code') === event.code) {
      // удаляем класс active, кроме кнопки CapsLock
      if (event.code !== 'CapsLock') {
        key.classList.remove('active');
      }
    }
  });
});

