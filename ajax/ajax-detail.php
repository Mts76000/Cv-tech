<?php
add_action('wp_ajax_get_detail','getDetailMaster');
add_action('wp_ajax_nopriv_get_detail','getDetailMaster');



function getDetailMaster()
{
    $id = trim(strip_tags($_POST['id']));

    global $wpdb;
    $table_name = $wpdb->prefix . 'identity';
    $query = "SELECT * FROM $table_name WHERE id = $id";
    $user = $wpdb->get_row($query);

    $idResume = $user->idResume;

 // diplome
    $diplomas = array();
    $diploma_data = array();
    recupDetail($wpdb, 'diploma', $idResume, $diplomas, $diploma_data);

    // experience
    $experiences = array();
    $experience_data = array();
    recupDetail($wpdb, 'professional_experience', $idResume, $experiences, $experience_data);

    // hobbies
    $hobbies = array();
    $hobbies_data = array();
    recupDetail($wpdb, 'hobbies', $idResume, $hobbies, $hobbies_data);

 // other
    $others = array();
    $other_data = array();
    recupDetail($wpdb, 'other', $idResume, $others, $other_data);


    showJson(
        array(
            'id' => $id,
            'user' => $user,
            'idResume' => $idResume,
            'diplome' => $diploma_data,
            'experience' => $experience_data,
            'hobbies' => $hobbies_data,
            'other' => $other_data,
        )
    );
}