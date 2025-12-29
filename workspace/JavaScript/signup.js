window.addEventListener("load", function(){
    const userId = document.getElementById("userId");
    const idCheckBtn = document.getElementById("idCheckBtn");
    const idMessage = document.getElementById("idMessage");

    const pw = document.getElementById("password");
    const pwCheck = document.getElementById("passwordCheck");
    const pwMessage = document.getElementById("pwMessage");

    const nameInput = document.getElementById("userName");
    const phoneInput = document.getElementById("phone");

    const emailInput = document.querySelector("#emailId > input");
    const emailSelect = document.querySelector("#emailId > select");

    const allClick = document.getElementById("allclick");
    const termItems = document.querySelectorAll(".term-item");

    const certInput = document.querySelector("#certification > input");
    const certButton = document.querySelector("#certification > button");
    const certMessage = document.getElementById("certMessage");

    const completeInput = document.querySelector("#complete > input");
    const completeButton = document.querySelector("#complete > button");

    const form = document.getElementById('auth-form');

    let isCertified = false;
    let isIdChecked = false;

    // 휴대폰 번호 정규식
    const phoneRegex = /^[0-9]{11}$/;
    const CODE = "485275";

    // 기존 회원 정보 불러오기
    const users = JSON.parse(this.localStorage.getItem("users")) || [];
    const usedIds = users.map(user => user.id)

    /* 아이디 중복 */
    idCheckBtn.addEventListener("click", function () {
        if (!userId.value) {
            idMessage.style.display = "block";
            idMessage.textContent = "아이디를 입력해주세요.";
            idMessage.style.color = "red";
            isIdChecked = false;
            return;
        }

        idMessage.style.display = "block";
        if (usedIds.includes(userId.value)) {
            idMessage.textContent = "이미 사용 중인 아이디입니다.";
            idMessage.style.color = "red";
            isIdChecked = false;
        } else {
            idMessage.textContent = "사용 가능한 아이디입니다.";
            idMessage.style.color = "green";
            isIdChecked = true;
        }
        hasError();
    });

    userId.addEventListener("input", function () {
        idMessage.style.display = "none";
        isIdChecked = false;
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

    // 휴대폰 인증 번호
    certButton.addEventListener('click', function () {
        if (!isValidPhone(certInput.value)) {
            window.alert("휴대폰 번호를 숫자 11자리로 입력해주세요.");
            certInput.focus();
            return;
        }

        completeInput.value = CODE;
        alert(`인증 번호가 발송되었습니다.\n인증 번호는 ${CODE} 입니다.`);
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
            certMessage.textContent = "인증 번호가 맞지 않습니다.";
            certMessage.style.color = "red";
            completeInput.focus();

            isCertified = false; 
            return;
        }

        certMessage.textContent = "인증 확인 되었습니다.";
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
        event.preventDefault();

        // Error 뜨면 막기
        if (submitError()) return;

        const email = emailInput.value + "@" + emailSelect.value;
        
        const newUser = {
            id: userId.value,
            password: pw.value,
            name: nameInput.value,
            phone: phoneInput.value,
            email: email

        };
        
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        alert("회원 가입이 완료되었습니다");
        window.location.href = "./login.html";
    });

    //오류메세지 있을 경우 서브밋 버튼 막기
    function submitError() {
        if (hasError()) {
            window.alert("입력한 정보를 다시 확인해주세요.");
            return true;
        }

        return false;
    }

    // 분리해서 써야 오류가 안생김
    function hasError() {
        const idError =
        (idMessage.style.display === "block" && idMessage.style.color === "red"); 

        const pwError =
            (pwMessage.style.display === "block" && pwMessage.style.color === "red");  

        const certError =
            (certMessage.style.display === "block" && certMessage.style.color === "red"); 

        return idError || pwError || certError || !isCertified || !isIdChecked;  
    }
});