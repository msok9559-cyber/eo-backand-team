window.addEventListener("load", function(){
    const toggleBtn = document.getElementById('toggle-btn');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', function () {

        const isDark = document.body.classList.toggle('dark');

        if (isDark) {
            toggleBtn.classList.add('on');
        } else {
            toggleBtn.classList.remove('on');
        }
    });
});