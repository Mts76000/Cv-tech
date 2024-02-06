<?php
add_action('wp_ajax_record_cv', 'getrecord_cv');
add_action('wp_ajax_nopriv_record_cv', 'getrecord_cv');

function getrecord_cv()
{

    $errors = array();
    $success = false;
    global $wpdb;

    $user = wp_get_current_user();
    $date = current_time('mysql');


    //RESUME
    $userid = $user->ID;


    $wpdb->insert(
        'wp_cvtech_resume',
        array(
            'idUser' => sanitize_text_field($userid),
            'created_at' => $date,

        ),
    );


    // ID RESUME RECUP
    global $wpdb;
    $query = "SELECT id FROM wp_cvtech_resume WHERE idUser = $userid";
    $idREsume = $wpdb->get_row($query);



    // IDENTITY
    $nom = trim(strip_tags($_POST['nom']));
    $prenom = trim(strip_tags($_POST['prenom']));
    $email = trim(strip_tags($_POST['mail-input']));
    $adresse = trim(strip_tags($_POST['adresse']));
    $tel = trim(strip_tags($_POST['tel']));
    $birthday = trim(strip_tags($_POST['birthday']));



    $wpdb->insert(
        'wp_cvtech_identity',
        array(
            'idResume' => $idREsume->id,
            'firstName' => sanitize_text_field($prenom),
            'lastName' => sanitize_text_field($nom),
            'location' => sanitize_text_field($adresse),
            'email' => sanitize_text_field($email),
            'phoneNumber' => sanitize_text_field($tel),
            'birthday' => sanitize_text_field($birthday),

        ),
    );

    // DIPLOMA
    $diplomes = $_POST['diplome'];
    $diplocation = $_POST['dip_location'];
    $school = $_POST['school'];
    $status = $_POST['status'];
    $dipStart = $_POST['dip_start'];
    $dipEnd = $_POST['dip_end'];


    for ($i = 0; $i < count($diplomes); $i++) {
        $alldiplome[] = array(
            'title' => sanitize_text_field($diplomes[$i]),
            'location' => sanitize_text_field($diplocation[$i]),
            'school' => sanitize_text_field($school[$i]),
            'status' => sanitize_text_field($status[$i]),
            'dip_start' => sanitize_text_field($dipStart[$i]),
            'dip_end' => sanitize_text_field($dipEnd[$i]),
        );
    }

    foreach ($alldiplome as $item) {
        if (empty($item['title']) || empty($item['location']) || empty($item['dip_start']) || empty($item['dip_end']) || empty($item['status']) || empty($item['school'] )) {
            $errors[] = 'Tous les champs doivent être remplis pour chaque diplôme.';
        } else {
            $wpdb->insert(
                'wp_cvtech_diploma',
                array(
                    'idResume' => $idREsume->id,
                    'diplomaName' => $item['title'],
                    'schoolLocation' => $item['location'],
                    'school' => $item['school'],
                    'diplomastatus' => $item['status'],
                    'diplomaStart' => $item['dip_start'],
                    'diplomaEndYear' => $item['dip_end'],
                ),
            );
        }
    }


    // EXPERIENCE
    $experiences = $_POST['experience'];
    $expLocation = $_POST['exp_location'];
    $poste = $_POST['poste'];
    $expStart = $_POST['exp_start'];
    $expEnd = $_POST['exp_end'];

    for ($i = 0; $i < count($experiences); $i++) {
        $allexperience[] = array(
            'title' => sanitize_text_field($experiences[$i]),
            'location' => sanitize_text_field($expLocation[$i]),
            'poste' => sanitize_text_field($poste[$i]),
            'exp_start' => sanitize_text_field($expStart[$i]),
            'exp_end' => sanitize_text_field($expEnd[$i]),
        );
    }

    foreach ($allexperience as $item) {
        if (empty($item['title']) || empty($item['location']) || empty($item['exp_start']) || empty($item['exp_end']) || empty($item['poste'])) {
            $errors[] = 'Tous les champs doivent être remplis pour chaque expérience.';
        } else {
            $wpdb->insert(
                'wp_cvtech_professional_experience',
                array(
                    'idResume' => $idREsume->id,
                    'peName' => $item['title'],
                    'peLocation' => $item['location'],
                    'pePositionHeld' => $item['poste'],
                    'peStart' => $item['exp_start'],
                    'peEnd' => $item['exp_end'],
                ),
                array('%s', '%s', '%s', '%s', '%s')
            );
        }
    }

    // DRIVING
    $permis = $_POST['permis'];
    $allpermis = array();

    for ($i = 0; $i < count($permis); $i++) {
        $allpermis[] = sanitize_text_field($permis[$i]);
    }

    foreach ($allpermis as $item) {
        if (empty($item)) {
            $errors[] = 'Tous les choix doivent être sélectionnés pour chaque permis de conduire.';
        } else {
            $wpdb->insert(
                'wp_cvtech_driving_license',
                array(
                    'dlName' => $item,
                ),
                array('%s')
            );
        }
    }

    // SOFTSKILLS
    $softskills = $_POST['softskills'];
    $allsoftskills = array();

    for ($i = 0; $i < count($softskills); $i++) {
        $allsoftskills[] = sanitize_text_field($softskills[$i]);
    }

    foreach ($allsoftskills as $item) {
        if (empty($item)) {
            $errors[] = 'Tous les choix doivent être sélectionnés pour chaque compétence soft.';
        } else {
            $wpdb->insert(
                'wp_cvtech_soft_skill',
                array(
                    'ssName' => $item,
                ),
                array('%s')
            );
        }
    }

// HARDSKILLS
    $hardskills = $_POST['hardskills'];
    $allhardskills = array();

    for ($i = 0; $i < count($hardskills); $i++) {
        $allhardskills[] = sanitize_text_field($hardskills[$i]);
    }

    foreach ($allhardskills as $item) {
        if (empty($item)) {
            $errors[] = 'Tous les choix doivent être sélectionnés pour chaque compétence hard.';
        } else {
            $wpdb->insert(
                'wp_cvtech_hard_skill',
                array(
                    'hsName' => $item,
                ),
                array('%s')
            );
        }
    }

    // RESEAUX
    $reseaux = $_POST['reseaux'];
    $reseauxUrl = $_POST['url'];
    $allreseaux = array();

    for ($i = 0; $i < count($reseaux); $i++) {
        $allreseaux[] = sanitize_text_field($reseaux[$i])   ;
    }

    foreach ($allreseaux as $item) {
        if (empty($item)) {
            $errors[] = 'Tous les champs doivent être remplis pour chaque réseau social.';
        } else {
            $wpdb->insert(
                'wp_cvtech_social_network',
                array(
                    'snName' => $item,
                ),
                array('%s')
            );
        }
    }

// LANGUAGE
    $language = $_POST['language'];
    $alllanguages = array();

    for ($i = 0; $i < count($language); $i++) {
        $alllanguages[] = sanitize_text_field($language[$i]);
    }

    foreach ($alllanguages as $item) {
        if (empty($item)) {
            $errors[] = 'Tous les champs doivent être remplis pour chaque langue.';
        } else {
            $wpdb->insert(
                'wp_cvtech_language',
                array(
                    'language' => $item,
                ),
                array('%s')
            );
        }
    }

    // HOBBIES
    $hobbies = $_POST['hobbies'];
    $allhobbies = array();

    for ($i = 0; $i < count($hobbies); $i++) {
        $allhobbies[] = sanitize_text_field($hobbies[$i]);
    }

    foreach ($allhobbies as $item) {
        if (empty($item)) {
            $errors[] = 'Tous les champs doivent être remplis pour chaque hobby.';
        } else {
            $wpdb->insert(
                'wp_cvtech_hobbies',
                array(
                    'idResume' => $idREsume->id,
                    'hobbieName' => $item,
                ),
                array('%s')
            );
        }
    }

    // AUTRE
    $autre = $_POST['autre'];
    $titleAutre = $_POST['title_autre'];
    $allautre = array();

    for ($i = 0; $i < count($autre); $i++) {
        $allautre[] = array(
            'autre' => sanitize_text_field($autre[$i]),
            'titleAutre' => sanitize_text_field($titleAutre[$i]),
        );
    }

    foreach ($allautre as $item) {

            $wpdb->insert(
                'wp_cvtech_other',
                array(
                    'idResume' => $idREsume->id,
                    'otherDetails' => $item['autre'],
                    'otherName' => $item['titleAutre'],
                ),
                array('%s', '%s')
            );
        }



//     Validation finale
    if (count($errors) === 0) {
        $success = true;
    }


    // Affichage du résultat en format JSON
    showJson(
        array(
            'errors' => $errors,
            'success' => $success,
        )
    );
}

