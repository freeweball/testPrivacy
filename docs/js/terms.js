const hiddelLinks = document.querySelectorAll('.hidden-link');

hiddelLinks.forEach(link => link.addEventListener('click', (evt) => evt.target.classList.toggle('active')));