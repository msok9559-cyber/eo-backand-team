const toggleBtn =
    document.querySelector('#header > #header-inner > button');

const toggleText =
    toggleBtn.querySelector('span:first-child');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('on');
    document.body.classList.toggle('dark');

    toggleText.textContent =
        document.body.classList.contains('dark') ? 'ON' : 'OFF';
});