textArea = document.querySelector('textarea')
clearButton = document.querySelector('.clear_text')

textArea.addEventListener('input', () => {
    localStorage.setItem('textarea', textArea.value)
})

    // textArea.value = localStorage.textarea
    textArea.value = localStorage.getItem('textarea')


clearButton.addEventListener('click',  () => {
        localStorage.removeItem('textarea')
    textArea.value = ''
})