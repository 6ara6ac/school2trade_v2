const refs = {
    langActive: document.querySelectorAll ('.icon-active'),
    langInactive: document.querySelectorAll('.icon-inactive')
};

  refs.langActive.forEach((data)=> data.addEventListener('click', toggleLang));


  function toggleLang() {
refs.langInactive.forEach(data=>data.classList.toggle('is-hidden')) ;
  }