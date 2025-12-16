const toggleBtn = document.querySelector('.theme-toggle');
const toggleText = toggleBtn.querySelector('.toggle-text');

toggleBtn.addEventListener('click',() =>{
    toggleBtn.classList.toggle('active');
    document.body.classList.toggle('dark');

    toggleText.textContent =
        document.body.classList.contains('dark') ? "ON" : "OFF"
});