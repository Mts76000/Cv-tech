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
/******/ 	__webpack_require__.h = () => ("17e00b75fff6223da8a7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjBlNTZlMWYyNmM3ZDdmMmNhYmM0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxNQUFNQSxpQkFBaUIsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUd2RSxJQUFJQyxNQUFNLEdBQUcsSUFBSUMsUUFBUSxDQUFDLENBQUM7QUFDM0JELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUM7QUFFckMsZUFBZUMsYUFBYUEsQ0FBQSxFQUFHO0VBQzNCLElBQUk7SUFDQSxJQUFJQyxNQUFNLEdBQUdOLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFlBQVksQ0FBQztJQUNqREQsTUFBTSxDQUFDRSxTQUFTLEdBQUcsRUFBRTtJQUNyQixJQUFJQyxHQUFHLEdBQUdULFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM3Q0UsR0FBRyxDQUFDRCxTQUFTLEdBQUcsRUFBRTtJQUNsQixJQUFJRSxRQUFRLEdBQUdWLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNsREcsUUFBUSxDQUFDRixTQUFTLEdBQUcsRUFBRTtJQUN2QixJQUFJRyxJQUFJLEdBQUdYLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUMzQ0ksSUFBSSxDQUFDSCxTQUFTLEdBQUcsRUFBRTtJQUNuQixJQUFJSSxHQUFHLEdBQUdaLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUN4Q0ssR0FBRyxDQUFDSixTQUFTLEdBQUcsRUFBRTtJQUNsQixJQUFJSyxZQUFZLEdBQUdiLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUNyRE0sWUFBWSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFFNUMsSUFBSUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLEVBQUU7TUFDekNDLE1BQU0sRUFBRSxNQUFNO01BQ2RDLElB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QUFHLEdBQUdFLE9BQU87RUFHeEQsSUFBSUksV0FBVyxHQUFHM0QsUUFBUSxDQUFDNEQsY0FBYyxDQUFDLE1BQU0sQ0FBQztFQUNqRCxJQUFJRCxXQUFXLEtBQUssSUFBSSxFQUFFO0lBQ3RCQSxXQUFXLENBQUNuRCxTQUFTLEdBQUcsUUFBUSxHQUFHaUQsWUFBWTtFQUNuRDtFQUVBLElBQUlJLFlBQVksR0FBRzdELFFBQVEsQ0FBQzRELGNBQWMsQ0FBQyxPQUFPLENBQUM7RUFDbkQsSUFBSUMsWUFBWSxLQUFLLElBQUksRUFBRTtJQUV2QkEsWUFBWSxDQUFDckQsU0FBUyxHQUFHLFNBQVMsR0FBR2tELGFBQWE7RUFDdEQ7QUFFSjs7QUFFQTtBQUNBSSxXQUFXLENBQUNwQixtQkFBbUIsRUFBRSxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q3RDO0FBQ2dDO0FBQ0M7QUFDQTtBQUNGO0FBQ0M7QUFDSTs7QUFLcEM7QUFDbUM7QUFFRDtBQUVJO0FBRVI7QUFFRztBQUdqQyxJQUFJcUIsY0FBYyxFQUFFO0VBQ25CLG1NQUFvQyxDQUFDQyxJQUFJLENBQUNDLE1BQU0sSUFBSSxDQUNwRCxDQUFDLENBQUM7QUFDSCxDQUFDLE1BQU07RUFDTiw4S0FBNkIsQ0FBQ0QsSUFBSSxDQUFDQyxNQUFNLElBQUksQ0FFN0MsQ0FBQyxDQUFDO0FBQ0g7Ozs7Ozs7O1VDOUJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2Fzc2V0L2pzL21vZGFsLWRldGFpbC5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvcmVjcnV0ZXVyLmpzIiwid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZGV0YWlsT3BlbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanNfbW9kYWxfZGV0YWlsJyk7XG5cblxubGV0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xucGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgJ2dldF9kZXRhaWwnKVxuXG5hc3luYyBmdW5jdGlvbiBHZXREZXRhaWxVc2VyKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBwcmVub20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlyc3ROYW1lJyk7XG4gICAgICAgIHByZW5vbS5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgIHZhciBub20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFzdE5hbWUnKTtcbiAgICAgICAgbm9tLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uJyk7XG4gICAgICAgIGxvY2F0aW9uLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgdmFyIG1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwnKTtcbiAgICAgICAgbWFpbC5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgIHZhciB0ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVsJyk7XG4gICAgICAgIHRlbC5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgIHZhciBsb2FkZXJEZXRhaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyMicpO1xuICAgICAgICBsb2FkZXJEZXRhaWwuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRlci1ub25lXCIpO1xuXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgYm9keTogcGFyYW1zXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgbG9hZGVyRGV0YWlsLmNsYXNzTGlzdC5hZGQoXCJsb2FkZXItbm9uZVwiKTtcbiAgICAgICAgcHJlbm9tLmlubmVySFRNTCA9IFwiUHJlbm9tIDogXCIgKyBkYXRhLnVzZXIuZmlyc3ROYW1lXG4gICAgICAgIG5vbS5pbm5lckhUTUwgPSBcIk5vbSA6IFwiICsgZGF0YS51c2VyLmxhc3ROYW1lXG4gICAgICAgIGxvY2F0aW9uLmlubmVySFRNTCA9IFwiQWRyZXNzZSA6IFwiICsgZGF0YS51c2VyLmxvY2F0aW9uXG4gICAgICAgIG1haWwuaW5uZXJIVE1MID0gXCJlbWFpbCA6IFwiICsgZGF0YS51c2VyLmVtYWlsXG4gICAgICAgIHRlbC5pbm5lckhUTUwgPSBcInRlbGVwaG9uZSA6IFwiICsgZGF0YS51c2VyLnBob25lTnVtYmVyO1xuXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSBjb252ZXJzaW9uIGRlIGxhIHLDqXBvbnNlIEpTT04gOicsIGVycm9yKTtcbiAgICB9XG59XG5cbmRldGFpbE9wZW5CdXR0b25zLmZvckVhY2goZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIGNvbnN0IHBvc3RJZCA9IGJ1dHRvbi5kYXRhc2V0LnBvc3RJZDtcbiAgICAgICAgY29uc29sZS5sb2cocG9zdElkKTtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHBhcmFtcy5hcHBlbmQoJ2lkJywgcG9zdElkKTtcbiAgICAgICAgTWljcm9Nb2RhbC5zaG93KCdtb2RhbC1kZXRhaWwnKTtcbiAgICAgICAgR2V0RGV0YWlsVXNlcigpO1xuICAgIH0pO1xufSk7XG5cbiIsImZ1bmN0aW9uIGFmZmljaGVyRGF0ZUV0SGV1cmUoKSB7XG4gICAgdmFyIG1haW50ZW5hbnQgPSBuZXcgRGF0ZSgpO1xuXG4gICAgLy8gT2J0ZW5pciBsYSBkYXRlXG4gICAgdmFyIGpvdXIgPSBtYWludGVuYW50LmdldERhdGUoKTtcbiAgICB2YXIgbW9pcyA9IG1haW50ZW5hbnQuZ2V0TW9udGgoKSArIDE7IC8vIExlcyBtb2lzIGNvbW1lbmNlbnQgw6AgMFxuICAgIHZhciBhbm5lZSA9IG1haW50ZW5hbnQuZ2V0RnVsbFllYXIoKTtcblxuICAgIC8vIE9idGVuaXIgbCdoZXVyZVxuICAgIHZhciBoZXVyZSA9IG1haW50ZW5hbnQuZ2V0SG91cnMoKTtcbiAgICB2YXIgbWludXRlID0gbWFpbnRlbmFudC5nZXRNaW51dGVzKCk7XG4gICAgdmFyIHNlY29uZGUgPSBtYWludGVuYW50LmdldFNlY29uZHMoKTtcblxuICAgIC8vIEFqb3V0ZXIgdW4gesOpcm8gZGV2YW50IGxlcyBjaGlmZnJlcyA8IDEwIHBvdXIgdW5lIG1laWxsZXVyZSBsaXNpYmlsaXTDqVxuICAgIGpvdXIgPSAoam91ciA8IDEwKSA/IFwiMFwiICsgam91ciA6IGpvdXI7XG4gICAgbW9pcyA9IChtb2lzIDwgMTApID8gXCIwXCIgKyBtb2lzIDogbW9pcztcbiAgICBoZXVyZSA9IChoZXVyZSA8IDEwKSA/IFwiMFwiICsgaGV1cmUgOiBoZXVyZTtcbiAgICBtaW51dGUgPSAobWludXRlIDwgMTApID8gXCIwXCIgKyBtaW51dGUgOiBtaW51dGU7XG4gICAgc2Vjb25kZSA9IChzZWNvbmRlIDwgMTApID8gXCIwXCIgKyBzZWNvbmRlIDogc2Vjb25kZTtcblxuXG4gICAgLy8gQ29uc3RydWlyZSBsZXMgY2hhw65uZXMgZGUgdGV4dGUgcG91ciBsYSBkYXRlIGV0IGwnaGV1cmVcbiAgICB2YXIgZGF0ZUFjdHVlbGxlID0gam91ciArIFwiL1wiICsgbW9pcyArIFwiL1wiICsgYW5uZWU7XG4gICAgdmFyIGhldXJlQWN0dWVsbGUgPSBoZXVyZSArIFwiOlwiICsgbWludXRlICsgXCI6XCIgKyBzZWNvbmRlO1xuXG5cbiAgICB2YXIgZWxlbWVudERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIik7XG4gICAgaWYgKGVsZW1lbnREYXRlICE9PSBudWxsKSB7XG4gICAgICAgIGVsZW1lbnREYXRlLmlubmVySFRNTCA9IFwiRGF0ZTogXCIgKyBkYXRlQWN0dWVsbGU7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnRIZXVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGV1cmVcIik7XG4gICAgaWYgKGVsZW1lbnRIZXVyZSAhPT0gbnVsbCkge1xuXG4gICAgICAgIGVsZW1lbnRIZXVyZS5pbm5lckhUTUwgPSBcIkhldXJlOiBcIiArIGhldXJlQWN0dWVsbGU7XG4gICAgfVxuXG59XG5cbi8vIE1ldHRyZSDDoCBqb3VyIGxhIGRhdGUgZXQgbCdoZXVyZSBjaGFxdWUgc2Vjb25kZVxuc2V0SW50ZXJ2YWwoYWZmaWNoZXJEYXRlRXRIZXVyZSwgMTAwMCk7XG5cblxuXG4iLCIvLyBTQ1NTXG5pbXBvcnQgJy4vYXNzZXQvY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2Fzc2V0L2Nzcy9oZWFkZXIuc2Nzcyc7XG5pbXBvcnQgJy4vYXNzZXQvY3NzL2Zvb3Rlci5zY3NzJztcbmltcG9ydCAnLi9hc3NldC9jc3MvaG9tZS5zY3NzJztcbmltcG9ydCAnLi9hc3NldC9jc3MvbW9kYWwuc2Nzcyc7XG5pbXBvcnQgJy4vYXNzZXQvY3NzL3JlY3J1dGV1ci5zY3NzJztcblxuXG5cblxuLy8gSlNcbmltcG9ydCAnLi9hc3NldC9qcy9idXJnZXItbWVudS5qcyc7XG5cbmltcG9ydCAnLi9hc3NldC9qcy9tb2RhbC1jb250YWN0JztcblxuaW1wb3J0ICcuL2Fzc2V0L2pzL21vZGFsLXJlZ2lzdGVyLmpzJztcblxuaW1wb3J0ICcuL2Fzc2V0L2pzL3JlY3J1dGV1cic7XG5cbmltcG9ydCAnLi9hc3NldC9qcy9tb2RhbC1kZXRhaWwnO1xuXG5cbmlmIChpc1VzZXJMb2dnZWRJbikge1xuIGltcG9ydCgnLi9hc3NldC9qcy9tb2RhbC1wcm9maWwuanMnKS50aGVuKG1vZHVsZSA9PiB7XG4gfSk7XG59IGVsc2Uge1xuIGltcG9ydCgnLi9hc3NldC9qcy9tb2RhbC5qcycpLnRoZW4obW9kdWxlID0+IHtcblxuIH0pO1xufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE3ZTAwYjc1ZmZmNjIyM2RhOGE3XCIpIl0sIm5hbWVzIjpbImRldGFpbE9wZW5CdXR0b25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFyYW1zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJHZXREZXRhaWxVc2VyIiwicHJlbm9tIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsIm5vbSIsImxvY2F0aW9uIiwibWFpbCIsInRlbCIsImxvYWRlckRldGFpbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJNWVNDUklQVCIsImFqYXhVcmwiLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJhZGQiLCJ1c2VyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBob25lTnVtYmVyIiwiZXJyb3IiLCJjb25zb2xlIiwiZm9yRWFjaCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJwb3N0SWQiLCJkYXRhc2V0IiwibG9nIiwicHJldmVudERlZmF1bHQiLCJNaWNyb01vZGFsIiwic2hvdyIsImFmZmljaGVyRGF0ZUV0SGV1cmUiLCJtYWludGVuYW50IiwiRGF0ZSIsImpvdXIiLCJnZXREYXRlIiwibW9pcyIsImdldE1vbnRoIiwiYW5uZWUiLCJnZXRGdWxsWWVhciIsImhldXJlIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kZSIsImdldFNlY29uZHMiLCJkYXRlQWN0dWVsbGUiLCJoZXVyZUFjdHVlbGxlIiwiZWxlbWVudERhdGUiLCJnZXRFbGVtZW50QnlJZCIsImVsZW1lbnRIZXVyZSIsInNldEludGVydmFsIiwiaXNVc2VyTG9nZ2VkSW4iLCJ0aGVuIiwibW9kdWxlIl0sInNvdXJjZVJvb3QiOiIifQ==