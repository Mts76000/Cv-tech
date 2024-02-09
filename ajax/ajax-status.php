<?php
add_action('wp_ajax_get_status','getStatusMaster');
add_action('wp_ajax_nopriv_get_status','getStatusMaster');


function getStatusMaster()
{

    $id = isset( $_POST['id'] ) ? absint( $_POST['id'] ) : 0;

    if ( $id ) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'identity';
        $query = $wpdb->prepare("UPDATE $table_name SET status = 1 WHERE id = %d", $id);
        $result = $wpdb->query( $query );

        if ( $result === false ) {
            wp_send_json_error( 'Failed to update status' );
        } else {
            wp_send_json_success( array( 'id' => $id ) );
        }
    } else {
        wp_send_json_error( 'Invalid ID' );
    }
}
