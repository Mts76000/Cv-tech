<?php

require get_template_directory() . '/inc/generale.php';
require get_template_directory() . '/inc/func.php';

require get_template_directory() . '/ajax/ajax-login.php';
require get_template_directory() . '/ajax/ajax-register.php';
require get_template_directory() . '/ajax/ajax-contact.php';


require get_template_directory() . '/inc/extra/template-tags.php';
require get_template_directory() . '/inc/extra/template-functions.php';



/* Disable WordPress Admin Bar for all users */
/* add_filter( 'show_admin_bar', '__return_false' );  */