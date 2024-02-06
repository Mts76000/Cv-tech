<?php
/**
 * Template Name: Homepage
 */
get_header();

?>

    <section id="intro">
        <div class="wrap">
            <div class="text">
                <h1>Candidater chez nous avec notre builder de CV</h1>
                <p>Utilisez notre outil de création de CV en ligne pour simplifier votre candidature chez nous. Construisez votre profil en seulement quelques étapes faciles!</p>
                <div class="btn-intro">
                    <a href="<?php echo path('/candidater'); ?>">CANDIDATER</a>
                    <a href="#info">VOIR PLUS</a>
                </div>
            </div>
            <div class="img">
                <img src="<?php echo asset("img/home.png"); ?>" alt="home">
            </div>
        </div>
    </section>


    <section id="info">
        <div class="wrap">
            <div class="text">
                <h2>Nous offrons le meilleur</h2>
                <div class="list">

                    <div class="one-list">
                        <img src="<?php echo asset("img/check.png"); ?>" alt="check">
                        <p>Création de modèles créatifs et épurés</p>
                    </div>
                    <div class="one-list">
                        <img src="<?php echo asset("img/check.png"); ?>" alt="check">
                        <p>Générateur de CV en ligne simple et intuitif</p>
                    </div>
                    <div class="one-list">
                        <img src="<?php echo asset("img/check.png"); ?>" alt="check">
                        <p>Utilisation gratuite. Développé pour l’embauche professionnels.</p>
                    </div>
                    <div class="one-list">
                        <img src="<?php echo asset("img/check.png"); ?>" alt="check">
                        <p>Creation rapide et facile de votre CV </p>
                    </div>
                    <div class="one-list">
                        <img src="<?php echo asset("img/check.png"); ?>" alt="check">
                        <p>Approuvées par les recruteurs</p>
                    </div>
                </div>
            </div>
            <div class="img">
                <img src="<?php echo asset("img/cv.svg"); ?>" alt="">
            </div>
        </div>
    </section>


<?php
get_footer(); 