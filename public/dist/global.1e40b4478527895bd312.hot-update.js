self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/modal-detail.js":
/*!**************************************!*\
  !*** ./src/asset/js/modal-detail.js ***!
  \**************************************/
/***/ (() => {

const detailOpenButtons = document.querySelectorAll('.js_modal_detail');
let params = new FormData();
params.append('action', 'get_detail');
async function GetDetailUser() {
  try {
    var prenom = document.querySelector('.firstName');
    prenom.innerHTML = "";
    var nom = document.querySelector('.lastName');
    nom.innerHTML = "";
    var location = document.querySelector('.location');
    location.innerHTML = "";
    var mail = document.querySelector('.email');
    mail.innerHTML = "";
    var tel = document.querySelector('.tel');
    tel.innerHTML = "";
    var loaderDetail = document.querySelector('.loader2');
    loaderDetail.classList.remove("loader-none");
    let response = await fetch(MYSCRIPT.ajaxUrl, {
      method: 'post',
      body: params
    });
    let data = await response.json();

    // console.log(data);
    loaderDetail.classList.add("loader-none");
    prenom.innerHTML = "Prenom : " + data.user.firstName;
    nom.innerHTML = "Nom : " + data.user.lastName;
    location.innerHTML = "Adresse : " + data.user.location;
    mail.innerHTML = "email : " + data.user.email;
    tel.innerHTML = "telephone : " + data.user.phoneNumber;
  } catch (error) {
    console.error('Erreur lors de la conversion de la réponse JSON :', error);
  }
}
detailOpenButtons.forEach(function (button) {
  button.addEventListener('click', function (evt) {
    const postId = button.dataset.postId;
    console.log(postId);
    evt.preventDefault();
    params.append('id', postId);
    MicroModal.show('modal-detail');
    GetDetailUser();
  });
});

/***/ }),

/***/ "./src/asset/js/modal-register.js":
/*!****************************************!*\
  !*** ./src/asset/js/modal-register.js ***!
  \****************************************/
/***/ (() => {

console.log('appjs');
const form_register = document.querySelector('#form_register');
let params = new FormData();
params.append('action', 'get_register_form');
const error_register = document.querySelector('#error_register');
async function GetFormRegisterUser() {
  let response = await fetch(MYSCRIPT.ajaxUrl, {
    method: 'post',
    body: params
  });
  let data;
  try {
    data = await response.json();
  } catch (error) {
    console.error('Erreur lors de la conversion de la réponse JSON :', error);
  }
  if (data) {
    console.log('Données récupérées par le JS :', data.success, data.errors);
    error_register.innerHTML = '';
    if (data.success) {
      MicroModal.close('modal-register');
      MicroModal.show('modal-login');
    } else {
      error_register.innerHTML = data.errors.login || data.errors.email;
    }
  } else {
    console.error('Réponse du serveur vide ou invalide');
  }
}
form_register.addEventListener('submit', e => {
  e.preventDefault();
  params.append('login', document.querySelector('#identifiant').value);
  params.append('email', document.querySelector('#email').value);
  params.append('password', document.querySelector('#register_password').value);
  GetFormRegisterUser();
});

/***/ }),

/***/ "./src/asset/js/recruteur.js":
/*!***********************************!*\
  !*** ./src/asset/js/recruteur.js ***!
  \***********************************/
/***/ (() => {

function afficherDateEtHeure() {
  var maintenant = new Date();

  // Obtenir la date
  var jour = maintenant.getDate();
  var mois = maintenant.getMonth() + 1; // Les mois commencent à 0
  var annee = maintenant.getFullYear();

  // Obtenir l'heure
  var heure = maintenant.getHours();
  var minute = maintenant.getMinutes();
  var seconde = maintenant.getSeconds();

  // Ajouter un zéro devant les chiffres < 10 pour une meilleure lisibilité
  jour = jour < 10 ? "0" + jour : jour;
  mois = mois < 10 ? "0" + mois : mois;
  heure = heure < 10 ? "0" + heure : heure;
  minute = minute < 10 ? "0" + minute : minute;
  seconde = seconde < 10 ? "0" + seconde : seconde;

  // Construire les chaînes de texte pour la date et l'heure
  var dateActuelle = jour + "/" + mois + "/" + annee;
  var heureActuelle = heure + ":" + minute + ":" + seconde;
  var elementDate = document.getElementById("date");
  if (elementDate !== null) {
    elementDate.innerHTML = "Date: " + dateActuelle;
  }
  var elementHeure = document.getElementById("heure");
  if (elementHeure !== null) {
    elementHeure.innerHTML = "Heure: " + heureActuelle;
  }
}

// Mettre à jour la date et l'heure chaque seconde
setInterval(afficherDateEtHeure, 1000);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _asset_css_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/css/style.scss */ "./src/asset/css/style.scss");
/* harmony import */ var _asset_css_header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset/css/header.scss */ "./src/asset/css/header.scss");
/* harmony import */ var _asset_css_footer_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset/css/footer.scss */ "./src/asset/css/footer.scss");
/* harmony import */ var _asset_css_home_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset/css/home.scss */ "./src/asset/css/home.scss");
/* harmony import */ var _asset_css_modal_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset/css/modal.scss */ "./src/asset/css/modal.scss");
/* harmony import */ var _asset_css_recruteur_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asset/css/recruteur.scss */ "./src/asset/css/recruteur.scss");
/* harmony import */ var _asset_js_burger_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./asset/js/burger-menu.js */ "./src/asset/js/burger-menu.js");
/* harmony import */ var _asset_js_burger_menu_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_asset_js_burger_menu_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _asset_js_modal_contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./asset/js/modal-contact */ "./src/asset/js/modal-contact.js");
/* harmony import */ var _asset_js_modal_contact__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_asset_js_modal_contact__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _asset_js_modal_register_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./asset/js/modal-register.js */ "./src/asset/js/modal-register.js");
/* harmony import */ var _asset_js_modal_register_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_asset_js_modal_register_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _asset_js_recruteur__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./asset/js/recruteur */ "./src/asset/js/recruteur.js");
/* harmony import */ var _asset_js_recruteur__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_asset_js_recruteur__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _asset_js_modal_detail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./asset/js/modal-detail */ "./src/asset/js/modal-detail.js");
/* harmony import */ var _asset_js_modal_detail__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_asset_js_modal_detail__WEBPACK_IMPORTED_MODULE_11__);

// SCSS







// JS





if (isUserLoggedIn) {
  __webpack_require__.e(/*! import() */ "src_asset_js_modal-profil_js").then(__webpack_require__.t.bind(__webpack_require__, /*! ./asset/js/modal-profil.js */ "./src/asset/js/modal-profil.js", 23)).then(module => {});
} else {
  __webpack_require__.e(/*! import() */ "src_asset_js_modal_js").then(__webpack_require__.t.bind(__webpack_require__, /*! ./asset/js/modal.js */ "./src/asset/js/modal.js", 23)).then(module => {});
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f1b65caca2543003f55e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjFlNDBiNDQ3ODUyNzg5NWJkMzEyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxNQUFNQSxpQkFBaUIsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUd2RSxJQUFJQyxNQUFNLEdBQUcsSUFBSUMsUUFBUSxDQUFDLENBQUM7QUFDM0JELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUM7QUFFckMsZUFBZUMsYUFBYUEsQ0FBQSxFQUFHO0VBQzNCLElBQUk7SUFDQSxJQUFJQyxNQUFNLEdBQUdOLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFlBQVksQ0FBQztJQUNqREQsTUFBTSxDQUFDRSxTQUFTLEdBQUcsRUFBRTtJQUNyQixJQUFJQyxHQUFHLEdBQUdULFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM3Q0UsR0FBRyxDQUFDRCxTQUFTLEdBQUcsRUFBRTtJQUNsQixJQUFJRSxRQUFRLEdBQUdWLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNsREcsUUFBUSxDQUFDRixTQUFTLEdBQUcsRUFBRTtJQUN2QixJQUFJRyxJQUFJLEdBQUdYLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUMzQ0ksSUFBSSxDQUFDSCxTQUFTLEdBQUcsRUFBRTtJQUNuQixJQUFJSSxHQUFHLEdBQUdaLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUN4Q0ssR0FBRyxDQUFDSixTQUFTLEdBQUcsRUFBRTtJQUNsQixJQUFJSyxZQUFZLEdBQUdiLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUNyRE0sWUFBWSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFFNUMsSUFBSUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLEVBQUU7TUFDekNDLE1BQU0sRUFBRSxNQUFNO01BQ2RDLElB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O0FBS3BDO0FBQ21DO0FBRUQ7QUFFSTtBQUVSO0FBRUc7QUFHakMsSUFBSXFCLGNBQWMsRUFBRTtFQUNuQixtTUFBb0MsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLElBQUksQ0FDcEQsQ0FBQyxDQUFDO0FBQ0gsQ0FBQyxNQUFNO0VBQ04sOEtBQTZCLENBQUNELElBQUksQ0FBQ0MsTUFBTSxJQUFJLENBRTdDLENBQUMsQ0FBQztBQUNIOzs7Ozs7OztVQzlCQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9tb2RhbC1kZXRhaWwuanMiLCJ3ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2Fzc2V0L2pzL21vZGFsLXJlZ2lzdGVyLmpzIiwid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9yZWNydXRldXIuanMiLCJ3ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYmxpcGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBkZXRhaWxPcGVuQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qc19tb2RhbF9kZXRhaWwnKTtcblxuXG5sZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5wYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAnZ2V0X2RldGFpbCcpXG5cbmFzeW5jIGZ1bmN0aW9uIEdldERldGFpbFVzZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHByZW5vbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maXJzdE5hbWUnKTtcbiAgICAgICAgcHJlbm9tLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgdmFyIG5vbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXN0TmFtZScpO1xuICAgICAgICBub20uaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICB2YXIgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKTtcbiAgICAgICAgbG9jYXRpb24uaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICB2YXIgbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbCcpO1xuICAgICAgICBtYWlsLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgdmFyIHRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZWwnKTtcbiAgICAgICAgdGVsLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgdmFyIGxvYWRlckRldGFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXIyJyk7XG4gICAgICAgIGxvYWRlckRldGFpbC5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGVyLW5vbmVcIik7XG5cbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goTVlTQ1JJUFQuYWpheFVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBib2R5OiBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBsb2FkZXJEZXRhaWwuY2xhc3NMaXN0LmFkZChcImxvYWRlci1ub25lXCIpO1xuICAgICAgICBwcmVub20uaW5uZXJIVE1MID0gXCJQcmVub20gOiBcIiArIGRhdGEudXNlci5maXJzdE5hbWVcbiAgICAgICAgbm9tLmlubmVySFRNTCA9IFwiTm9tIDogXCIgKyBkYXRhLnVzZXIubGFzdE5hbWVcbiAgICAgICAgbG9jYXRpb24uaW5uZXJIVE1MID0gXCJBZHJlc3NlIDogXCIgKyBkYXRhLnVzZXIubG9jYXRpb25cbiAgICAgICAgbWFpbC5pbm5lckhUTUwgPSBcImVtYWlsIDogXCIgKyBkYXRhLnVzZXIuZW1haWxcbiAgICAgICAgdGVsLmlubmVySFRNTCA9IFwidGVsZXBob25lIDogXCIgKyBkYXRhLnVzZXIucGhvbmVOdW1iZXI7XG5cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIGNvbnZlcnNpb24gZGUgbGEgcsOpcG9uc2UgSlNPTiA6JywgZXJyb3IpO1xuICAgIH1cbn1cblxuZGV0YWlsT3BlbkJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbihidXR0b24pIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgY29uc3QgcG9zdElkID0gYnV0dG9uLmRhdGFzZXQucG9zdElkO1xuICAgICAgICBjb25zb2xlLmxvZyhwb3N0SWQpO1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcGFyYW1zLmFwcGVuZCgnaWQnLCBwb3N0SWQpO1xuICAgICAgICBNaWNyb01vZGFsLnNob3coJ21vZGFsLWRldGFpbCcpO1xuICAgICAgICBHZXREZXRhaWxVc2VyKCk7XG4gICAgfSk7XG59KTtcblxuIiwiY29uc29sZS5sb2coJ2FwcGpzJylcblxuY29uc3QgZm9ybV9yZWdpc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyJyk7XG5cbmxldCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcbnBhcmFtcy5hcHBlbmQoJ2FjdGlvbicsICdnZXRfcmVnaXN0ZXJfZm9ybScpXG5jb25zdCBlcnJvcl9yZWdpc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcl9yZWdpc3RlcicpO1xuYXN5bmMgZnVuY3Rpb24gR2V0Rm9ybVJlZ2lzdGVyVXNlcigpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChNWVNDUklQVC5hamF4VXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBib2R5OiBwYXJhbXNcbiAgICB9KTtcbiAgICBsZXQgZGF0YTtcbiAgICB0cnkge1xuICAgICAgICBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIGNvbnZlcnNpb24gZGUgbGEgcsOpcG9uc2UgSlNPTiA6JywgZXJyb3IpO1xuICAgIH1cblxuICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEb25uw6llcyByw6ljdXDDqXLDqWVzIHBhciBsZSBKUyA6JywgZGF0YS5zdWNjZXNzLCBkYXRhLmVycm9ycyk7XG5cbiAgICAgICAgZXJyb3JfcmVnaXN0ZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuXG4gICAgICAgICAgICBNaWNyb01vZGFsLmNsb3NlKCdtb2RhbC1yZWdpc3RlcicpO1xuICAgICAgICAgICAgTWljcm9Nb2RhbC5zaG93KCdtb2RhbC1sb2dpbicpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcl9yZWdpc3Rlci5pbm5lckhUTUwgPSBkYXRhLmVycm9ycy5sb2dpbiB8fCBkYXRhLmVycm9ycy5lbWFpbDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1LDqXBvbnNlIGR1IHNlcnZldXIgdmlkZSBvdSBpbnZhbGlkZScpO1xuICAgIH1cbn1cblxuXG5mb3JtX3JlZ2lzdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcGFyYW1zLmFwcGVuZCgnbG9naW4nLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaWRlbnRpZmlhbnQnKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnZW1haWwnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgncGFzc3dvcmQnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVnaXN0ZXJfcGFzc3dvcmQnKS52YWx1ZSk7XG4gICAgR2V0Rm9ybVJlZ2lzdGVyVXNlcigpO1xufSk7XG5cbiIsImZ1bmN0aW9uIGFmZmljaGVyRGF0ZUV0SGV1cmUoKSB7XG4gICAgdmFyIG1haW50ZW5hbnQgPSBuZXcgRGF0ZSgpO1xuXG4gICAgLy8gT2J0ZW5pciBsYSBkYXRlXG4gICAgdmFyIGpvdXIgPSBtYWludGVuYW50LmdldERhdGUoKTtcbiAgICB2YXIgbW9pcyA9IG1haW50ZW5hbnQuZ2V0TW9udGgoKSArIDE7IC8vIExlcyBtb2lzIGNvbW1lbmNlbnQgw6AgMFxuICAgIHZhciBhbm5lZSA9IG1haW50ZW5hbnQuZ2V0RnVsbFllYXIoKTtcblxuICAgIC8vIE9idGVuaXIgbCdoZXVyZVxuICAgIHZhciBoZXVyZSA9IG1haW50ZW5hbnQuZ2V0SG91cnMoKTtcbiAgICB2YXIgbWludXRlID0gbWFpbnRlbmFudC5nZXRNaW51dGVzKCk7XG4gICAgdmFyIHNlY29uZGUgPSBtYWludGVuYW50LmdldFNlY29uZHMoKTtcblxuICAgIC8vIEFqb3V0ZXIgdW4gesOpcm8gZGV2YW50IGxlcyBjaGlmZnJlcyA8IDEwIHBvdXIgdW5lIG1laWxsZXVyZSBsaXNpYmlsaXTDqVxuICAgIGpvdXIgPSAoam91ciA8IDEwKSA/IFwiMFwiICsgam91ciA6IGpvdXI7XG4gICAgbW9pcyA9IChtb2lzIDwgMTApID8gXCIwXCIgKyBtb2lzIDogbW9pcztcbiAgICBoZXVyZSA9IChoZXVyZSA8IDEwKSA/IFwiMFwiICsgaGV1cmUgOiBoZXVyZTtcbiAgICBtaW51dGUgPSAobWludXRlIDwgMTApID8gXCIwXCIgKyBtaW51dGUgOiBtaW51dGU7XG4gICAgc2Vjb25kZSA9IChzZWNvbmRlIDwgMTApID8gXCIwXCIgKyBzZWNvbmRlIDogc2Vjb25kZTtcblxuXG4gICAgLy8gQ29uc3RydWlyZSBsZXMgY2hhw65uZXMgZGUgdGV4dGUgcG91ciBsYSBkYXRlIGV0IGwnaGV1cmVcbiAgICB2YXIgZGF0ZUFjdHVlbGxlID0gam91ciArIFwiL1wiICsgbW9pcyArIFwiL1wiICsgYW5uZWU7XG4gICAgdmFyIGhldXJlQWN0dWVsbGUgPSBoZXVyZSArIFwiOlwiICsgbWludXRlICsgXCI6XCIgKyBzZWNvbmRlO1xuXG5cbiAgICB2YXIgZWxlbWVudERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIik7XG4gICAgaWYgKGVsZW1lbnREYXRlICE9PSBudWxsKSB7XG4gICAgICAgIGVsZW1lbnREYXRlLmlubmVySFRNTCA9IFwiRGF0ZTogXCIgKyBkYXRlQWN0dWVsbGU7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnRIZXVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGV1cmVcIik7XG4gICAgaWYgKGVsZW1lbnRIZXVyZSAhPT0gbnVsbCkge1xuXG4gICAgICAgIGVsZW1lbnRIZXVyZS5pbm5lckhUTUwgPSBcIkhldXJlOiBcIiArIGhldXJlQWN0dWVsbGU7XG4gICAgfVxuXG59XG5cbi8vIE1ldHRyZSDDoCBqb3VyIGxhIGRhdGUgZXQgbCdoZXVyZSBjaGFxdWUgc2Vjb25kZVxuc2V0SW50ZXJ2YWwoYWZmaWNoZXJEYXRlRXRIZXVyZSwgMTAwMCk7XG5cblxuXG4iLCIvLyBTQ1NTXG5pbXBvcnQgJy4vYXNzZXQvY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2Fzc2V0L2Nzcy9oZWFkZXIuc2Nzcyc7XG5pbXBvcnQgJy4vYXNzZXQvY3NzL2Zvb3Rlci5zY3NzJztcbmltcG9ydCAnLi9hc3NldC9jc3MvaG9tZS5zY3NzJztcbmltcG9ydCAnLi9hc3NldC9jc3MvbW9kYWwuc2Nzcyc7XG5pbXBvcnQgJy4vYXNzZXQvY3NzL3JlY3J1dGV1ci5zY3NzJztcblxuXG5cblxuLy8gSlNcbmltcG9ydCAnLi9hc3NldC9qcy9idXJnZXItbWVudS5qcyc7XG5cbmltcG9ydCAnLi9hc3NldC9qcy9tb2RhbC1jb250YWN0JztcblxuaW1wb3J0ICcuL2Fzc2V0L2pzL21vZGFsLXJlZ2lzdGVyLmpzJztcblxuaW1wb3J0ICcuL2Fzc2V0L2pzL3JlY3J1dGV1cic7XG5cbmltcG9ydCAnLi9hc3NldC9qcy9tb2RhbC1kZXRhaWwnO1xuXG5cbmlmIChpc1VzZXJMb2dnZWRJbikge1xuIGltcG9ydCgnLi9hc3NldC9qcy9tb2RhbC1wcm9maWwuanMnKS50aGVuKG1vZHVsZSA9PiB7XG4gfSk7XG59IGVsc2Uge1xuIGltcG9ydCgnLi9hc3NldC9qcy9tb2RhbC5qcycpLnRoZW4obW9kdWxlID0+IHtcblxuIH0pO1xufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImYxYjY1Y2FjYTI1NDMwMDNmNTVlXCIpIl0sIm5hbWVzIjpbImRldGFpbE9wZW5CdXR0b25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFyYW1zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJHZXREZXRhaWxVc2VyIiwicHJlbm9tIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsIm5vbSIsImxvY2F0aW9uIiwibWFpbCIsInRlbCIsImxvYWRlckRldGFpbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJNWVNDUklQVCIsImFqYXhVcmwiLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJhZGQiLCJ1c2VyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBob25lTnVtYmVyIiwiZXJyb3IiLCJjb25zb2xlIiwiZm9yRWFjaCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJwb3N0SWQiLCJkYXRhc2V0IiwibG9nIiwicHJldmVudERlZmF1bHQiLCJNaWNyb01vZGFsIiwic2hvdyIsImZvcm1fcmVnaXN0ZXIiLCJlcnJvcl9yZWdpc3RlciIsIkdldEZvcm1SZWdpc3RlclVzZXIiLCJzdWNjZXNzIiwiZXJyb3JzIiwiY2xvc2UiLCJsb2dpbiIsImUiLCJ2YWx1ZSIsImFmZmljaGVyRGF0ZUV0SGV1cmUiLCJtYWludGVuYW50IiwiRGF0ZSIsImpvdXIiLCJnZXREYXRlIiwibW9pcyIsImdldE1vbnRoIiwiYW5uZWUiLCJnZXRGdWxsWWVhciIsImhldXJlIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kZSIsImdldFNlY29uZHMiLCJkYXRlQWN0dWVsbGUiLCJoZXVyZUFjdHVlbGxlIiwiZWxlbWVudERhdGUiLCJnZXRFbGVtZW50QnlJZCIsImVsZW1lbnRIZXVyZSIsInNldEludGVydmFsIiwiaXNVc2VyTG9nZ2VkSW4iLCJ0aGVuIiwibW9kdWxlIl0sInNvdXJjZVJvb3QiOiIifQ==