window.addEventListener("load", function(){
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
    const certMessage = document.getElementById("certMessage");

    const completeInput = document.querySelector("#complete > input");
    const completeButton = document.querySelector("#complete > button");

    const form = document.getElementById('auth-form');
    const submitBtn = document.getElementById("btn-start");

    let isCertified = false;

    // 휴대폰 번호 정규식
    const phoneRegex = /^[0-9]+$/;
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

        hasError();
    });

    userId.addEventListener("input", function () {
        idMessage.style.display = "none";
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

        hasError();
    });

    pwCheck.addEventListener("input", function () {
        pwMessage.style.display = "none";
    });

    // 휴대폰 번호 검사
    function isValidPhone(value) {
        return phoneRegex.test(value);
    }

    // 휴대폰 인증번호
    certButton.addEventListener('click', function () {
        if (!isValidPhone(certInput.value)) {
            window.alert("휴대폰 번호를 숫자 11자리로 입력해주세요.");
            certInput.focus();
            return;
        }

        completeInput.value = CODE;
        alert(`인증번호가 발송되었습니다.\n인증번호는 ${CODE} 입니다.`);
    });

    // 휴대폰 번호 바뀌면 무효 처
    certInput.addEventListener("input", function () {
        isCertified = false;
        certMessage.style.display = "none";
    });

    // 인증 번호
    completeButton.addEventListener('click', function () {
        certMessage.style.display = 'block';

        if (completeInput.value !== CODE) {
            certMessage.textContent = "인증번호가 맞지 않습니다.";
            certMessage.style.color = "red";
            completeInput.focus();

            isCertified = false; 
            return;
        }

        certMessage.textContent = "인증확인 되었습니다.";
        certMessage.style.color = "green";

        isCertified = true; 
        hasError();
    });

    completeInput.addEventListener("input", function () {
        certMessage.style.display = "none";
        isCertified = false;
    });

    /* 전체 동의 */
    allClick.addEventListener("change", function () {
        termItems.forEach(function (item) {
            item.checked = allClick.checked;
        });
    });


    // 회원가입
    form.addEventListener('submit', function (event) {
        // Error 뜨면 막기
        if (submitError()) {
            event.preventDefault();
            return;
        }

        event.preventDefault();
        alert("회원가입이 완료되었습니다");
        // window.location.href = "login.html";
    });

    //오류메세지 있을경우 서브밋버튼 막기
    function submitError() {
        if (hasError()) {
            window.alert("입력한 정보를 다시 확인해주세요.");
            return true;
        }

        return false;
    }

    // 분리해서 써야 오류가 안생김
    function hasError() {
        const isError = (idMessage.style.display === "block" && idMessage.style.color === "red") ||
                        (pwMessage.style.display === "block" && pwMessage.style.color === "red") ||
                        (certMessage.style.display === "block" && certMessage.style.color === "red");
                        (isCertified === false);
        return isError;
    }
});