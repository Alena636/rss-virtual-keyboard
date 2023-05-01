const LANG = {
    EN: 'en',
    RU: 'ru',
}

let currLang = localStorage.getItem('lang') || LANG.EN
let isShiftPress = false 
let isCapsLockPress  = false
let isAltPress = false

const KEYBOARD_BUTTON_DATASET = {
    CODE: 'code',
    TEXT_EN: 'textEn',
    TEXT_RU: 'textRu',
    SHIFT_TEXT_EN: 'shiftTxtEn',
    SHIFT_TEXT_RU: 'shiftTxtRu',
};

const KEYBOARD_BUTTON_CODE = {
    BACKSPACE: 'Backspace',
    TAB: 'Tab',
    DELETE: 'Delete',
    CAPSLOCK: 'CapsLock',
    ENTER: 'Enter',
    SHIFT_LEFT: 'ShiftLeft',
    SHIFT_RIGHT: 'ShiftRight',
    CONTROL_LEFT: 'CtrlLeft',
    CONTROL_RIGHT: 'CtrlRight',
    WIN: 'WinLeft',
    ALT_LEFT: 'AltLeft',
    ALT_RIGHT: 'AltRight',
    ARROW_UP: 'ArrowUp',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_DOWN: 'ArrowDown',
    ARROW_RIGHT: 'ArrowRight',
    SPACE: 'Space',
}

let prevKeyboardButton = null
let textarea = null
init()

async function init() {
    try {
        const wrapper = createWrapper()
        const title = createTitle('RSS Virtual Keyboard')
        const display = createDisplay()

        const keysJson = await getKeysJson()
        const keyboard = createKeyboard(keysJson.keys)

        const description = createParagraph('Клавиатура создана в операционной системе Windows')
        const lang = createParagraph('Для переключения языка используйте Shift + Alt')

        wrapper.append(title)
        wrapper.append(display)
        wrapper.append(keyboard)
        wrapper.append(description)
        wrapper.append(lang)

        document.body.append(wrapper)

        document.addEventListener('keyup', handleKeyUp)
        document.addEventListener('keydown', handleKeyDown)

        textarea = document.querySelector('.textarea')

        setCursorPosition()

    } catch (err) {
        console.log(err)
    }
}

async function getKeysJson() {
    const response = await fetch('data.json')
    if(response.status === 200) {
        const keysJson = await response.json()
        return keysJson
    }
    throw new Error(response.status)
}

function createWrapper() {
    const wrapper = document.createElement('div')
    wrapper.className = 'container'
    return wrapper
}

function createKeyboard(keys) {
    const keyboard = document.createElement('div')
    keyboard.className = 'keyboard'
    keyboard.append(createKeyboardKeys(keys))
    return keyboard
}

function createKeyboardKeys(keys) {
    const keyboardKeys = document.createElement('div')
    keyboardKeys.className = 'keyboard_btns'

    keys.forEach((key) => {
        keyboardKeys.append(createKeyboardKey(key))
        
    });
    keyboardKeys.addEventListener('mousedown', handleMouseDown)
    keyboardKeys.addEventListener('mouseup', handleMouseUp)
    keyboardKeys.addEventListener('click', handleClick)
    return keyboardKeys
}

function createKeyboardKey(key) {
    const keyboardKey = document.createElement('button')
    const langText = key.text
    const { shiftTxt } = key
    const { code } = key

    keyboardKey.className = 'keyboard_btn'
    if(code === 'CapsLock' || code === 'Enter' || code === 'ShiftLeft' || code === 'ShiftRight') {
        keyboardKey.classList.add('caps')
    }
    if(code === 'Space') {
        keyboardKey.classList.add('space')
    }
    if(code === KEYBOARD_BUTTON_CODE.SHIFT_LEFT || code === KEYBOARD_BUTTON_CODE.SHIFT_RIGHT) {
        keyboardKey.addEventListener('mousedown', () => {
            isShiftPress = true
            updateKeyboardKeyTexts(isShiftPress, isCapsLockPress)
        }) 
        keyboardKey.addEventListener('mouseup', () => {
            isShiftPress = false
            updateKeyboardKeyTexts(isShiftPress, isCapsLockPress)
        })
    }

    if(code === KEYBOARD_BUTTON_CODE.ALT_LEFT || code === KEYBOARD_BUTTON_CODE.ALT_RIGHT) {
        keyboardKey.addEventListener('mousedown', () => {
            isAltPress = true
        }) 
        keyboardKey.addEventListener('mouseup', () => {
            isAltPress = false
        })
    }

    keyboardKey.dataset[KEYBOARD_BUTTON_DATASET.CODE] = code

    if(typeof langText === 'object') {
        keyboardKey.textContent = langText[currLang]
        keyboardKey.dataset[KEYBOARD_BUTTON_DATASET.TEXT_EN] = key.text[LANG.EN]
        keyboardKey.dataset[KEYBOARD_BUTTON_DATASET.TEXT_RU] = key.text[LANG.RU]
    }else{
        keyboardKey.textContent = key.text
    }

    if(shiftTxt) {
        keyboardKey.dataset[KEYBOARD_BUTTON_DATASET.SHIFT_TEXT_EN] = key.shiftTxt[LANG.EN]
        keyboardKey.dataset[KEYBOARD_BUTTON_DATASET.SHIFT_TEXT_RU] = key.shiftTxt[LANG.RU]
    }
    return keyboardKey
}

function handleKeyDown(event) {
    const keyCode = event.code
    const keyboardKey = document.querySelector(`[data-code="${keyCode}"`)

    setActiveKeyboardKey(keyboardKey)
    isShiftPress = event.shiftKey
    isAltPress = event.altKey
    updateKeyboardKeyTexts(isShiftPress, isCapsLockPress)
}

function toggleLang() {
    currLang = currLang === LANG.EN ? LANG.RU : LANG.EN
    localStorage.setItem('lang', currLang)
}

function updateKeyboardKeyTexts() {
    const keyboardKeys = document.querySelectorAll('[data-code]')
    keyboardKeys.forEach((keyboardKey) => {
        const textEn = isShiftPress ? keyboardKey.dataset[KEYBOARD_BUTTON_DATASET.SHIFT_TEXT_EN] : keyboardKey.dataset[KEYBOARD_BUTTON_DATASET.TEXT_EN]
        const textRu = isShiftPress ? keyboardKey.dataset[KEYBOARD_BUTTON_DATASET.SHIFT_TEXT_RU] : keyboardKey.dataset[KEYBOARD_BUTTON_DATASET.TEXT_RU]

        let text = currLang === LANG.EN ? textEn : textRu
        if(isCapsLockPress && isLetter(text)) {
            text = isShiftPress ? text.toLowerCase() : text.toUpperCase()
        }
        keyboardKey.textContent = text
    })
}

function setActiveKeyboardKey(keyboardKey) {
    keyboardKey.classList.add('active')
}

function handleKeyUp(event) {
    const keyCode = event.code
    const keyboardKey = document.querySelector(`[data-code="${keyCode}"`)

    handleKeyboardKey(keyboardKey)

    setInactiveKeyboardKey(keyboardKey)
    isShiftPress = event.shiftKey
    isAltPress = event.altKey
    updateKeyboardKeyTexts(isShiftPress, isCapsLockPress)

    if(keyCode === KEYBOARD_BUTTON_CODE.CAPSLOCK) {
        if(isCapsLockPress) {
            setActiveKeyboardKey(keyboardKey)
        }else {
            setInactiveKeyboardKey(keyboardKey)
        }
    }
}

function setInactiveKeyboardKey(keyboardKey) {
    keyboardKey.classList.remove('active')
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-zA-Zа-яА-Я]/i)
}

function createDisplay() {
    const displayWrapper = document.createElement('div')
    displayWrapper.className = 'display'

    const displayTextarea = document.createElement('textarea')
    displayTextarea.className = 'textarea'

    displayTextarea.rows = 10
    displayTextarea.cols = 20
    displayWrapper.append(displayTextarea)
    return displayWrapper
}

function handleMouseDown(event) {
    const keyboardKey = event.target
    const isKeyboardKey = keyboardKey.classList.contains('keyboard_btn')
    prevKeyboardButton = keyboardKey

    if(isKeyboardKey) {
        handleKeyboardKey(keyboardKey)
        setActiveKeyboardKey(keyboardKey)
        updateKeyboardKeyTexts(isShiftPress, isCapsLockPress)
    }
}

function handleMouseUp() {
    if(prevKeyboardButton) {
        const keyCode = prevKeyboardButton.dataset[KEYBOARD_BUTTON_DATASET.CODE]
        setInactiveKeyboardKey(prevKeyboardButton)
        if(keyCode === KEYBOARD_BUTTON_CODE.CAPSLOCK) {
            if(isCapsLockPress) {
                setActiveKeyboardKey(prevKeyboardButton)
            }else {
                setInactiveKeyboardKey(prevKeyboardButton)
            }
        }
    }
}

function handleClick(event){
    const keyboardKey = event.target
    const isKeyboardKey = keyboardKey.classList.contains('keyboard_btn')
    if(isKeyboardKey) {
        textarea.focus()
    }
}

function handleKeyboardKey(keyboardKey) {
    const start = textarea.selectionStart
    const end = textarea.selectionEnd

    const code = keyboardKey.dataset[KEYBOARD_BUTTON_DATASET.CODE]
    const value = keyboardKey.textContent

    if(!Object.values(KEYBOARD_BUTTON_CODE).includes(code)) {
        textarea.value = addSymbol(textarea.value, value, start, end)
        setCursorPosition(start + 1)
    } else {
        switch(code) {
            case KEYBOARD_BUTTON_CODE.BACKSPACE: 
            let newStart = start === end ? start - 1 : start
            textarea.value = removeSymbol(textarea.value, newStart, end)
            setCursorPosition(newStart)
            break;
            case KEYBOARD_BUTTON_CODE.TAB:
                textarea.value = addSymbol(textarea.value, '\t', start, end)
                setCursorPosition(start + 1)
                break;
            case KEYBOARD_BUTTON_CODE.DELETE:
                const newEnd = start === end ? end + 1 : end
                textarea.value = removeSymbol(textarea.value, start, newEnd)
                setCursorPosition(start)
                break;
            case KEYBOARD_BUTTON_CODE.ENTER:
                textarea.value = addSymbol(textarea.value, '\n', start, end)
                setCursorPosition(start + 1)
                break;
            case KEYBOARD_BUTTON_CODE.CAPSLOCK: 
                isCapsLockPress = !isCapsLockPress
                break;
            case KEYBOARD_BUTTON_CODE.SPACE:
                textarea.value = addSymbol(textarea.value, ' ', start, end)
                break;
            case KEYBOARD_BUTTON_CODE.ARROW_UP:
                const enterLastPosition = textarea.value.lastIndexOf('\n', start - 1)
                setCursorPosition(enterLastPosition !== -1 ? enterLastPosition : 0)
                break;
            case KEYBOARD_BUTTON_CODE.ARROW_LEFT:
                setCursorPosition(start - 1)
                break;
            case KEYBOARD_BUTTON_CODE.ARROW_RIGHT:
                setCursorPosition(start + 1)
                break;
            case KEYBOARD_BUTTON_CODE.ARROW_DOWN:
                const enterFirstposition = textarea.value.indexOf('\n', end + 1)
                const position = enterFirstposition !== -1 ? enterFirstposition + 1 : textarea.value.length
                setCursorPosition(position)
                break;
            case KEYBOARD_BUTTON_CODE.SHIFT_LEFT:
            case KEYBOARD_BUTTON_CODE.SHIFT_RIGHT:
                isShiftPress = true
                break;
            case KEYBOARD_BUTTON_CODE.ALT_LEFT:
            case KEYBOARD_BUTTON_CODE.ALT_RIGHT:
                isAltPress = true
                break;
            default:
                setCursorPosition()
        }

        if(isShiftPress && isAltPress) {
            toggleLang()
            updateKeyboardKeyTexts(isShiftPress, isCapsLockPress)
        }
    }
}

function addSymbol(str, symbol, start, end) {
    return str.slice(0, start) + symbol + str.slice(end)
}

function removeSymbol(str, start, end) {
    return str.slice(0, start) + str.slice(end)
}

function setCursorPosition(position) {
    const end = textarea.value.length
    let newPosition = position !== undefined ? position : end
    newPosition = newPosition < 0 ? 0 : newPosition
    textarea.setSelectionRange(newPosition, newPosition)
    textarea.focus()
}

function createTitle(text) {
    const title = document.createElement('h1')
    title.className = 'title'
    title.textContent = text
    return title
}

function createParagraph(text) {
    const paragraph = document.createElement('p')
    paragraph.className = 'description'
    paragraph.textContent = text
    return paragraph
}

