const keysEnLowerCase = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
    'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];
  const keysEnUpperCase = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
    'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];
  const keysRuLowerCase = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];
  const keysRuUpperCase = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Del',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];
    
    
const createWrapper = () => {
    const wrapper = document.createElement('div')
    wrapper.className= 'monitor'
    const textarea = document.createElement('textarea')
    textarea.className = 'textarea'
    const title = document.createElement('h1')
    title.className = 'title'
    title.textContent = 'RSS Virtual Keyboard'
    const text = document.createElement('p')
    text.className = 'text'
    text.textContent = 'Клавитатура создана в операционной системе Windows. Для переключения языка используйте Shift + Alt';
    wrapper.append(textarea, title, text);
    return wrapper;
  };

  let currKeyboard = keysEnLowerCase;
  
  const createKeyboard = () => {
    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    currKeyboard.forEach((_el, ind) => {
      const btn = document.createElement('button');
      btn.className = 'keyboard__btn';
      btn.textContent = currKeyboard[ind];
      keyboard.append(btn);
    });
    return keyboard;
  };

 
  const init = () => {
    const textarea = createWrapper();
    const keyboard = createKeyboard();
    const body = document.querySelector('body');
    const layoutElements = [textarea, keyboard];
    layoutElements.forEach((element) => body.append(element));
  };
  init();
 
  
  const textarea = document.querySelector('.textarea');
  
  const buttons = document.querySelectorAll('.keyboard__btn');

  const backspaceBtn = buttons[13];
  backspaceBtn.classList.add('backspace');
  backspaceBtn.classList.add('special')

  const tabBtn = buttons[14];
  tabBtn.classList.add('tab');
  tabBtn.classList.add('special')

  const deleteBtn = buttons[27];
  deleteBtn.classList.add('delete');
  deleteBtn.classList.add('special')

  const capsLockBtn = buttons[28];
  capsLockBtn.classList.add('caps_lock');
  capsLockBtn.classList.add('special')

  const enterBtn = buttons[40];
  enterBtn.classList.add('enter');
  enterBtn.classList.add('special')

  const shiftLeftBtn = buttons[41];
  shiftLeftBtn.classList.add('shift_left');
  shiftLeftBtn.classList.add('special')

  const arrowUpBtn = buttons[53];
  arrowUpBtn.classList.add('arrow_up');
  arrowUpBtn.classList.add('special')

  const shiftRightBtn = buttons[54];
  shiftRightBtn.classList.add('shift_right');
  shiftRightBtn.classList.add('special')

  const controlLeftBtn = buttons[55];
  controlLeftBtn.classList.add('control_left');
  controlLeftBtn.classList.add('special')

  const winBtn = buttons[56];
  winBtn.classList.add('win');
  winBtn.classList.add('special')

  const altLeftBtn = buttons[57];
  altLeftBtn.classList.add('alt_left');
  altLeftBtn.classList.add('special')

  const spaceBtn = buttons[58];
  spaceBtn.classList.add('space');
  spaceBtn.classList.add('special')

  const altRightBtn = buttons[59];
  altRightBtn.classList.add('alt_right');
  altRightBtn.classList.add('special')

  const arrowLeftBtn = buttons[60];
  arrowLeftBtn.classList.add('arrow_left');
  arrowLeftBtn.classList.add('special')

  const arrowDownBtn = buttons[61];
  arrowDownBtn.classList.add('arrow_down');
  arrowDownBtn.classList.add('special')

  const arrowRightBtn = buttons[62];
  arrowRightBtn.classList.add('arrow_right');
  arrowRightBtn.classList.add('special')

  const controlRightBtn = buttons[63];
  controlRightBtn.classList.add('control_right')
  controlRightBtn.classList.add('special')
  
  
  let capsCase
  if (capsCase === undefined) {
    capsCase = false

  } else if (capsCase !== undefined) {
    localStorage.getItem('capsCase')
  }
  
  let language
  if (language === undefined) {
    language = 'en'
  }
  
  document.addEventListener('keydown', (event) => {
    textarea.focus();
    let { key } = event;
    buttons.forEach((el) => {
      if (el.textContent === key && el.textContent !== 'Alt') {
        el.classList.add('active');
      }
      if(el.textContent === key && el.textContent !== 'Backspace') {
        el.classList.add('active')
      }
      if (event.code === 'Delete' && el.classList.contains('delete')) {
        el.classList.add('active');
      }
      if (event.code === 'Enter' && el.classList.contains('enter')) {
        el.classList.add('active');
        key = '';
      }
      if (event.code === 'ShiftLeft' && el.classList.contains('shift_left')) {
        el.classList.add('active');
        key = '';
      }
      if (event.code === 'ArrowUp' && el.classList.contains('arrow_up')) {
        el.classList.add('active');
      }
      if (event.code === 'ShiftRight' && el.classList.contains('shift_right')) {
        el.classList.add('active');
        key = '';
      }
      if (event.code === 'ControlLeft' && el.classList.contains('control_left')) {
        el.classList.add('active');
        key = '';
      }
      if (event.key === 'Meta' && el.classList.contains('win')) {
        el.classList.add('active');
        key = '';
      }
      if (event.code === 'AltLeft' && el.classList.contains('alt_left') && event.location === 1) {
        el.classList.add('active');
        key = '';
      }
      if (event.code === 'AltRight' && el.classList.contains('alt_right') && event.location === 2) {
        el.classList.add('active');
        key = '';
      }
      if (event.code === 'ArrowLeft' && el.classList.contains('control_left')) {
        el.classList.add('active');
      }
      if (event.code === 'ArrowDown' && el.classList.contains('arrow_down')) {
        el.classList.add('active');
      }
      if (event.code === 'ArrowRight' && el.classList.contains('arrow_right')) {
        el.classList.add('active')
      }
      if (event.code === 'ControlRight' && el.classList.contains('control_right')) {
        el.classList.add('active')
        key = ''
      }
      if (event.code === 'CapsLock' && el.classList.contains('caps_lock') && !el.classList.contains('active')) {
        el.classList.add('active');
        key = '';
        capsCase = true;
        if (language === 'en') {
          currKeyboard = keysEnUpperCase;
        } else {
          currKeyboard = keysRuUpperCase;
        }
        buttons.forEach((_elem, i, arr) => {
          const btn = arr[i];
          btn.textContent = currKeyboard[i];
        })

        setLocalStorage()

      } else if (event.code === 'CapsLock' && el.classList.contains('caps_lock') && el.classList.contains('active')) {
        el.classList.remove('active');
        key = '';
        capsCase = false

        if (language === 'ru') {
          currKeyboard = keysRuLowerCase;
        } else {
          currKeyboard = keysEnLowerCase;
        }
        buttons.forEach((_elem, i, arr) => {
          const btn = arr[i];
          btn.textContent = currKeyboard[i];
        });
        setLocalStorage();
      }
    })

    document.querySelector('.textarea').textContent += key;
  });
  
  document.addEventListener('keyup', (event) => {
    let { key } = event;
  
    buttons.forEach((el) => {
      if (el.textContent === key && el.textContent !== 'Alt') {
        el.classList.remove('active');
      }
      if(el.textContent === key && el.textContent !== 'Backspace') {
        el.classList.remove('active')
      }
      if (event.code === 'Delete' && el.classList.contains('delete')) {
        el.classList.remove('active');
      }
      if (event.code === 'Enter' && el.classList.contains('enter')) {
        el.classList.remove('active');
        key = '';
      }
      if (event.code === 'ShiftLeft' && el.classList.contains('shift_left')) {
        el.classList.remove('active');
        key = '';
      }
      if (event.code === 'ArrowUp' && el.classList.contains('arrow_up')) {
        el.classList.remove('active');
      }
      if (event.code === 'ShiftRight' && el.classList.contains('shift_right')) {
        el.classList.remove('active');
        key = '';
      }
      if (event.code === 'ControlLeft' && el.classList.contains('control_left')) {
        el.classList.remove('active');
        key = '';
      }
      if (event.key === 'Meta' && el.classList.contains('win')) {
        el.classList.remove('active');
        key = '';
      }
      if (event.code === 'AltLeft' && el.classList.contains('alt_left') && event.location === 1) {
        el.classList.remove('active');
        key = '';
      }
      if (event.code === 'AltRight' && el.classList.contains('alt_right') && event.location === 2) {
        el.classList.remove('active');
        key = '';
      }
      if (event.code === 'ArrowLeft' && el.classList.contains('control_left')) {
        el.classList.remove('active');
      }
      if (event.code === 'ArrowDown' && el.classList.contains('arrow_down')) {
        el.classList.remove('active');
      }
      if (event.code === 'ArrowRight' && el.classList.contains('arrow_right')) {
        el.classList.remove('active');
      }
      if (event.code === 'ControlRight' && el.classList.contains('control_right')) {
        el.classList.remove('active');
        key = '';
      }
    })
  }) 


  document.addEventListener('mousedown', (event) => {
    let key = '';
    if (event.target.classList.contains('keyboard__btn')) {
      key = event.target.textContent;
    }

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
  
    buttons.forEach((el) => {
      if (el.textContent === key && el.textContent !== 'Alt') {
        el.classList.add('active');
      }
      if (key === 'Del' && el.classList.contains('delete')) {
        el.classList.add('active');
        key = '';
        textarea.focus();
        textarea.setRangeText('', start, end + 1, 'end');
        setCursorPosition(start)
      }
      if (key === 'Tab' && el.classList.contains('tab')) {
        el.classList.add('active');
        key = '';
        textarea.focus();
        textarea.setRangeText('\t', start, end, 'end');
        setCursorPosition(start + 1)
      }
      if (key === 'Backspace' && el.classList.contains('backspace')) {
        el.classList.add('active');
        key = '';
        textarea.focus();
        textarea.setRangeText('', end ? start - 1 : 0, start, 'end');
        setCursorPosition(start)
      }
      if (key === 'Enter' && el.classList.contains('enter')) {
        el.classList.add('active');
        key = '';
        textarea.focus();
        textarea.setRangeText('\n', start, end, 'end');
        setCursorPosition(start + 1)
      }
      if (key === 'Shift' && el.classList.contains('shift_left')) {
        el.classList.add('active');
        key = '';
      }
      if (event.code === 'ArrowUp' && el.classList.contains('arrow_up')) {
        el.classList.add('active');
      }
      if (key === 'Shift' && el.classList.contains('shift_right')) {
        el.classList.add('active');
        key = '';
      }
      if (key === 'Ctrl' && el.classList.contains('control_left')) {
        el.classList.add('active');
        key = '';
      }
      if (event.key === 'Meta' && el.classList.contains('win')) {
        el.classList.add('active');
        key = '';
      }
      if (key === 'Alt' && el.classList.contains('alt_left')) {
        el.classList.add('active');
        key = '';
      } else if (key === 'Alt' && el.classList.contains('alt_right') && !el.classList.contains('alt_left')) {
        el.classList.add('active');
        key = '';
      }
      if (key === 'Ctrl' && el.classList.contains('control_right')) {
        el.classList.add('active');
        key = '';
      }
      if (key === 'CapsLock' && el.classList.contains('caps_lock')) {
        key = '';
      }
    });
    document.querySelector('.textarea').textContent += key;
  });
  
  document.addEventListener('mouseup', (event) => {
    let key = event.target.textContent;
  
    buttons.forEach((el) => {
      if (el.textContent === key && el.textContent !== 'Alt') {
        el.classList.remove('active');
      }
      if (event.code === 'Delete' && el.classList.contains('delete')) {
        el.classList.remove('active');
      }
      if (event.code === 'Enter' && el.classList.contains('enter')) {
        el.classList.remove('active');
        key = '';
      }
      if (event.code === 'ShiftLeft' && el.classList.contains('shift_left')) {
        el.classList.remove('active');
        key = '';
      }
      if (event.code === 'ArrowUp' && el.classList.contains('arrow_up')) {
        el.classList.remove('active');
      }
      if (event.code === 'ShiftRight' && el.classList.contains('shift_right')) {
        el.classList.remove('active');
        key = '';
      }
      if (event.code === 'ControlLeft' && el.classList.contains('control_left')) {
        el.classList.remove('active');
        key = '';
      }
      if (event.key === 'Meta' && el.classList.contains('win')) {
        el.classList.remove('active');
        key = '';
      }
      if (key === 'Alt' && el.classList.contains('alt_left') && !el.classList.contains('alt_right')) {
        el.classList.remove('active');
        key = '';
      }
      if (key === 'Alt' && el.classList.contains('alt_right') && !el.classList.contains('alt_left')) {
        el.classList.remove('active');
        key = '';
      }
      if (event.code === 'ArrowLeft' && el.classList.contains('control_left')) {
        el.classList.remove('active');
      }
      if (event.code === 'ArrowDown' && el.classList.contains('arrow_down')) {
        el.classList.remove('active');
      }
      if (event.code === 'ArrowRight' && el.classList.contains('arrow_right')) {
        el.classList.remove('active');
      }
      if (event.code === 'ControlRight' && el.classList.contains('control_right')) {
        el.classList.remove('active');
        key = '';
      }
    });
  });
  
 const changeLanguage = ((toggleLang, ...btns) => {
    const pressedBtns = new Set();
  
    document.addEventListener('keydown', (event) => {
      pressedBtns.add(event.code);
  
      for (let i = 0; i < btns.length; i += 1) {
        if (!pressedBtns.has(btns[i])) {
          return;
        }
      }
  
      pressedBtns.clear();
      toggleLang();
    });
  
    document.addEventListener('keyup', (event) => {
      pressedBtns.delete(event.code);
    });
  }
  );
  
  function setCursorPosition(position) {
    const end = textarea.value.length
    let newPosition = position !== undefined ? position : end
    newPosition = newPosition < 0 ? 0 : newPosition
    textarea.setSelectionRange(newPosition, newPosition)
    textarea.focus()
  }
  