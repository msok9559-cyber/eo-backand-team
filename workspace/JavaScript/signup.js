const userId = document.getElementById("userId");
const idCheckBtn = document.getElementById("idCheckBtn");
const idMessage = document.getElementById("idMessage");

const usedIds = ["park", "kim", "jung"];

const pw = document.getElementById("password");
const pwCheck = document.getElementById("passwordCheck");
const pwMessage = document.getElementById("pwMessage");

const allClick = document.getElementById("allclick");
const termItems = document.querySelectorAll(".term-item");

const certInput = document.querySelector("#certification > input");
const certButton = document.querySelector("#certification > button");

const completeInput = document.querySelector("#complete > input");
const completeButton = document.querySelector("#complete > button");

const form = document.getElementById('auth-form');

const CODE = "485275";

/* 아이디 중복 */
idCheckBtn.addEventListener("click", function () {
    if (!userId.value) return;

    idMessage.style.display = "block";
    if (usedIds.includes(userId.value)) {
        idMessage.textContent = "이미 사용 중인 아이디입니다.";
        idMessage.style.color = "red";
    } else {
        idMessage.textContent = "사용 가능한 아이디입니다.";
        idMessage.style.color = "green";
    }
});

/* 비밀번호 확인 */
pwCheck.addEventListener("keyup", function () {
    if (!pw.value || !pwCheck.value) return;

    pwMessage.style.display = "block";
    if (pw.value === pwCheck.value) {
        pwMessage.textContent = "비밀번호가 일치합니다.";
        pwMessage.style.color = "green";
    } else {
        pwMessage.textContent = "비밀번호가 일치하지 않습니다.";
        pwMessage.style.color = "red";
    }
});

// 휴대폰 인증번호
certButton.addEventListener('click', function () {
    completeInput.value = CODE;
    alert(`인증번호가 발송되었습니다.\n인증번호는 ${CODE} 입니다.`);
});

completeButton.addEventListener('click', function () {
    if (completeInput.value !== CODE) {
        window.alert("인증번호가 맞지 않습니다.");
        certInput.focus();
        return;
    }

    window.alert("인증되었습니다.");
});


/* 전체 동의 */
allClick.addEventListener("change", function () {
    termItems.forEach(function (item) {
        item.checked = allClick.checked;
    });
});


// 회원가입
form.addEventListener('submit', function (event) {
    event.preventDefault();

    alert("회원가입이 완료되었습니다");
    window.location.href = "login.html";
});