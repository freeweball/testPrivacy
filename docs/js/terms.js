document.addEventListener('click', (evt) => {
    toggleHiddenText(evt);
});

const toggleHiddenText = (evt) => {
    const hasClass = (className) => evt.target.classList.contains(className);

    document.querySelectorAll('.hidden-link').forEach(hiddenLink => !hasClass('hidden-text') && hiddenLink.classList.remove('active'));
    hasClass('hidden-link') && evt.target.classList.add('active');
};
