let menu = document.querySelector(".menu");
let icon = document.querySelector(".nav__icon");

icon.addEventListener("click", function() {
    if(this.classList.contains("fa-bars")){
        this.classList = "fa-solid fa-xmark nav__icon";
        menu.style.left = 0;
    } else{
        this.classList = "fa-solid fa-bars nav__icon";
        menu.style.left = "-220px"
    }
})
