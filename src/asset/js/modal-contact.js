const opener_modal_contact = document.querySelectorAll('.js_modal_contact');


let params = new FormData();
params.append('action', 'get_contact')

async function GetContactUser() {
    try {
        let response = await fetch(MYSCRIPT.ajaxUrl, {
            method: 'post',
            body: params
        });
        let data = await response.json();

        console.log(data);
        console.log(data.user.email);
        console.log(data.user.phoneNumber);

        var email = document.querySelector('.mail');
            email.innerHTML = "email : " + data.user.email;

            var phone = document.querySelector('.phone');
            phone.innerHTML = "telephone : " + data.user.phoneNumber;






    } catch (error) {
        console.error('Erreur lors de la conversion de la réponse JSON :', error);
    }
}
opener_modal_contact.forEach( function(button) {
    button.addEventListener('click', function(evt) {
        //const postId = button.getAttribute('data-post-id');
        const postId = button.dataset.postId;
        console.log(postId);
        evt.preventDefault();
        params.append('id', postId);
        MicroModal.show('modal-contact');
        GetContactUser();


    });
});



