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
    const input = document.getElementById('question');
    const newChat = document.getElementById('newChat');
    // chat
    const form = document.getElementById('prompt');
    const chat = document.getElementById('chat');
    const contents = this.document.getElementById('contents');
    const title = document.querySelector('#contents > section > h2');

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
        const text = input.value;
        
        if (text === "") return;
        
        addMsg(text, 'user');
        addMsg('고정된 답변입니다', 'bot');
        input.value = '';
        
        chat.style.display = 'block';
        title.style.display = 'none';

        form.classList.add('fixed');
        contents.classList.add('on');3

        // 사이드바가 열린상태로 채팅을 입력하면 위치가 제대로 안잡힌걸 수
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
        
        input.value = '';
        upload.value = '';
        
        title.style.display = 'block';
        contents.classList.remove('on');
        form.classList.remove('fixed');

        input.focus();
    });
});