<?php
add_action('wp_ajax_get_user','getUserMaster');
add_action('wp_ajax_nopriv_get_user','getUserrMaster');



function getUserMaster()
{

    $id = isset( $_POST['id'] ) ? absint( $_POST['id'] ) : 0;

    if ( $id ) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'identity';
        $query = $wpdb->prepare("SELECT * FROM $table_name WHERE id = %d", $id);
        $user = $wpdb->get_row($query);

        if ( $user ) {
            $idResume = $user->idResume;


            $diplomas = array();
            $diploma_data = array();
            recupDetail($wpdb, 'diploma', $idResume, $diplomas, $diploma_data);

            $experiences = array();
            $experience_data = array();
            recupDetail($wpdb, 'professional_experience', $idResume, $experiences, $experience_data);

            $hobbies = array();
            $hobbies_data = array();
            recupDetail($wpdb, 'hobbies', $idResume, $hobbies, $hobbies_data);

            $others = array();
            $other_data = array();
            recupDetail($wpdb, 'other', $idResume, $others, $other_data);

            // Retournez les données sous forme JSON
            wp_send_json_success( array(
                'id' => $id,
                'user' => $user,
                'idResume' => $idResume,
                'diplome' => $diploma_data,
                'experience' => $experience_data,
                'hobbies' => $hobbies_data,
                'other' => $other_data,
            ) );
        } else {
            wp_send_json_error( 'User not found' );
        }
    } else {
        wp_send_json_error( 'Invalid ID' );
    }
}