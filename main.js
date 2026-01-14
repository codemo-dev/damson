let icon = document.getElementById("menu-icon");
let menu = document.getElementById("menu");

icon.addEventListener("click", (e) => {
    menu.classList.toggle("show");
})