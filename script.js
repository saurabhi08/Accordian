var headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    var content = header.nextElementSibling;
    content.classList.toggle('open');
  });
});
