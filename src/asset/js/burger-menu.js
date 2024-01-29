const menu = document.querySelector("#link_burger");
const burger = document.querySelector("#nav_burger");
const close = document.querySelector(".close")

menu.addEventListener("click", (e) => {
    e.preventDefault();
    burger.classList.add("opened");

});


close.addEventListener("click", (e) => {
    e.preventDefault();
    burger.classList.remove("opened");

});