// 아이디 중복확인 변수
const userId = document.getElementById("userId");
const idCheckBtn = document.getElementById("idCheckBtn");
const idMessage = document.getElementById("idMessage");

// 사용중인 아이디 임의 값
const usedIds = ["park", "kim", "jung"];


//비밀번호 입력 확인 변수
const pw = document.getElementById("password");
const pwCheck = document.getElementById("passwordCheck");
const msg = document.getElementById("pwMessage");

// 체크박스 전체동의시 전체 클릭  변수
const allClick = document.getElementById("allclick");
const termItmes = document.querySelectorAll(".trem-item");


// 아이디 중복 확인
idCheckBtn.addEventListener("click", function () {
    const inputId = userId.value;

    if (inputId === "") {
        idMessage.style.display = "none";
        return;
    }

    idMessage.style.display = "block";

    if (usedIds.includes(inputId)) {
        idMessage.textContent = "이미 사용 중인 아이디입니다.";
        idMessage.style.color = "red";
    } else {
        idMessage.textContent = "사용 가능한 아이디입니다.";
        idMessage.style.color = "green";
    }
});

//비밀번호 입력 확인
pwCheck.addEventListener("keyup", function () {

    if (pw.value === "" || pwCheck.value === "") {
        msg.style.display = "none";
        return;
    }

    // 비밀번호 비교
    if (pw.value === pwCheck.value) {
        msg.textContent = "비밀번호가 일치합니다.";
        msg.style.color = "green";
        msg.style.display = "block";
    } else {
        msg.textContent = "비밀번호가 일치하지 않습니다.";
        msg.style.color = "red";
        msg.style.display = "block";
    }
});

// 체크박스 전체동의시 전체 클릭 스크립트
allClick.addEventListener("change", function(){
    for(let i = 0; i < termItmes.length; i++){
        termItmes[i].checked = allClick.checked;
    }
})