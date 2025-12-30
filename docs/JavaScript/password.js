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

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const emailSelect = document.querySelector('#emailId > select');
    let currentUserIndex = -1;
    // 고정 인증번호
    const CODE = '985632';

    // 이메일 정규 표현식
    const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*$/;

    // 처음엔 숨기
    password.classList.add('hidden');

    // 입력하면 활성화
    userIdInput.addEventListener('input', function () {
        pushSendButton();
        resetCertification();
    });
    emailInput.addEventListener('input', function () {
        pushSendButton();
        resetCertification();
    });

    function pushSendButton () {
        if (userIdInput.value !== '' && emailInput.value !== '') {
            sendButton.classList.add('on');
        } else {
            sendButton.classList.remove('on');
        }
    }

    function resetCertification () {
        certInput.value = '';
        certButton.classList.remove('on');
    }

    // 인증번호 발송
    sendButton.addEventListener('click', function () {

        //아이디와 이메일 형식이 맞지 않을경우
        if (!emailRegex.test(userIdInput.value)) {
            window.alert("아이디가 올바르지 않습니다.");
            userIdInputInput.focus();
            return;
        }

        if (!emailRegex.test(emailInput.value)) {
            window.alert("이메일 형식이 올바르지 않습니다.");
            emailInput.focus();
            return;
        }

        const idValue = userIdInput.value;
        const emailId = emailInput.value;
        const emailDomain = emailSelect.value;
        const fullEmail = emailId + '@' + emailDomain;

        for (let i = 0; i < users.length; i++) {
            if (users[i].id === idValue && users[i].email === fullEmail) {
                currentUserIndex = i;
                break;
            }
        }

        if (currentUserIndex === -1) {
            window.alert('입력하신 아이디와 이메일로 가입된 회원이 없습니다.');
            return;
        }

        certInput.value = CODE;
        certButton.classList.add('on');
        window.alert(`인증번호가 발송되었습니다.\n인증번호는 ${CODE} 입니다.`);
    });

    // 인증확인 버튼
    certButton.addEventListener('click', function () {

        if (certInput.value !== CODE) {
            window.alert("인증번호가 맞지 않습니다.");
            certButton.classList.remove('on');
            certInput.focus();
            return;
        }

        password.classList.remove('hidden');

        if (newPwInput) {
            newPwInput.focus();
        }
    });

    certInput.addEventListener('input', function() {
        if (certInput.value === '') {
            certButton.classList.remove('on');
        } else {
            certButton.classList.add('on');
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

    // 재설정 버튼
    pwButton.addEventListener('click', function () {
        users[currentUserIndex].password = newPassword.value;
        localStorage.setItem('users', JSON.stringify(users));

        window.alert('비밀번호가 재설정 되었습니다');
        location.href = "../members/login.html";
    });
});