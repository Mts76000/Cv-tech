
const form_login = document.querySelector('#form_login');
const error_login = document.querySelector('#error_login');
const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');

// Modal
MicroModal.init();

const  opener_modal_login = document.querySelectorAll('.js_modal_login');
const burger = document.querySelector("#nav_burger");

opener_modal_login.forEach(function(button) {
    button.addEventListener('click', function(evt) {
        evt.preventDefault();
        burger.classList.remove("opened");
        MicroModal.show('modal-login');
    });
});


// Gestion du formualaire de connexion
form_login.addEventListener('submit', function(evt) {
    evt.preventDefault();
    GetFormLoginUser();

});

async function GetFormLoginUser() {
    let params = new FormData();
    params.append('action', 'get_login_user');
    params.append('login', loginInput.value);
    params.append('password', passwordInput.value);
    const response = await fetch( MYSCRIPT.ajaxUrl,{
        method: 'post',
        body: params
    });
     const data = await response.json();
    console.log(data);
    error_login.innerHTML = '';
    if(data.success) {
        window.location.href = MYSCRIPT.home
    } else {
        error_login.innerHTML = data.errors.login;
    }

}




// Modal register

const opener_modal_register = document.querySelector('#js_modal_register');
opener_modal_register.addEventListener('click', function(evt) {
    evt.preventDefault();
    MicroModal.show('modal-register');

});















