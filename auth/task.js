form = document.querySelector('form')

if (localStorage.getItem('user_id')) {
    authentificate(localStorage.getItem('user_id'))
}

function authentificate(id) {
    document.querySelector('[id=signin]').classList.remove('signin_active')
    document.querySelector('[id=welcome]').classList.add('welcome_active')
    document.querySelector('[id=user_id]').textContent = id
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let xhr = new XMLHttpRequest()
    let transferData = new FormData(form)

    xhr.addEventListener('load', function () {
        let response = JSON.parse(xhr.responseText)
        if (!response.success) {
            alert('Комбинация логин-пароль неверна!')
        }
        else {
            localStorage.setItem('user_id', response.user_id)
            authentificate(response.user_id)
        }
    })

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
    xhr.send(transferData)


})