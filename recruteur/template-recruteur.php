<?php
/**
 * Template Name: recruteur
 */


require('../vendor/autoload.php');

use JasonGrimes\Paginator;



if (!current_user_can('administrator') && !current_user_can('recruteur')) {
    wp_redirect(home_url());
    exit;
}

get_header();


?>

    <section id="tableau">
        <div class="wrap">


            <?php
            global $wpdb;
            $table_name = $wpdb->prefix . 'identity';
            $count_query = "SELECT COUNT(id) AS total FROM $table_name WHERE status = 0";
            $total_identity = $wpdb->get_var($count_query);

            $table_name = $wpdb->prefix . 'users';
            $count_query = "SELECT COUNT(id) AS total FROM $table_name";
            $total_users = $wpdb->get_var($count_query);
            ?>

            <div class="big">
                <div class="box-nb-candidature">
                    <div class="left">
                        <p class="titre">Nombre de candidature </p>
                        <p class="nb"> <?php echo $total_identity ?> </p>
                    </div>
                    <div class="right">
                        <div class="i">
                            <i class="fa-solid fa-file"></i>
                        </div>
                    </div>

                </div>
                <div class="box-nb-candidature">
                    <div class="left">
                        <p class="titre">Nombre d'inscrit </p>
                        <p class="nb"> <?php echo $total_users ?> </p>
                    </div>
                    <div class="right">
                        <div class="i user">
                            <i class="fa-regular fa-user"></i>
                        </div>
                    </div>

                </div>
                <div class="box-nb-candidature heure">
                    <div class="date-heure">
                        <p id="date"></p>
                        <p id="heure"></p>
                    </div>

                </div>

            </div>

            <table>
                <thead>
                <tr>
                    <th  >Nom</th>
                    <th>Prénom</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>

                <?php


                $totalItems = $total_identity;
                $itemsPerPage = 5;
                $currentPage = 1;

                if(!empty($_GET['paged'])) {
                    $currentPage = $_GET['paged'];
                }

                $offset = ($currentPage - 1) * $itemsPerPage;

                $urlPattern = path('recruteur'). '?paged=(:num)';

                $paginator = new Paginator($totalItems, $itemsPerPage, $currentPage, $urlPattern);

                $table_name = $wpdb->prefix . 'identity';
                $query = "SELECT * FROM $table_name WHERE status = 0 LIMIT $itemsPerPage OFFSET $offset";
                $results = $wpdb->get_results($query);




                if (!empty($results)) {
                    foreach ($results as $row) {
                        echo '<tr>';
                        echo '<td  class="js_modal_detail" data-post-id="' . $row->id . '">' . $row->lastName . '</td>';
                        echo '<td  class="js_modal_detail" data-post-id="' . $row->id . '">' . $row->firstName . '</td>';
                        echo '<td  class="js_modal_detail" data-post-id="' . $row->id . '">' . '09/02/2024' . '</td>';
                        echo '<td class="action"> <a class="js_modal_contact"  href="#" data-post-id="' . $row->id . '"><i class="fa-solid fa-address-book" style="color: orange"></i>' . ' </a>';
                        echo ' <a href="#">' . '<i class="fa-solid fa-file-pdf" style="color: #02ab6c"></i>' . ' </a>';
                        echo '<a href="#">' . '<i class="fa-solid fa-trash" style="color: red" data-post-id="' . $row->id . '"></i>' . ' </a></td>';
                        echo '</tr>';
                        include 'modal-contact.php';
                    }
                } else {
                    echo '<tr><td colspan="3">Aucun résultat trouvé</td></tr>';
                }
                ?>

                </tbody>
            </table>
<div class="pagination-box">
            <?php echo $paginator; ?>
</div>
        </div>
    </section>


<?php
include('modal-detail.php');
get_footer();