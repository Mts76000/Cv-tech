<div class="modal micromodal-slide" id="modal-test" aria-hidden="true">
    <div class="modal__overlay" tabindex="-2" data-micromodal-close>
        <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-3-title">
            <header class="modal__header">
                <h2 class="modal__title" id="modal-3-title">
                </h2>
                <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
            </header>
            <main class="modal__content" id="modal-3-content" >

                <h2>Bonjour <?php echo wp_get_current_user()->user_login; ?></h2>

                <?php
                if (current_user_can('administrator')) {
                    $page_link = get_permalink(8);
                    ?>

                    <a href="<?php echo admin_url(); ?>">Panel admin</a>
                    <a href="<?php echo esc_url($page_link); ?>">Page Recruteur</a>
                    <?php
                }

                if (current_user_can('recruteur')) {
                    $page_link = get_permalink(8);
                    ?>
                    <a href="<?php echo esc_url($page_link); ?>">Page Recruteur</a>
                    <?php
                }
                ?>
                <a href="<?php echo path('/user'); ?>">Mon CV</a>
                <a  href="<?php echo wp_logout_url(home_url()); ?>">Se déconnecter</a>


            </main>
            <footer class="modal__footer">
            </footer>
        </div>
    </div>
</div>

