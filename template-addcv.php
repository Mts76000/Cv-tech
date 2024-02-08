<?php
/**
 * Template Name: Formulaire CV
 */


get_header();

if (is_user_logged_in()) {
?>

<section id="suc">
    <div class="wrap">
    <p class="success"></p>
    </div>
</section>
<section id="formcv">

    <form action="" method="post" id="theformulaire">
        <div class="wrap">
        <h2>Identité</h2>
        <input type="text" id="nom" name="nom" placeholder="Nom">
        <input type="text" id="prenom" name="prenom" placeholder="Prénom">
        <input type="text" id="adresse" name="adresse" placeholder="Adresse">
        <input type="email" id="mail-input" name="mail-input" placeholder="Email">
        <input type="tel" id="tel" name="tel" placeholder="Téléphone">
            <span>Date de naissance</span>
        <input type="date" id="birthday" name="birthday" placeholder="birthday">
            <hr>

            <h2>Description</h2>

            <div id="response_autre">

                <div>
                    <textarea rows="4" type="text" name="autre[]" placeholder="blabla..."></textarea>

                </div>
            </div>

            <div  class="span-div">
                <span id="span_autre" class="span"></span>
            </div>

        <h2>Formation(s)</h2>


        <div id="response_formation">
            <div>

                <input type="text"  placeholder="Nom de l'école" name="school[]">
                <input type="text" placeholder="Adresse de l'école" name="dip_location[]">
                <input type="text" placeholder="Nom du diplôme" name="diplome[]">
                <input type="text" placeholder="Status" name="status[]">
                <span>Date de début</span>
                <input type="date" placeholder="Date de début" name="dip_start[]">
                <span>Date de fin</span>
                <input type="date" placeholder="Date de fin" name="dip_end[]">

            </div>
        </div>

            <div class="span-div">
                <span id="span_diplomes" class="span"></span>
            </div>


            <button id="btn_add_formation">Ajouter une formation</button>
            <hr>

        <h2>Expérience(s)</h2>

        <div id="response_experience">

            <div>
                <input type="text" name="experience[]" placeholder="Nom entreprise">
                <input type="text" name="exp_location[]" placeholder="Lieu">
                <input type="text" name="poste[]" placeholder="Poste">
                <span>Date de début</span>
                <input type="date" name="exp_start[]" placeholder="exp_start">
                <span>Date de fin</span>
                <input type="date" name="exp_end[]" placeholder="exp_end">
            </div>

        </div>

            <div  class="span-div">
                <span id="span_experiences" class="span"></span>
            </div>


            <button id="btn_add_experience">Ajouter une expérience</button>
            <hr>
        <h2>Permis</h2>

        <div id="response_permis">

            <div>
                <select name="permis[]" id="permis">
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="BE">BE</option>
                    <option value="C1">C1</option>
                    <option value="C1E">C1E</option>
                    <option value="C">C</option>
                    <option value="CE">CE</option>
                    <option value="D1">D1</option>
                    <option value="D1E">D1E</option>
                    <option value="D">D</option>
                    <option value="DE">DE</option>
                    <option value="PPL">PPL</option>
                    <option value="CPL">CPL</option>
                    <option value="ATPL">ATPL</option>
                    <option value="ULM">ULM</option>
                </select>

            </div>

        </div>

            <div  class="span-div">
                <span id="span_permis" class="span"></span>
            </div>


            <button id="btn_add_permis">Ajouter un permis</button>

        <h2>Soft Skills</h2>

        <div id="response_softskills">

            <div>
                <select name="softskills[]" id="softskills">
                    <option value="Communication">Communication</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Esprit d'équipe">Esprit d'équipe</option>
                    <option value="Adaptabilité">Adaptabilité</option>
                    <option value="Résolution de problèmes">Résolution de problèmes</option>
                    <option value="Créativité">Créativité</option>
                    <option value="Gestion du temps">Gestion du temps</option>
                    <option value="Leadership">Leadership</option>
                    <option value="Empathie">Empathie</option>
                    <option value="Pensée critique">Pensée critique</option>
                    <option value="Résilience">Résilience</option>
                    <option value="Gestion du stress">Gestion du stress</option>
                    <option value="Proactif">Proactif</option>
                </select>

            </div>
        </div>

            <div  class="span-div">
                <span id="span_softskills" class="span"></span>
            </div>


            <button id="btn_add_softskills">Ajouter un softskills</button>

        <h2>Hard Skills</h2>

        <div id="response_hardskills">

            <div>
                <select name="hardskills[]" id="hardskills">
                    <option value="HTML/CSS">HTML/CSS</option>
                    <option value="C">C</option>
                    <option value="C#">C#</option>
                    <option value="C++">C++</option>
                    <option value="Cobol">Cobol</option>
                    <option value="Go">Go</option>
                    <option value="Java">Java</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Kotlin">Kotlin</option>
                    <option value="MATLAB">MATLAB</option>
                    <option value="Objective-C">Objective-C</option>
                    <option value="Perl">Perl</option>
                    <option value="PHP">PHP</option>
                    <option value="Python">Python</option>
                    <option value="R">R</option>
                    <option value="Ruby">Ruby</option>
                    <option value="Rust">Rust</option>
                    <option value="Scala">Scala</option>
                    <option value="Shell scripting">Shell scripting</option>
                    <option value="SQL">SQL</option>
                    <option value="Swift">Swift</option>
                    <option value="TypeScript">TypeScript</option>
                    <option value="VB.NET">VB.NET</option>
                </select>

            </div>

        </div>

            <div  class="span-div">
                <span id="span_hardskills" class="span"></span>
            </div>


            <button id="btn_add_hardskills">Ajouter un hardskills</button>


        <h2>Réseaux Sociaux</h2>

        <div id="response_reseaux">

            <div>
                <select name="reseaux[]" id="reseaux">
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Instagram">Instagram</option>
                    <option value="YouTube">YouTube</option>
                    <option value="Pinterest">Pinterest</option>
                    <option value="Snapchat">Snapchat</option>
                    <option value="TikTok">TikTok</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Telegram">Telegram</option>
                    <option value="Reddit">Reddit</option>
                    <option value="Tumblr">Tumblr</option>
                    <option value="Flickr">Flickr</option>
                    <option value="Vimeo">Vimeo</option>
                    <option value="Quora">Quora</option>
                    <option value="Medium">Medium</option>
                    <option value="Behance">Behance</option>
                    <option value="Dribbble">Dribbble</option>
                    <option value="GitHub">GitHub</option>
                </select>

                <input type="text" name="url[]" placeholder="Lien">

            </div>
        </div>


            <div  class="span-div">
                <span id="span_reseaux" class="span"></span>
            </div>


            <button id="btn_add_reseaux">Ajouter un réseaux</button>


        <h2>Language</h2>

        <div id="response_language">

            <div>
                <select name="language[]" id="language">
                    <option value="Anglais">Anglais</option>
                    <option value="Français">Français</option>
                    <option value="Espagnol">Espagnol</option>
                    <option value="Allemand">Allemand</option>
                    <option value="Chinois">Chinois</option>
                    <option value="Arabe">Arabe</option>
                    <option value="Russe">Russe</option>
                    <option value="Portugais">Portugais</option>
                    <option value="Japonais">Japonais</option>
                    <option value="Italien">Italien</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Néerlandais">Néerlandais</option>
                    <option value="Coréen">Coréen</option>
                    <option value="Turc">Turc</option>
                    <option value="Suédois">Suédois</option>
                    <option value="Polonais">Polonais</option>
                    <option value="Danois">Danois</option>
                    <option value="Norvégien">Norvégien</option>
                    <option value="Finnois">Finnois</option>
                </select>

            </div>
        </div>


            <div  class="span-div">
                <span id="span_languages" class="span"></span>
            </div>



            <button id="btn_add_language">Ajouter une langue</button>

        <h2>Hobbie(s)</h2>

        <div id="response_hobbies">

            <div>
                <input type="text" name="hobbies[]" placeholder="Hobbies">
            </div>

        </div>

            <div  class="span-div">
                <span id="span_hobbies" class="span"></span>
            </div>


            <button id="btn_add_hobbies">Ajouter un hobbies</button>




            <input type="submit">
        </div>
    </form>



</section>

    <?php
} else {
    ?>
    <section id="NoUser">
        <div class="wrap">
            <p class='error-no-user'>Vous devez être connecté pour accéder à cette page.</p>
            <a href='<?php echo path('/'); ?>'>Retour a la home</a>
        </div>
    </section>
    <?php
}

 get_footer();









