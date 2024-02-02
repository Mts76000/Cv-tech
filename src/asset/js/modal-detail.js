
const detailOpenButtons = document.querySelectorAll('.js_modal_detail');


let params = new FormData();
params.append('action', 'get_detail')

async function GetDetailUser() {
    try {
        var prenom = document.querySelector('.firstName');
        prenom.innerHTML = ""
        var nom = document.querySelector('.lastName');
        nom.innerHTML = ""
        var location = document.querySelector('.location');
        location.innerHTML = ""
        var mail = document.querySelector('.email');
        mail.innerHTML = ""
        var tel = document.querySelector('.tel');
        tel.innerHTML = ""
        var loaderDetail = document.querySelector('.loader2');
        loaderDetail.classList.remove("loader-none");

        let response = await fetch(MYSCRIPT.ajaxUrl, {
            method: 'post',
            body: params
        });
        let data = await response.json();

        // console.log(data);
        loaderDetail.classList.add("loader-none");
        prenom.innerHTML = "Prenom : " + data.user.firstName
        nom.innerHTML = "Nom : " + data.user.lastName
        location.innerHTML = "Adresse : " + data.user.location
        mail.innerHTML = "email : " + data.user.email
        tel.innerHTML = "telephone : " + data.user.phoneNumber;


    } catch (error) {
        console.error('Erreur lors de la conversion de la réponse JSON :', error);
    }
}

detailOpenButtons.forEach(function(button) {
    button.addEventListener('click', function(evt) {
        const postId = button.dataset.postId;
        console.log(postId);
        evt.preventDefault();
        params.append('id', postId);
        MicroModal.show('modal-detail');
        GetDetailUser();
    });
});

