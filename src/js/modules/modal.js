function modal() {
    const modal = document.querySelector('.modal'),
        modalTrigger = document.querySelectorAll('.connect'),
        modalCloseBtn = document.querySelector('.modal__close');

    modalTrigger.forEach(item => {
        item.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflowY = 'hidden';
        });
    })

    modalCloseBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflowY = '';
    });
}

export default modal;