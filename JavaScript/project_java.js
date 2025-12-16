window.addEventListener('load', function () {
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
    const title = document.querySelector('#contents > h2');

    /* =========================
        sidebar
        ========================= */
    menuButton.addEventListener('click', function () {
        sidebar.classList.add('on');
    });

    closeButton.addEventListener('click', function () {
        sidebar.classList.remove('on');
    });

    /* =========================
        upload
        ========================= */
    imageButton.addEventListener('click', function () {
        upload.click();
    });

    
    /* =========================
        masage
        ========================= */
    function addMsg(text, who) {
        const div = document.createElement('div');
        
        div.className = 'msg ' + who; 
        div.textContent = text;
        chat.appendChild(div);
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const text = input.value.trim();
        
        if (text === "") return;
        
        addMsg(text, 'user');
        addMsg('고정된 답변입니다', 'bot');
        input.value = '';
        
        chat.style.display = "block";
        title.style.display = "none";
    });

    /* =========================
        newChat
        ========================= */
    newChat.addEventListener('click', function (event) {
        event.preventDefault();
        chat.innerHTML = '';
        chat.style.display = 'none';
        
        input.value = '';
        upload.value = '';
        
        title.style.display = "block";
        input.focus();
    });
});