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
    document.getElementById("userName").textContent = currentUser.name || "-";
    document.getElementById("userPhone").textContent = currentUser.phone || "-";
    document.getElementById("userEmail").textContent = currentUser.email || "-";
    document.getElementById("userId").textContent = currentUser.id || "-";
    document.getElementById("userPw").textContent = "*******"; // 비밀번호는 항상 가림
});