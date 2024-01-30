<?php


add_action('wp_ajax_get_login_user', 'getLoginuser');
add_action('wp_ajax_nopriv_get_login_user', 'getLoginuser');


function getLoginuser()
{
    $errors = array();
    $success = false;
    

    $login    = sanitize_text_field($_POST['login']);
    $password = sanitize_text_field($_POST['password']);
    $creds = array(
        'user_login'    => $login,
        'user_password' => $password,
        'remember'      => true
    );
    $user = wp_signon($creds, false);
    if (is_wp_error($user)) {
        $errors['login'] = $user->get_error_message();
    } else {
        $success = true;
    }
    showJson(array(
        'errors'  => $errors,
        'success' => $success
    ));
}
