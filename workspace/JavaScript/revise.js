window.addEventListener('load', function () {
    const correction = document.getElementById('correction');

    correction.addEventListener('click', function (event) {
        event.preventDefault();

        location.href = "./mypage.html"
    });
});