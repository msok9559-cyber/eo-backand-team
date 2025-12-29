window.addEventListener("load", function () {

    const loginId = document.getElementById("loginId");
    const loginPw = document.getElementById("loginPw");
    const loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const id = loginId.value;
        const pw = loginPw.value;

        if (id === "" || pw === "") {
            alert("아이디와 비밀번호를 입력하세요.");
            return;
        }

        if (id === "park" && pw === "1234") {
            alert("로그인 되었습니다.");

            localStorage.setItem("loginUser", id);
            location.href = "../index.html";
        } else {
            alert("아이디 또는 비밀번호가 틀렸습니다.");
        }
    });
    

});