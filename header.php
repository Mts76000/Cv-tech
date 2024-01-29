<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package cv-tech
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<?php wp_head(); ?>
</head>

<body>
<header id="header" >
    <div class="wrap">
        <div class="logo">
            <a href="<?php echo path('/'); ?>"><img src="<?php echo asset("img/logo.svg"); ?>" alt="logo"></a>
        </div>
        <nav>
            <ul>
                <li class="mobile">
                    <a href="#" id="link_burger">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                    </a>
                </li>
                <li class="desk"><a class="a" href="<?php echo path('Home'); ?>">HOME</a></li>
                <li class="desk"><a  class="a" href="#" title="">CANDIDATER</a></li>
                <li class="desk"><a  class="a" href="#" title="">CONTACT</a></li>
                <li class="desk btn-header"><a  class="a" href="#" title="">CONNEXION</a></li>
                <li class="desk  btn-header" ><a  class="a" href="#" title="">INSCRIPTION</a></li>

            </ul>
        </nav>
    </div>

    <div id="nav_burger">
        <ul>

            <a href="#"><li> <i class="fa-solid fa-house"></i> HOME</li></a>
            <a href="#" title=""> <li><i class="fa-solid fa-file"></i>CANDIDATER</li></a>
            <a href="#" title=""><li><i class="fa-solid fa-address-book"></i> CONTACT</li></a>
            <a href="#" title=""><li class="connexion"><i class="fa-solid fa-user"></i> CONNEXION</li></a>
            <a href="#" title=""><li><i class="fa-solid fa-user"></i>INSCRIPTION</li></a>
            <a href=""><li class="close"><i class="fa-solid fa-backward"></i> Revenir au site</li></a>
        </ul>
    </div>


</header>



