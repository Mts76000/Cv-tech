<?php

add_action('wp_ajax_get_register_form','getRegisterFormMaster');
add_action('wp_ajax_nopriv_get_register_form','getRegisterFormMaster');

function getRegisterFormMaster() {
//    showJson($_POST);
    $username = sanitize_text_field($_POST['login']);
    $email = sanitize_email($_POST['email']);
    $password = sanitize_text_field($_POST['password']);

    $errors=[];
    $success=false;

    $errors = validText($errors, $username, 'login', 3, 55);
    $errors = validmail($errors, $email, 'email');

    if(count($errors)===0){
        $user = wp_create_user( $username, $password, $email );
        if ( is_wp_error( $user ) ) {
            $errors['login'] = $user->get_error_message();
        } else {
            $success = true;
        }
    }

    showJson(array('success' => $success, 'errors' => $errors));

}