const opener_modal_contact = document.querySelectorAll('.js_modal_contact');

opener_modal_contact.forEach(function(button) {
    button.addEventListener('click', function(evt) {
        const postId = button.getAttribute('data-post-id');
        console.log(postId);
        evt.preventDefault();
        MicroModal.show('modal-contact');
    });
});



