function openCloseModal() {
    document.querySelector('.person__socials').classList.toggle('toggle-socials')
}

document.querySelector('#btn--share').addEventListener('click', openCloseModal)