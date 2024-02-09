
let params = new FormData();
params.append('action', 'get_status')
async function  addsatus() {
    try {
        let response = await fetch(MYSCRIPT.ajaxUrl, {
            method: 'post',
            body: params
        });
        let data = await response.json();
        console.log(data);

    } catch (error) {
        console.error('Erreur lors de la conversion de la réponse JSON :', error);
    }
}


const contact = document.querySelectorAll('.fa-trash');

contact.forEach( function(button) {
    button.addEventListener('click', function(evt) {
        const postId = button.dataset.postId;
        evt.preventDefault();
        params.append('id', postId);
        addsatus();

    });
});
