window.addEventListener('load', function () {

    /* 검색 카드 */
    const search = document.getElementById('search');
    if (search) {
        search.addEventListener('click', function () {
            const loginUser = localStorage.getItem("loginUser");
            if(!loginUser){
                alert("로그인후 이용가능합니다");
                location.href = "./members/login.html";
                return;
            }

            search.querySelector('a').click();
        });
    }

    /* 로그인 상태 처리 */
    const loginBtn = document.getElementById("login-btn");
    const mypageBtn = document.getElementById("mypage-btn");

    const loginUser = localStorage.getItem("loginUser");

    if (loginUser) {
        loginBtn.textContent = "Log Out";
        loginBtn.href = "#";
        mypageBtn.style.display = "inline-block";

        loginBtn.addEventListener("click", function (e) {
            e.preventDefault();

            localStorage.removeItem("loginUser");
            alert("로그아웃 되었습니다.");
            location.reload();
        });

    } else {
        loginBtn.textContent = "Log In";
        loginBtn.href = "./members/login.html";
        mypageBtn.style.display = "none";
    }

});