<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package cv-tech
 */

?>

<footer id="footer">
    <div class="wrap">
            <nav>
                <ul>
                    <li><a href="<?php echo path('/mention'); ?>">Mentions légales</a></li>
                    <li><a href="<?php echo path('/faq'); ?>">FAQ</a></li>
                </ul>
            </nav>
    </div>
</footer>

<script>
    var isUserLoggedIn = <?php echo is_user_logged_in() ? 'true' : 'false'; ?>;
</script>

<?php wp_footer(); ?>

</body>
</html>
