// SCSS
import './asset/css/style.scss';
import './asset/css/header.scss';
import './asset/css/footer.scss';
import './asset/css/home.scss';
import './asset/css/modal.scss';
import './asset/css/recruteur.scss';




// JS
import './asset/js/burger-menu.js';


if (isUserLoggedIn) {
 import('./asset/js/modal-profil.js').then(module => {
 });
} else {
 import('./asset/js/modal.js').then(module => {

 });
}