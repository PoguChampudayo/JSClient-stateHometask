closeButton = document.querySelector('.modal__close')

function getCookie(name) {
    const pairs = document.cookie.split('; ')
    const cookie = pairs.find(el => el.startsWith(name + '='))
    return cookie ? cookie.substring(name.length + 1) : undefined
}

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
}

if (getCookie('modal') != 'closed') {
    document.querySelector('.modal').classList.add('modal_active')
}

closeButton.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('modal_active')
    setCookie('modal', 'closed')
    console.log(document.cookie)
})