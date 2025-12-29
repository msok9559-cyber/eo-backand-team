window.addEventListener("load", function () {
    // 토글 버튼 기능
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    
    toggleButtons.forEach(function(btn){
        btn.addEventListener("click", function () {
            this.classList.toggle("on");
        });
    });

    // 로그인한 사용자 정보 가져오기
    const loginId = localStorage.getItem("loginUser");
    if (!loginId) {
        alert("로그인이 필요합니다.");
        window.location.href = "./login.html";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = users.find(user => user.id === loginId);

    if (!currentUser) {
        alert("회원 정보를 찾을 수 없습니다.");
        window.location.href = "./login.html";
        return;
    }

        // 화면에 정보 표시
    const userNameSpan = document.getElementById("userName");
    const userPhoneSpan = document.getElementById("userPhone");
    const userEmailSpan = document.getElementById("userEmail");
    const userIdSpan = document.getElementById("userId");
    const userPwSpan = document.getElementById("userPw");

    userNameSpan.textContent = currentUser.name || "-";
    userPhoneSpan.textContent = currentUser.phone || "-";
    userEmailSpan.textContent = currentUser.email || "-"; // 이메일 표시
    userIdSpan.textContent = currentUser.id || "-";
    userPwSpan.textContent = "*******";

    document.getElementById("login-btn").addEventListener("click", function (event) {
        event.preventDefault();

        // 로그인 정보 삭제
        localStorage.removeItem("loginUser");

        location.href = "./login.html";
    });
});