<?php
/**
 * Template Name: recruteur
 */
include 'header-recruteur.php';


?>






<section id="tableau">
    <div class="wrap">

        <h2>Gestion des CV</h2>


            <?php
            global $wpdb;
            $table_name = $wpdb->prefix . 'identity';
            $count_query = "SELECT COUNT(id) AS total FROM $table_name";
            $total_count = $wpdb->get_var($count_query);

            echo '<p class="nb-candidature"> <i class="fa-solid fa-file"></i>' . 'Nombre de candidature : ' .   $total_count . '</p>';

            ?>

<!--<form action="--><?php //echo path('/') ?><!--" method="get">-->
<!--    <input type="search" name="s" value="--><?php //echo esc_attr(get_search_query())?><!--">-->
<!--    <input type="submit">-->
<!--</form>-->



        <table>
            <thead>
            <tr>
                <th><input type="checkbox"></th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>

<?php

            $query = "SELECT * FROM $table_name";
            $results = $wpdb->get_results($query);



            if (!empty($results)) {
                foreach ($results as $row) {
                    echo '<tr>';
                    echo '<td>' . '<input type="checkbox">' . '</td>';
                    echo '<td>' . $row->lastName . '</td>';
                    echo '<td>' . $row->firstName . '</td>';
                    echo '<td>' . '07/04/2023' . '</td>';
                    echo '<td class="action"> <a href="#">' . '<i class="fa-solid fa-address-book" style="color: orange"></i>' . ' </a>';
                    echo ' <a href="#">' . '<i class="fa-solid fa-file-pdf" style="color: #02ab6c"></i>' . ' </a>';
                    echo '<a href="#">' . '<i class="fa-solid fa-trash" style="color: red"></i>' . ' </a></td>';
                    echo '</tr>';

                }
            } else {
                echo '<tr><td colspan="3">Aucun résultat trouvé</td></tr>';
            }
            ?>

            </tbody>
        </table>



    </div>
</section>
