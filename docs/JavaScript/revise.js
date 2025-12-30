window.addEventListener('load', function () {
    const correction = document.getElementById('correction');

    //이름
    const nameSpan = document.getElementById('name');
    const row = nameSpan.closest('.info-row');
    const nameInput = row.querySelector('input');

    //이메일
    const emailSpan = document.getElementById('email');
    const emailRow = emailSpan.closest('.info-row');
    const emailIdBox = emailRow.querySelector('#emailId');
    const emailInput = emailIdBox.querySelector('input');
    const emailSelect = emailIdBox.querySelector('select'); 

    //핸드폰 번호
    const phoneSpan = document.getElementById("phoneNumber");
    const phoneRow = phoneSpan.closest(".info-row");
    const phoneInput = phoneRow.querySelector("input");

    //로그인한 사용자 정보
    const loginId = this.localStorage.getItem('loginUser'); 
    const users = JSON.parse(this.localStorage.getItem("users")) || [];

    //정규 표현식
    const phoneRegex = /^[0-9]{11}$/;
    const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*$/;
    
    let currentUserIndex = -1;
    
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === loginId) {
            currentUserIndex = i;
            break;
        }
    }

    const currentUser = users[currentUserIndex];

    //이름
    if (currentUser.name) {
        nameSpan.textContent = currentUser.name;
    } else {
        nameSpan.textContent = "-";
    }

    //이메일
    const atIndex = currentUser.email.indexOf("@");
    const emailId = currentUser.email.substring(0, atIndex);
    const emailDomain = currentUser.email.substring(atIndex + 1);

    emailSpan.textContent = currentUser.email;
    emailInput.value = "";
    emailSelect.value = emailDomain;

    //핸드폰 번호
    if (currentUser.phone) {
        phoneSpan.textContent = currentUser.phone;
    } else {
        phoneSpan.textContent = "-";
    }

    //수정 버튼
    correction.addEventListener("click", function (event) {
        event.preventDefault();

        const newName = nameInput.value;
        const newEmailId = emailInput.value;
        const newEmailDomain = emailSelect.value; 
        const newPhone = phoneInput.value;

        if (newName !== "") {
            currentUser.name = newName;
        }

        if (newEmailId !== "") {
            if (!emailRegex.test(newEmailId)) {
                window.alert("이메일 형식이 올바르지 않습니다.");
                emailInput.focus();
                return;
            }
            currentUser.email = newEmailId + "@" + newEmailDomain;
        }

        if (newPhone !== "") {
            if (!phoneRegex.test(newPhone)) {
                window.alert("휴대폰 번호를 숫자 11자리로 입력해주세요.");
                phoneInput.focus();
                return;
            }
            currentUser.phone = newPhone;
        }

        nameSpan.textContent = currentUser.name;
        emailSpan.textContent = currentUser.email;
        phoneSpan.textContent = currentUser.phone;

        users[currentUserIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
        
        window.alert('회원 정보가 수정되었습니다.');

        location.href = './mypage.html';
    });

    document.getElementById('login-btn').addEventListener("click", function (event) {
        event.preventDefault();

        // 로그인 정보 삭제
        localStorage.removeItem("loginUser");

        location.href = './login.html';
    });
});