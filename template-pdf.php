<?php

/**
 * Template Name: pdf
 */

require('fpdf/fpdf.php');

if(!empty($_GET['id'])) {
    $id = $_GET['id'];

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

        require('fpdf/fpdf.php');

        $cvtech = array(
            'numero_telephone' => '+33 6 12 34 56 78',
            'prenom' => 'Jean',
            'nom' => 'Dupont',
            'date_naissance' => '01/02/1990',
            'adresse' => '123 Rue de la Ville, 76800 Saint-Etienne-du-Rouveray',
            'soft_skills' => ['Communication', 'Esprit d\'équipe', 'Résolution de problèmes', 'Adaptabilité', 'Organisation'],
            'hard_skills' => ['Java', 'Python', 'SQL', 'Linux', 'DevOps'],
            'hobbies' => ['Musique', 'Randonnée', 'Cuisine', 'Jeux Vidéo', 'Lecture', 'Musique', 'Randonnée', 'Cuisine', 'Jeux Vidéo', 'Lecture'],
            'diplomes' => ['Ingénieur en informatique, Université XYZ, 2015'],
            'experiences_professionnelles' => ['Développeur Full Stack, Entreprise ABC, 2015-2020', 'Data Analyst, ATINEOS, 2020-2024'],
            'langues_parlees' => ['Français (langue maternelle)', 'Anglais (courant)', 'Espagnol (notions)'],
            'permis' => ['Permis B', 'Permis A'],
            'email' => 'axelclaude@gmail.com',
            'autre' => 'Je suis un professionnel du développement web avec 2 ans d\'expérience, après avoir travaillé en tant que conducteur de travaux. À 33 ans, ma transition réussie démontre ma capacité à relever de nouveaux défis. Ma polyvalence allie compétences techniques et gestion de projets, apportant une perspective unique. Actuellement à la recherche d\'une nouvelle expérience professionnelle, je suis prêt à innover et exceller pour enrichir mes connaissances.'
        );

        $cv_data = array(
            'numero_telephone' => $user->phoneNumber,
            'prenom' => $user->firstName,
            'nom' => $user->lastName,
            'date_naissance' => (new DateTime($user->birthday))->format('d/m/Y'),
            'soft_skills' => $softs,
            'hard_skills' => $hards,
            'hobbies' => $hobbies,
            'adresse' => $user->location,
            'diplomes' => $diplomas,
            'experiences_professionnelles' => $experiences,
            'langues_parlees' => $languages,
            'permis' => $drivings,
            'email' => $user->email,
            'autre' => $cvtech['autre']
        );

        class PDF extends FPDF
        {
            function Header()
            {
            }

            function Footer()
            {
            }

            function TwoColumnsText($cv_data)
            {
                $this->SetLeftMargin(0);
                $this->SetX(0);
                $this->SetY(0);

                // Définir la couleur de fond pour la première colonne
                $this->SetFillColor(173, 216, 230);
                $firstColumnWidth = 60; // en mm
                $imageSize = 40;// en mm

                $this->Rect($this->GetX(), $this->GetY(), $firstColumnWidth, $this->GetPageHeight(), 'F');
                $this->SetFont('Arial', '', 12);

                // Photo du candidat
                $imagePath = __DIR__ . '/asset/img/profil.png';
                $this->Image($imagePath, ($firstColumnWidth - $imageSize) / 2, 5, $imageSize);
                $this->Ln($imageSize + 10);

                // Coordonées du candidat
                $this->Cell($firstColumnWidth, 0, mb_convert_encoding($cv_data['numero_telephone'], 'ISO-8859-1'), 0, 0, 'C');
                $this->Ln(5);
                $this->Cell($firstColumnWidth, 0, mb_convert_encoding($cv_data['email'], 'ISO-8859-1'), 0, 0, 'C');
                $this->Ln(5);
                $this->MultiCell($firstColumnWidth, 5, mb_convert_encoding($cv_data['adresse'], 'ISO-8859-1'), 0, 'C');
                $this->Ln(5);
                $this->Cell($firstColumnWidth, 0, mb_convert_encoding('Né(e) le ' . $cv_data['date_naissance'], 'ISO-8859-1'), 0, 0, 'C');
                $this->Ln(5);


                // Dessiner une ligne de séparation
                $this->SetDrawColor(0, 0, 0); // Couleur du trait en noir
                $this->Line($this->GetX(), $this->GetY(), $this->GetX() + $firstColumnWidth, $this->GetY());

                // Déplacer vers le bas après la ligne de séparation
                $this->Ln(7);

                $this->SetLeftMargin(5);

                //Permis du candidat
                $this->SetFont('Arial', 'B', 14); // Exemple : Arial, gras (Bold), taille 14

                $this->Cell($firstColumnWidth, 0, mb_convert_encoding('Permis', 'ISO-8859-1'), 0, 0, 'L');
                $this->Ln(8);

                $this->SetFont('Arial', '', 12);

                foreach ($cv_data['permis'] as $permis) {
                    $this->Cell($firstColumnWidth, 0, mb_convert_encoding(' - ' . $permis->dlName, 'ISO-8859-1'), 0, 0, 'L');
                    $this->Ln(5);
                }
                $this->Ln(5);

                // Soft-Skill du candidat
                $this->SetFont('Arial', 'B', 14); // Exemple : Arial, gras (Bold), taille 14

                $this->Cell($firstColumnWidth, 0, mb_convert_encoding('Soft-Skills', 'ISO-8859-1'), 0, 0, 'L');
                $this->Ln(8);

                $this->SetFont('Arial', '', 12);

                foreach ($cv_data['soft_skills'] as $sSkill) {
                    $this->Cell($firstColumnWidth, 0, mb_convert_encoding(' - ' . $sSkill->ssName, 'ISO-8859-1'), 0, 0, 'L');
                    $this->Ln(5);
                }

                $this->Ln(5);
                // Hard-Skill du candidat
                $this->SetFont('Arial', 'B', 14); // Exemple : Arial, gras (Bold), taille 14

                $this->Cell($firstColumnWidth, 0, mb_convert_encoding('Hard-Skills', 'ISO-8859-1'), 0, 0, 'L');
                $this->Ln(8);

                $this->SetFont('Arial', '', 12);

                foreach ($cv_data['hard_skills'] as $sHkill) {
                    $this->Cell($firstColumnWidth, 0, mb_convert_encoding(' - ' . $sHkill->hsName, 'ISO-8859-1'), 0, 0, 'L');
                    $this->Ln(5);
                }

                $this->Ln(5);

                // Loisirs du candidat
                $this->SetFont('Arial', 'B', 14); // Exemple : Arial, gras (Bold), taille 14

                $this->Cell($firstColumnWidth, 0, mb_convert_encoding('Hobbies', 'ISO-8859-1'), 0, 0, 'L');
                $this->Ln(8);

                $this->SetFont('Arial', '', 12);

                foreach ($cv_data['hobbies'] as $hobbie) {
                    $this->Cell($firstColumnWidth, 0, mb_convert_encoding(' - ' . $hobbie->hobbieName, 'ISO-8859-1'), 0, 0, 'L');
                    $this->Ln(5);
                }

                $this->Ln(5);

                // Language du candidat
                $this->SetFont('Arial', 'B', 14); // Exemple : Arial, gras (Bold), taille 14

                $this->Cell($firstColumnWidth, 0, mb_convert_encoding('Langues', 'ISO-8859-1'), 0, 0, 'L');
                $this->Ln(8);

                $this->SetFont('Arial', '', 12);

                foreach ($cv_data['langues_parlees'] as $lang) {
                    $this->Cell($firstColumnWidth, 0, mb_convert_encoding(' - ' . $lang->language, 'ISO-8859-1'), 0, 0, 'L');
                    $this->Ln(5);
                }

                $this->SetFont('Arial', '', 16);

                // Déplacer vers la deuxième colonne
                $this->SetX($firstColumnWidth);
                $this->setLeftMargin($firstColumnWidth + 5);
                $this->SetY(20);

                $this->Cell($firstColumnWidth + 40, 0, mb_convert_encoding($cv_data['prenom'], 'ISO-8859-1'), 0, 0, 'C');
                $this->Ln(10);
                $this->Cell($firstColumnWidth + 40, 0, mb_convert_encoding($cv_data['nom'], 'ISO-8859-1'), 0, 0, 'C');
                $this->Ln(20);

                $this->MultiCell(0, 6, mb_convert_encoding($cv_data['autre'], 'ISO-8859-1'), 0, 'J');
                $this->Ln(20);

                $this->Cell($firstColumnWidth + 40, 0, mb_convert_encoding('Expérience(s) Professionnelle(s)', 'ISO-8859-1'), 0, 0, 'C');
                $this->Ln(10);
                foreach ($cv_data['experiences_professionnelles'] as $expPro) {
                    $this->Cell($firstColumnWidth, 0, mb_convert_encoding(' - ' . $expPro->pePositionHeld, 'ISO-8859-1'), 0, 0, 'L');
                    $this->Ln(10);
                }

                $this->Ln(10);


                $this->Cell($firstColumnWidth + 40, 0, mb_convert_encoding('Diplômes', 'ISO-8859-1'), 0, 0, 'C');
                $this->Ln(10);
                foreach ($cv_data['diplomes'] as $diplo) {
                    $this->Cell($firstColumnWidth, 0, mb_convert_encoding(' - ' . $diplo->diplomaName, 'ISO-8859-1'), 0, 0, 'L');
                    $this->Ln(10);
                }
            }
        }

        ob_clean();
        $pdf = new PDF();
        $pdf->AddPage();

        $pdf->SetFont('Arial', 'B', 16);

        $pdf->TwoColumnsText($cv_data);
        $pdf->Footer();

        $pdf->Output();

}
