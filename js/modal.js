
(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelectorAll('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    
  };

  refs.openModalBtn.forEach(data =>data.addEventListener('click', toggleModal));
  refs.closeModalBtn.forEach (data => data.addEventListener('click', toggleModal));

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

const checkbox = document.querySelector('.checkbox__input')
const modalButton = document.querySelector ('.modal__button')


checkbox.addEventListener('change', checkCheckbox);


function checkCheckbox() {
    if (checkbox.checked) {
        modalButton.removeAttribute('disabled');

    } else {
        modalButton.setAttribute('disabled',true);
    }
  }

  







