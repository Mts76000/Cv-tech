const form_register = document.querySelector('#form_register');

let params = new FormData();
params.append('action', 'get_register_form')
const error_register = document.querySelector('#error_register');
async function GetFormRegisterUser() {
    let response = await fetch(MYSCRIPT.ajaxUrl, {
        method: 'post',
        body: params
    });
    let data;
    try {
        data = await response.json();
    } catch (error) {
        console.error('Erreur lors de la conversion de la réponse JSON :', error);
    }

    if (data) {
        console.log('Données récupérées par le JS :', data.success, data.errors);

        error_register.innerHTML = '';

        if (data.success) {

            MicroModal.close('modal-register');
            MicroModal.show('modal-login');

        } else {
            error_register.innerHTML = data.errors.login || data.errors.email;
        }
    } else {
        console.error('Réponse du serveur vide ou invalide');
    }
}


form_register.addEventListener('submit', (e)=> {
    e.preventDefault();
    params.append('login', document.querySelector('#identifiant').value);
    params.append('email', document.querySelector('#email').value);
    params.append('password', document.querySelector('#register_password').value);
    GetFormRegisterUser();
});

