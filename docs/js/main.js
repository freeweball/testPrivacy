const burger = document.querySelector('.header-burger');
const header = document.querySelector('.header');
const mobileWidth = 768;

burger.addEventListener('click', () => {
    header.classList.toggle('active');
    document.body.classList.toggle('overflow');
});

if (document.documentElement.clientWidth < mobileWidth) {
    const smoothScrollElements = document.querySelectorAll('.smooth__scroll');

    smoothScrollElements.forEach(el => {
        el.addEventListener('click', function() {
            header.classList.remove('active');
            document.body.classList.remove('overflow');
        });
    });
}
