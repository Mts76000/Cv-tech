
// modal profil

const profilOpenButtons = document.querySelectorAll('.modal_profil');
const burger = document.querySelector("#nav_burger");

profilOpenButtons.forEach(function(button) {
    button.addEventListener('click', function(evt) {
        evt.preventDefault();
        burger.classList.remove("opened");
        MicroModal.show('modal-test');
    });
});

