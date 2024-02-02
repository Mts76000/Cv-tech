<?php
add_action('wp_ajax_get_contact','getContactMaster');
add_action('wp_ajax_nopriv_get_contact','getContactMaster');




function getContactMaster()
{
    $id = trim(strip_tags($_POST['id']));

    global $wpdb;
    $table_name = $wpdb->prefix . 'identity';
    $query = "SELECT * FROM $table_name WHERE id = $id";
    $user = $wpdb->get_row($query);


    // renvois l'info avec data
     showJson(
         array(
             'id' => $id,
             'user' => $user
         )
     );

}