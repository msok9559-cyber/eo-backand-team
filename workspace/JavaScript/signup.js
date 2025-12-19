const userId = document.getElementById("userId");
const idCheckBtn = document.getElementById("idCheckBtn");
const idMessage = document.getElementById("idMessage");

const usedIds = ["park", "kim", "jung"];

const pw = document.getElementById("password");
const pwCheck = document.getElementById("passwordCheck");
const pwMessage = document.getElementById("pwMessage");

const allClick = document.getElementById("allclick");
const termItems = document.querySelectorAll(".term-item");

/* 아이디 중복 */
idCheckBtn.addEventListener("click", () => {
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
pwCheck.addEventListener("keyup", () => {
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

/* 전체 동의 */
allClick.addEventListener("change", () => {
    termItems.forEach(item => item.checked = allClick.checked);
});