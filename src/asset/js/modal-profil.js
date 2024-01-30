
// modal profil

const opener_profil = document.querySelector('#modal_test');
opener_profil.addEventListener('click', function(evt) {
    evt.preventDefault();
    MicroModal.show('modal-test');

});
