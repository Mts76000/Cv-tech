<?php
add_action('wp_ajax_get_detail','getDetailMaster');
add_action('wp_ajax_nopriv_get_detail','getDetailMaster');



function getDetailMaster()
{

    //secu recruteur

    $id = absint($_POST['id']);

    global $wpdb;
    $table_name = $wpdb->prefix . 'identity';
    $query = $wpdb->prepare("SELECT * FROM $table_name WHERE id = %d", $id);
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

    $drivings = array();
    $driving_data = array();
    recupDetail($wpdb, 'driving_license', $idResume, $drivings, $driving_data);

    $softs = array();
    $soft_data = array();
    recupDetail($wpdb, 'soft_skill', $idResume, $softs, $soft_data);

    $hards = array();
    $hard_data = array();
    recupDetail($wpdb, 'hard_skill', $idResume, $hards, $hard_data);

    $reseauxs = array();
    $reseaux_data = array();
    recupDetail($wpdb, 'social_network', $idResume, $reseauxs, $reseaux_data);

    $languages = array();
    $languages_data = array();
    recupDetail($wpdb, 'language', $idResume, $languages, $languages_data);


    showJson(
        array(
            'id' => $id,
            'user' => $user,
            'idResume' => $idResume,
            'diplome' => $diploma_data,
            'experience' => $experience_data,
            'hobbies' => $hobbies_data,
            'other' => $other_data,
            'driving' => $driving_data,
            'soft' => $soft_data,
            'hard' => $hard_data,
            'netword' => $reseaux_data,
            'language' => $languages_data,
        )
    );
}