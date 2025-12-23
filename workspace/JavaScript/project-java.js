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
        const div = document.createElement('div');
        
        div.className = 'msg ' + who; 
        div.textContent = text;
        chat.appendChild(div);
    }

    // chat
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const text = question.value;
        if (text === "") return;
        
        addMsg(text, 'user');
        addMsg('고정된 답변입니다', 'bot');
        question.value = '';
        
        // 전송후 다시 1줄 상태로 변
        question.style.height = baseHeight + 'px';

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

        question.focus();
    });

    //채팅 길게 입력하면 창 커지게하기, 글자입력후 지웠을때 원상복귀
    question.addEventListener('input', function () {
        if (this.value === '') {
            this.style.height = baseHeight + 'px';
        } else {
            this.style.height = baseHeight + 'px';
            this.style.height = this.scrollHeight + 'px';
        }
    });

    // Shift+Enter 누르면 줄바꿈
    question.addEventListener('keydown', function(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            form.requestSubmit();
        }
    });

});