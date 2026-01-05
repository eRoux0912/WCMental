const toggler = document.querySelector('.navbar-toggler');
const openIcon = toggler.querySelector('.open-icon');
const closeIcon = toggler.querySelector('.close-icon');

toggler.addEventListener('click', () => {
  openIcon.classList.toggle('d-none');
  closeIcon.classList.toggle('d-none');
});




