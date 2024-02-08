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
                        <form action="" method="post">
                            <input type="text" id="nom" name="nom" placeholder="nom" value="<?php echo $identity->lastName ?>">
                            <input type="text" id="prenom" name="prenom" placeholder="prénom" value="<?php echo $identity->firstName ?>">
                            <input type="text" id="adresse" name="adresse" placeholder="adresse" value="<?php echo $identity->location ?>">
                            <input type="email" id="mail-input" name="mail-input" placeholder="email" value="<?php echo $identity->email ?>">
                            <input type="tel" id="tel" name="tel" placeholder="tel" value="<?php echo $identity->phoneNumber ?>">
                        </form>
                    </div>
                </div>

                <div class="midel">
                    <div class="formation">
                        <h3>Mes Formation :</h3>
                        <p>ecole : <?php echo $formation->school ?></p>
                        <p>lieux : <?php echo $formation->schoolLocation ?></p>
                        <p>diplome : <?php echo $formation->diplomaName ?></p>
                        <p>status : <?php echo $formation->diplomastatus ?></p>
                    </div>
                    <div class="experience">
                        <h3>Mes expériences :</h3>
                        <p>entreprise : <?php echo $experience->peName ?> </p>
                        <p>lieux : <?php echo $experience->peLocation ?> </p>
                        <p>poste : <?php echo $experience->pePositionHeld ?> </p>
                    </div>
                </div>
                <div class="down">
                    <input class="submit" type="submit" value="Modifier mes infos">
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
