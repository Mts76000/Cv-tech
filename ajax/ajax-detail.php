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
    $table_name = $wpdb->prefix . 'diploma';
    $query = "SELECT * FROM $table_name WHERE idResume = $idResume";
    $diplomas = $wpdb->get_results($query);

    $diploma_data = array();
    foreach ($diplomas as $diploma) {
        $diploma_data[] = $diploma;
    }


    // experience
    $table_name = $wpdb->prefix . 'professional_experience';
    $query = "SELECT * FROM $table_name WHERE idResume = $idResume";
    $experiences = $wpdb->get_results($query);

    $experience_data = array();
    foreach ($experiences as $experience) {
        $experience_data[] = $experience;
    }



    // experience
    $table_name = $wpdb->prefix . 'professional_experience';
    $query = "SELECT * FROM $table_name WHERE idResume = $idResume";
    $experiences = $wpdb->get_results($query);

    $experience_data = array();
    foreach ($experiences as $experience) {
        $experience_data[] = $experience;
    }






    // renvois l'info avec data
    showJson(
        array(
            'id' => $id,
            'user' => $user,
            'idResume' => $idResume,
            'diplome' => $diploma_data,
            'experience' => $experience_data

        )
    );

}