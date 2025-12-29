window.addEventListener('load', function () {
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(function(btn){

        btn.addEventListener("click", function () {
            this.classList.toggle("on");
        });
    });
});