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


    // ID RESUME RECUP
    global $wpdb;
    $query = "SELECT id FROM wp_cvtech_resume WHERE idUser = $userid";
    $idResume = $wpdb->get_row($query);

    $idREsume  = $idResume->id;


    // IDENTITY
    $nom = trim(strip_tags($_POST['nom']));
    $prenom = trim(strip_tags($_POST['prenom']));
    $email = trim(strip_tags($_POST['mail-input']));
    $adresse = trim(strip_tags($_POST['adresse']));
    $tel = trim(strip_tags($_POST['tel']));
    $birthday = trim(strip_tags($_POST['birthday']));


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
        if (empty($item['title']) || empty($item['location']) || empty($item['dip_start']) || empty($item['dip_end']) || empty($item['status']) || empty($item['school'])) {
            $errors['diplomes'][] = 'Tous les champs doivent être remplis pour chaque diplôme.';
        } else {
            $wpdb->insert(
                'wp_cvtech_diploma',
                array(
//                    'idResume' => $idREsume->id,
                    'idResume' => $userid,
                    'diplomaName' => $item['title'],
                    'schoolLocation' => $item['location'],
                    'school' => $item['school'],
                    'diplomastatus' => $item['status'],
                    'diplomaStart' => $item['dip_start'],
                    'diplomaEndYear' => $item['dip_end'],
                ),
                array(
                    '%d', // idResume
                    '%s', // diplomaName
                    '%s', // schoolLocation
                    '%s', // school
                    '%s', // diplomastatus
                    '%s', // diplomaStart
                    '%s'  // diplomaEndYear
                )
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
            $errors['experiences'][] = 'Tous les champs doivent être remplis pour chaque expérience.';
        } else {
            $wpdb->insert(
                'wp_cvtech_professional_experience',
                array(
                    'idResume' => $userid,
                    'peName' => $item['title'],
                    'peLocation' => $item['location'],
                    'pePositionHeld' => $item['poste'],
                    'peStart' => $item['exp_start'],
                    'peEnd' => $item['exp_end'],
                ),
                array(
                    '%d', // idResume
                    '%s', // peName
                    '%s', // peLocation
                    '%s', // pePositionHeld
                    '%s', // peStart
                    '%s'  // peEnd
                )
            );
        }
    }

    // DRIVING
    $permis = $_POST['permis'];
    $allPermis = array();
    $countPermis = 0;
    $selectedPermis = array();

    for ($i = 0; $i < count($permis); $i++) {
        $allPermis[] = sanitize_text_field($permis[$i]);
    }

    foreach ($allPermis as $item) {
        if (empty($item)) {
            $errors['permis'][] = 'Tous les choix doivent être sélectionnés pour chaque permis de conduire.';
        } else {
            if (!in_array($item, $selectedPermis)) {
                if ($countPermis < 5) {
                    $wpdb->insert(
                        'wp_cvtech_driving_license',
                        array(

                            'dlName' => $item,
           'idResume' => $userid,
                        ),
                        array('%s', '%d')
                    );
                    $selectedPermis[] = $item;
                    $countPermis++;
                } else {
                    $errors['permis'][] = 'Vous ne pouvez pas sélectionner plus de 5 permis de conduire.';
                    break;
                }
            } else {
                $errors['permis'][] = 'Vous ne pouvez pas sélectionner le même permis de conduire plus d\'une fois.';
            }
        }
    }


// SOFTSKILLS
    $softskills = $_POST['softskills'];
    $allsoftskills = array();
    $countSoftSkills = 0;
    $selectedSoftSkills = array();

    for ($i = 0; $i < count($softskills); $i++) {
        $allsoftskills[] = sanitize_text_field($softskills[$i]);
    }

    foreach ($allsoftskills as $item) {
        if (empty($item)) {
            $errors['softskills'][] = 'Tous les choix doivent être sélectionnés pour chaque compétence soft.';
        } else {
            if (!in_array($item, $selectedSoftSkills)) {
                if ($countSoftSkills < 5) {
                    $wpdb->insert(
                        'wp_cvtech_soft_skill',
                        array(
                            'ssName' => $item,
                            'idResume' => $userid,
                        ),
                        array('%s', '%d')
                    );
                    $selectedSoftSkills[] = $item;
                    $countSoftSkills++;
                } else {
                    $errors['softskills'][] = 'Vous ne pouvez pas sélectionner plus de 5 softskills.';
                    break;
                }
            } else {
                $errors['softskills'][] = 'Vous ne pouvez pas sélectionner la même softSkill plus d\'une fois.';
            }
        }
    }


// HARDSKILLS
    $hardskills = $_POST['hardskills'];
    $allhardskills = array();
    $countHardSkills = 0;
    $selectedHardSkills = array();

    for ($i = 0; $i < count($hardskills); $i++) {
        $allhardskills[] = sanitize_text_field($hardskills[$i]);
    }

    foreach ($allhardskills as $item) {
        if (empty($item)) {
            $errors['hardskills'][] = 'Tous les choix doivent être sélectionnés pour chaque compétence hard.';
        } else {
            if (!in_array($item, $selectedHardSkills)) {
                if ($countHardSkills < 5) {
                    $wpdb->insert(
                        'wp_cvtech_hard_skill',
                        array(
                            'hsName' => $item,
                            'idResume' => $userid,
                        ),
                        array('%s', '%d')
                    );
                    $selectedHardSkills[] = $item;
                    $countHardSkills++;
                } else {
                    $errors['hardskills'][] = 'Vous ne pouvez pas sélectionner plus de 5 hardskills.';
                    break;
                }
            } else {
                $errors['hardskills'][] = 'Vous ne pouvez pas sélectionner le même hardSkill plus d\'une fois.';
            }
        }
    }

    // RESEAUX
    $reseaux = $_POST['reseaux'];
    $reseauxUrl = $_POST['url'];
    $allreseaux = array();
    $countReseaux = 0;
    $selectedReseaux = array();

    for ($i = 0; $i < count($reseaux); $i++) {
        $allreseaux[] = sanitize_text_field($reseaux[$i])   ;
    }

    foreach ($allreseaux as $item) {
        if (empty($item)) {
            $errors['reseaux'][] = 'Tous les champs doivent être remplis pour chaque réseau social.';
        } else {
            if (!in_array($item, $selectedReseaux)) {
                if ($countReseaux < 5) {
                    $wpdb->insert(
                        'wp_cvtech_social_network',
                        array(
                            'snName' => $item,
                            'idResume' => $userid,
                        ),
                        array('%s', '%d')
                    );
                    $selectedReseaux[] = $item;
                    $countReseaux++;
                } else {
                    $errors['reseaux'][] = 'Vous ne pouvez pas sélectionner plus de 5 reseaux.';
                    break;
                }
            } else {
                $errors['reseaux'][] = 'Vous ne pouvez pas sélectionner le même reseaux plus d\'une fois.';
            }
        }
    }

// LANGUAGES
    $languages = $_POST['language'];
    $allLanguages = array();
    $countLanguages = 0;
    $selectedLanguages = array();

    for ($i = 0; $i < count($languages); $i++) {
        $allLanguages[] = sanitize_text_field($languages[$i]);
    }

    foreach ($allLanguages as $item) {
        if (empty($item)) {
            $errors['languages'][] = 'Tous les champs doivent être remplis pour chaque langue.';
        } else {
            if (!in_array($item, $selectedLanguages)) {
                if ($countLanguages < 5) {
                    $wpdb->insert(
                        'wp_cvtech_language',
                        array(
                            'language' => $item,
                            'idResume' => $userid,
                        ),
                        array('%s', '%d')
                    );
                    $selectedLanguages[] = $item;
                    $countLanguages++;
                } else {
                    $errors['languages'][] = 'Vous ne pouvez pas sélectionner plus de 5 langues.';
                    break;
                }
            } else {
                $errors['languages'][] = 'Vous ne pouvez pas sélectionner la même langue plus d\'une fois.';
            }
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
            $errors['hobbies'][] = 'Tous les champs doivent être remplis pour chaque hobby.';
        } else {
            $wpdb->insert(
                'wp_cvtech_hobbies',
                array(
         'idResume' => $userid,
                    'idResume' => $userid,
                    'hobbieName' => $item,
                ),
                array('%s', '%d')
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
                'idResume' => $userid,
                'otherDetails' => $item['autre'],
                'otherName' => $item['titleAutre'],
            ),
            array('%d','%s', '%s')
        );
    }


    if (count($errors) === 0) {
        $wpdb->insert(
            'wp_cvtech_resume',
            array(
            'idUser' => sanitize_text_field($userid),
            'created_at' => $date,
            ),
            array('%d', '%s')
        );

        $wpdb->insert(
            'wp_cvtech_identity',
            array(
            'idResume' => $userid,
            'firstName' => sanitize_text_field($prenom),
            'lastName' => sanitize_text_field($nom),
            'location' => sanitize_text_field($adresse),
            'email' => sanitize_text_field($email),
            'phoneNumber' => sanitize_text_field($tel),
            'birthday' => sanitize_text_field($birthday),

            ),
            array('%d', '%s', '%s', '%s', '%s', '%s', '%s')
        );


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
