<?php
add_action('wp_ajax_get_register_form','getRegisterFormMaster');
add_action('wp_ajax_nopriv_get_register_form','getRegisterFormMaster');

function getRegisterFormMaster() {
    $username = sanitize_text_field($_POST['login']);
    $email = sanitize_email($_POST['email']);
    $password = sanitize_text_field($_POST['password']);

    $errors=[];
    $success=false;

    $errors = validText($errors, $username, 'login', 3, 55);
    $errors = validmail($errors, $email, 'email');

    if(count($errors)===0){
        $user_id = wp_create_user( $username, $password, $email );
        if ( is_wp_error( $user_id ) ) {
            $errors['login'] = $user_id->get_error_message();
        } else {
            $user = new WP_User($user_id);
            $user->set_role('candidat');

            $success = true;
        }
    }

    wp_send_json(array('success' => $success, 'errors' => $errors));
}


