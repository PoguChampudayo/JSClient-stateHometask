textArea = document.querySelector('textarea')
clearButton = document.querySelector('.clear_text')

textArea.addEventListener('input', () => {
    localStorage.setItem('textarea', textArea.value)
})

if (localStorage.textarea) {
    textArea.value = localStorage.textarea
}
clearButton.addEventListener('click',  () => {
    if (localStorage.textarea) {
        localStorage.removeItem('textarea')
    }
    textArea.value = ''
})