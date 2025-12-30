window.addEventListener('load', function () {
    
    const site = document.getElementById('site');
    // sidebar
    const menuButton = document.getElementById('menu');
    const sidebar = document.getElementById('sidebar');
    const closeButton = document.getElementById('close');
    // upload
    const imageButton = document.getElementById('image');
    const upload = document.getElementById('upload');
    // newChat
    const question = document.getElementById('question');
    const newChat = document.getElementById('newChat');
    // chat
    const form = document.getElementById('prompt');
    const chat = document.getElementById('chat');
    const contents = this.document.getElementById('contents');
    const title = document.querySelector('#contents > section > h2');
    
    // textarea 높이를 저장
    const baseHeight = question.scrollHeight;

    // sidebar
    menuButton.addEventListener('click', function () {
        sidebar.classList.add('on');
        site.classList.add('shift');
        menuButton.style.visibility = 'hidden';

        if (form.classList.contains('fixed')) {
            form.style.left = 'calc(50% + 125px)';
        }
    });

    closeButton.addEventListener('click', function () {
        sidebar.classList.remove('on');
        site.classList.remove('shift');
        menuButton.style.visibility = 'visible';

        if (form.classList.contains('fixed')) {
            form.style.left = '50%'
        }
    });

    // upload
    imageButton.addEventListener('click', function () {
        upload.click();
    });
    
    // masage
    function addMsg(text, who) {
        const Msg = document.createElement('div');
        
        Msg.className = 'msg ' + who; 
        Msg.textContent = text;
        chat.appendChild(Msg);
    }

    // chat
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const text = question.value;
        if (text === "") return;

        addMsg(text, 'user');

        // 소문자로 바꿔서 비교
        const lower = text.toLowerCase();

        //질문 내용
        if (lower.includes('jdjs')) {
            addMsg(
                    `JDJS는 이스트소프트 백엔드 프로젝트 2팀의 팀명이에요.\n정식 이름은 ‘집단지성’이고, 줄여서 JDJS라고 부릅니다.\n\n팀 구성은\n팀장: 박민성\n팀원: 김재웅, 정창규\n\n이렇게예요!`,
                    'bot'
                );
            } else if (lower.includes('ai')) {
                addMsg(
                    `AI(인공지능)은 사람이 배우고 생각하는 과정을 컴퓨터가 스스로 흉내 낼 수 있도록 만든 기술이에요.\n대표적으로 챗봇, 이미지 생성, 음성 인식 같은 데에서 사용돼요.`,
                    'bot'
                );
            } else if (lower.includes('점심')) {
                addMsg(
                    `점심 고민 중이구나! 오늘은 이런 메뉴 어때?\n- 김치찌개\n- 비빔밥\n- 제육볶음\n- 라면 + 김밥\n맛있게 먹고 힘내`,
                    'bot'
                );
            } else {
                addMsg(
                    '질문을 잘 이해하지 못했어. 다른 방식으로 한번 더 물어봐 줄래?',
                    'bot'
                );
            }

        question.value = '';
        
        // 전송후 다시 1줄 상태로 변
        question.style.height = baseHeight + 'px';
        question.classList.remove('font');

        chat.style.display = 'block';
        title.style.display = 'none';

        form.classList.add('fixed');
        contents.classList.add('on');

        // 사이드바가 열린상태로 채팅을 입력하면 위치가 제대로 안 잡힌걸 수정
        if (sidebar.classList.contains('on')) {
            form.style.left = 'calc(50% + 125px)';
        } else {
            form.style.left = '50%';
        }

        window.scrollTo(0, document.body.scrollHeight);
    });

    // newChat

    newChat.addEventListener('click', function (event) {
        event.preventDefault();
        chat.innerHTML = '';
        chat.style.display = 'none';
        
        question.value = '';
        // question.style.height = baseHeight + 'px';
        upload.value = '';
        
        title.style.display = 'block';
        contents.classList.remove('on');
        form.classList.remove('fixed');

        question.classList.remove('font');
        question.focus();
    });

    //채팅 길게 입력하면 창 커지게하기, 글자입력후 지웠을때 원상복귀
    question.addEventListener('input', function () {
        if (this.value === '') {
            this.style.height = baseHeight + 'px';
            question.classList.remove('font');
        } else {
            this.style.height = baseHeight + 'px';
            this.style.height = this.scrollHeight + 'px';
            question.classList.add('font');
        }
    });

    // Shift+Enter 누르면 줄바꿈
    question.addEventListener('keydown', function(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            form.requestSubmit();
        }
    });

    // 로그아웃 location 
    document.getElementById("logout").addEventListener("click", function (event) {
        event.preventDefault();

        // 로그인 정보 삭제
        localStorage.removeItem("loginUser");

        location.href = "./login.html";
    });
});