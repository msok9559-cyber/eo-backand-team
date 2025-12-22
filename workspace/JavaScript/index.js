window.addEventListener('load', function () {
    const search = document.getElementById('search');

    search.addEventListener('click', function () {
        search.querySelector('a').click();
    });
});