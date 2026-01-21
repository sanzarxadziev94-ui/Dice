const randomNumber1 = Math.floor(Math.random() * 6) + 1

const img1 = document.querySelector('.img1')
const img1Src = `./images/dice${randomNumber1}.png` // string literal

img1.setAttribute('src', img1Src)

const randomNumber2 = Math.floor(Math.random() * 6) + 1

const img2 = document.querySelector('.img2')
const img2Src = `./images/dice${randomNumber2}.png` // string literal

img2.setAttribute('src', img2Src)

const h2 = document.createElement('h2')
const h1 = document.querySelector('h1')

if (randomNumber1 > randomNumber2) {
    h2.innerText = 'Player 1 wont'
    h1.insertAdjacentElement('afterend', h2)
} else if (randomNumber1 < randomNumber2) {
    h2.innerText = 'Player 2 wont'
    h1.insertAdjacentElement('afterend', h2)
} else {
    h2.innerText ='Draw'
    h1.insertAdjacentElement('afterend', h2)
}

const refreshButton = document.querySelector('#refreshButton')

refreshButton.addEventListener('click', function() {
    location.reload()
})