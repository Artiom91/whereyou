const modalWindow = document.querySelector('.modal-window')
const overlay = document.querySelector('.overlay')
const btnShowModalWindow = document.querySelectorAll('.show-modal-window')
const btnCloseModalWindow = document.querySelector('.close-modal-window')

const btnShowWindow = function () {
    modalWindow.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const btnCloseWindow = function () {
    modalWindow.classList.add('hidden')
    overlay.classList.add('hidden')
}



for (let i = 0; i < btnShowModalWindow.length; i ++) {
    btnShowModalWindow[i].addEventListener('click', btnShowWindow)
}

btnCloseModalWindow.addEventListener('click', btnCloseModalWindow)

overlay.addEventListener('click', btnCloseWindow)

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalWindow.classList.contains(e.key)) {
        btnCloseWindow()
    }
})