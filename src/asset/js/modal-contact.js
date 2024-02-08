const opener_modal_contact = document.querySelectorAll('.js_modal_contact');


let params = new FormData();
params.append('action', 'get_contact')

async function GetContactUser() {
    try {
        var email = document.querySelector('.mail');
        email.innerHTML = "" ;
        var phone = document.querySelector('.phone');
        phone.innerHTML = ""
        var loader = document.querySelector('.loader');
        loader.classList.remove("loader-none");

        let response = await fetch(MYSCRIPT.ajaxUrl, {
            method: 'post',
            body: params
        });
        let data = await response.json();

        loader.classList.add("loader-none");
            email.innerHTML = "Email : " + data.user.email;
            email.href = "mailto:" + data.user.email;
            phone.innerHTML = "Telephone : " + data.user.phoneNumber;

    } catch (error) {
        console.error('Erreur lors de la conversion de la réponse JSON :', error);
    }
}
opener_modal_contact.forEach( function(button) {
    button.addEventListener('click', function(evt) {
        const postId = button.dataset.postId;
        // console.log(postId);
        evt.preventDefault();
        params.append('id', postId);
        MicroModal.show('modal-contact');
        GetContactUser();


    });
});



