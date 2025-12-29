window.addEventListener('load', function () {
    const correction = document.getElementById('correction');

    correction.addEventListener('click', function (event) {
        event.preventDefault();

        location.href = "./mypage.html"
    });

    document.getElementById("login-btn").addEventListener("click", function (event) {
        event.preventDefault();

        // 로그인 정보 삭제
        localStorage.removeItem("loginUser");

        location.href = "./login.html";
    });
});