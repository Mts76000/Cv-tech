<?php

if (isset($_POST['submit'])) {
    $username = $_POST['identifiant'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Validation éventuelle des données (vous pouvez ajouter plus de validation ici)


    $user_id = wp_create_user($username, $password, $email);


    if (! is_wp_error($user_id)) {
    } else {
        $error_message = $user_id->get_error_message();
    }
}
?>



<div class="modal micromodal-slide" id="modal-register" aria-hidden="true">
    <div class="modal__overlay" tabindex="-2" data-micromodal-close>
        <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-2-title">
            <header class="modal__header">
                <h2 class="modal__title" id="modal-2-title">
                    Inscription
                </h2>
                <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
            </header>
            <main class="modal__content" id="modal-2-content">
                <form id="form_login" action="" method="post" novalidate>
                    <input type="text" id="identifiant" name="identifiant" placeholder="Identifiant">
                    <input type="email" id="email" name="email" placeholder="Email">
                    <input type="password" id="password" name="password" placeholder="password">
                    <div class="error">
                        <span class="error" id="error_login"></span>
                    </div>
                    <input type="submit" name="submit">
                </form>
            </main>
            <footer class="modal__footer">
            </footer>
        </div>
    </div>
</div>

