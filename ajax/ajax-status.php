<?php
add_action('wp_ajax_get_status','getStatusMaster');
add_action('wp_ajax_nopriv_get_status','getStatusMaster');


function getStatusMaster()
{
    $id = trim(strip_tags($_POST['id']));

    global $wpdb;
    $table_name = $wpdb->prefix . 'identity';
    $query = "UPDATE $table_name SET status = 1 WHERE id = $id";
    $user = $wpdb->get_row($query);


    // renvois l'info avec data
    showJson(
        array(
            'id' => $id,

        )
    );

}