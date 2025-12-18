window.addEventListener('load', function () {
    const userIdInput = document.querySelector('#userId > input');
    const emailInput = document.querySelector('#emailId > input');
    const certInput = document.querySelector('#certification > input');

    const sendButton = document.querySelector('#form > button');
    const certButton = document.querySelector('#certification > button');
    const pwButton = document.querySelector('#password > button');

    const password = document.getElementById('password');
    const newPwInput = document.querySelector('#password > div > input');
    const newPassword = document.querySelector('#newPassword > input');
    const recheckPassword = document.querySelector('#recheckPassword > input');
    const pwMsg = document.getElementById('pwMsg');

    //고정 인증번호
    const CODE = '123456';

    // 처음엔 숨기
    password.classList.add('hidden');

    // 입력하면 활성화
    userIdInput.addEventListener('input', pushSendButton);
    emailInput.addEventListener('input', pushSendButton);

    function pushSendButton() {
        if (userIdInput.valued !== '' && emailInput.value !== '') {
            sendButton.classList.add('on');
        } else {
            sendButton.classList.remove('on');
        }
    }

    // 인증번호 발송
    sendButton.addEventListener('click', function () {

        if (userIdInput.value === '') {
            alert("아이디를 입력하세요");
            userIdInput.focus();
            return;
        }

        if (emailInput.value === '') {
            alert("이메일을 입력하세요")
            emailInput.focus();
            return;
        }

        certInput.value = CODE;
        certButton.classList.add('on');
    });

    // 인증확인 버튼
    certButton.addEventListener('click', function () {

        if (certInput.value === '') {
            alert("인증번호를 입력하세요.");
            certInput.focus();
            return;
        }

        password.classList.remove('hidden');

        if (newPwInput) {
            newPwInput.focus();
        }
    });

    // 패스워드 부분

    //처음엔 숨김
    pwMsg.style.display = 'none';

    function checkPassword() {
        // 둘 중 하나라도 비어 있으면 메세지 숨김
        if (newPassword.value === '' || recheckPassword.value === '') {
            pwMsg.style.display = 'none';
            pwMsg.classList.remove('error', 'okay');
            pwButton.classList.remove('on');
            return;
        }
        
        pwMsg.style.display = 'inline';
        pwMsg.classList.remove('error', 'okay');

        if (newPassword.value === recheckPassword.value) {
            pwMsg.textContent = '비밀번호가 일치합니다.';
            pwMsg.classList.add('okay');
            pwButton.classList.add('on');
        } else {
            pwMsg.textContent = '비밀번호가 일치하지 않습니다.';
            pwMsg.classList.add('error');
            pwButton.classList.remove('on');
        }
    }

    newPassword.addEventListener('input', checkPassword);
    recheckPassword.addEventListener('input', checkPassword);
});