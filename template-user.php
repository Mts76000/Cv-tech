<?php
/**
 * Template Name: user
 */
get_header();
$current_user = wp_get_current_user();
$idUser = $current_user->ID;

if ($idUser) {
    global $wpdb;
    $table_name = $wpdb->prefix . 'resume';
    $query = $wpdb->prepare(" SELECT * FROM $table_name WHERE idUser = %d", $idUser);
    $user = $wpdb->get_row($query);



    if ($user) {

        $idResume = $user->idUser;

        $identity =  recupUserDetail($wpdb,'identity',$idResume);

        $formation =  recupUserDetail($wpdb,'diploma',$idResume);


        $experience =  recupUserDetail($wpdb,'professional_experience',$idResume);



        ?>



        <section id="profil">
            <div class="wrap">
                <div class="top">
                    <div class="img">
                        <img src="<?php echo asset("img/profil.png"); ?>" alt="">
                    </div>
                    <div class="info">
                        <p><?php echo $current_user->user_login ?></p>
                        <p><?php echo $current_user->user_email ?></p>
                    </div>
                    <div class="perso">
                        <h3>Mes informations personnelles  :</h3>
                        <p>Nom : <?php echo $identity->lastName ?></p>
                        <p>Prénom : <?php echo $identity->firstName ?></p>
                        <p>Adresse :  <?php echo $identity->location ?></p>
                        <p>Email : <?php echo $identity->email ?></p>
                        <p>Telephone : <?php echo $identity->phoneNumber ?></p>
                    </div>
                </div>

                <div class="midel">
                    <div class="formation">
                        <h3>Mes Formation :</h3>
                        <p>Nom école : <?php echo $formation->school ?></p>
                        <p>Adresse école : <?php echo $formation->schoolLocation ?></p>
                        <p>Nom du diplome : <?php echo $formation->diplomaName ?></p>
                        <p>Status : <?php echo $formation->diplomastatus ?></p>
                    </div>
                    <div class="experience">
                        <h3>Mes expériences :</h3>
                        <p>Nom entreprise : <?php echo $experience->peName ?> </p>
                        <p>Adresse : <?php echo $experience->peLocation ?> </p>
                        <p>Poste : <?php echo $experience->pePositionHeld ?> </p>
                    </div>
                </div>
            </div>
        </section>
        <?php
    } else {
        ?>
            <section id="NoUser">
            <div class="wrap">
        <p class='error-no-user'>Aucun CV trouvé pour cet utilisateur.</p>

        <a href='<?php echo path('/candidater'); ?>'>Vous pouvez cree votre CV ici</a>

            </div>
            </section>
        <?php
    }
} else {
    echo "<p>Vous devez être connecté pour accéder à cette page.</p>";
}

get_footer();
