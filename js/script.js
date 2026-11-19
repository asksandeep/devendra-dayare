const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
});nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});document.getElementById('year').textContent = new Date().getFullYear();const form = document.getElementById('enquiryForm');
const toast = document.getElementById('toast');form.addEventListener('submit', event => {
  event.preventDefault();
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 5000);
  form.reset();
});
