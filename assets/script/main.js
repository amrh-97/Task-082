const headContent = document.querySelector('.mainheader__content');
const navIcon = document.querySelector('.header__navIcon');
const navMenu = document.querySelector('.mainheader__nav');


let navShowHide = navIcon.addEventListener('click', () => {
    headContent.classList.toggle('active');
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbzqTvQAiHir9hEHrox_CGLPjw0tzuypY8Hq-0Vavk01kVpbdVl84hlEgEKoDtS-k_Mc/exec'

const form = document.forms['order__from']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
