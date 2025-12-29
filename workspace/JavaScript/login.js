window.addEventListener("load", function () {

    const loginId = document.getElementById("loginId");
    const loginPw = document.getElementById("loginPw");
    const loginBtn = document.getElementById("loginBtn");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    loginBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const id = loginId.value;
        const pw = loginPw.value;

        if (!id || !pw) {
            alert("아이디와 비밀번호를 입력하세요.");
            return;
        }

        const loginUser = users.find(user => user.id === id && user.password === pw);

        if(!loginUser){
            alert("아이디 또는 비밀번호가 틀렸습니다.");
            return;
        }

        localStorage.setItem("loginUser", loginUser.id);

        alert("로그인 되었습니다.");
        location.href = "../index.html"

    });
    

});