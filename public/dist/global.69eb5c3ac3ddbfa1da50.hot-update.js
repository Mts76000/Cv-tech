self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/modal-contact.js":
/*!***************************************!*\
  !*** ./src/asset/js/modal-contact.js ***!
  \***************************************/
/***/ (() => {

const opener_modal_contact = document.querySelectorAll('.js_modal_contact');
let params = new FormData();
params.append('action', 'get_contact');
async function GetContactUser() {
  try {
    var email = document.querySelector('.mail');
    email.innerHTML = "";
    var phone = document.querySelector('.phone');
    phone.innerHTML = "";
    var loader = document.querySelector('.loader');
    loader.classList.remove("loader-none");
    let response = await fetch(MYSCRIPT.ajaxUrl, {
      method: 'post',
      body: params
    });
    let data = await response.json();
    loader.classList.add("loader-none");
    email.innerHTML = "email : " + data.user.email;
    email.href = "mailto:" + data.user.email;
    phone.innerHTML = "telephone : " + data.user.phoneNumber;
  } catch (error) {
    console.error('Erreur lors de la conversion de la réponse JSON :', error);
  }
}
opener_modal_contact.forEach(function (button) {
  button.addEventListener('click', function (evt) {
    const postId = button.dataset.postId;
    console.log(postId);
    evt.preventDefault();
    params.append('id', postId);
    MicroModal.show('modal-contact');
    GetContactUser();
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

/***/ "./src/asset/css/modal.scss":
/*!**********************************!*\
  !*** ./src/asset/css/modal.scss ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1706955480722
      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/asset/css/recruteur.scss":
/*!**************************************!*\
  !*** ./src/asset/css/recruteur.scss ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1706955480752
      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/asset/css/style.scss":
/*!**********************************!*\
  !*** ./src/asset/css/style.scss ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1706955480775
      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0e56e1f26c7d7f2cabc4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjY5ZWI1YzNhYzNkZGJmYTFkYTUwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNQSxvQkFBb0IsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztBQUczRSxJQUFJQyxNQUFNLEdBQUcsSUFBSUMsUUFBUSxDQUFDLENBQUM7QUFDM0JELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUM7QUFFdEMsZUFBZUMsY0FBY0EsQ0FBQSxFQUFHO0VBQzVCLElBQUk7SUFDQSxJQUFJQyxLQUFLLEdBQUdOLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUMzQ0QsS0FBSyxDQUFDRSxTQUFTLEdBQUcsRUFBRTtJQUNwQixJQUFJQyxLQUFLLEdBQUdULFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUM1Q0UsS0FBSyxDQUFDRCxTQUFTLEdBQUcsRUFBRTtJQUNwQixJQUFJRSxNQUFNLEdBQUdWLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUM5Q0csTUFBTSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFFdEMsSUFBSUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLEVBQUU7TUFDekNDLE1BQU0sRUFBRSxNQUFNO01BQ2RDLElBQUksRUFBRWhCO0lBQ1YsQ0FBQyxDQUFDO0lBQ0YsSUFBSWlCLElBQUksR0FBRyxNQUFNTixRQUFRLENBQUNPLElBQUksQ0FBQyxDQUFDO0lBRWhDVixNQUFNLENBQUNDLFNBQVMsQ0FBQ1UsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUMvQmYsS0FBSyxDQUFDRSxTQUFTLEdBQUcsVUFBVSxHQUFHVyxJQUFJLENBQUNHLElBQUksQ0FBQ2hCLEtBQUs7SUFDOUNBLEtBQUssQ0FBQ2lCLElBQUksR0FBRyxTQUFTLEdBQUdKLElBQUksQ0FBQ0csSUFBSSxDQUFDaEIsS0FBSztJQUN4Q0csS0FBSyxDQUFDRCxTQUFTLEdBQUcsY0FBYyxHQUFHVyxJQUFJLENBQUNHLElBQUksQ0FBQ0UsV0FBVztFQU9oRSxDQUFDLENBQUMsT0FBT0MsS0FBSyxFQUFFO0lBQ1pDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLG1EQUFtRCxFQUFFQSxLQUFLLENBQUM7RUFDN0U7QUFDSjtBQUNBMUIsb0JBQW9CLENBQUM0QixPQUFPLENBQUUsVUFBU0MsTUFBTSxFQUFFO0VBQzNDQSxNQUFNLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFTQyxHQUFHLEVBQUU7SUFDM0MsTUFBTUMsTUFBTSxHQUFHSCxNQUFNLENBQUNJLE9BQU8sQ0FBQ0QsTUFBTTtJQUNwQ0wsT0FBTyxDQUFDTyxHQUFHLENBQUNGLE1BQU0sQ0FBQztJQUNuQkQsR0FBRyxDQUFDSSxjQUFjLENBQUMsQ0FBQztJQUNwQmhDLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLElBQUksRUFBRTJCLE1BQU0sQ0FBQztJQUMzQkksVUFBVSxDQUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hDL0IsY0FBYyxDQUFDLENBQUM7RUFHcEIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDOUNGcUIsT0FBTyxDQUFDTyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBRXBCLE1BQU1JLGFBQWEsR0FBR3JDLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBRTlELElBQUlMLE1BQU0sR0FBRyxJQUFJQyxRQUFRLENBQUMsQ0FBQztBQUMzQkQsTUFBTSxDQUFDRSxNQUFNLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDO0FBQzVDLE1BQU1rQyxjQUFjLEdBQUd0QyxRQUFRLENBQUNPLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztBQUNoRSxlQUFlZ0MsbUJBQW1CQSxDQUFBLEVBQUc7RUFDakMsSUFBSTFCLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxFQUFFO0lBQ3pDQyxNQUFNLEVBQUUsTUFBTTtJQUNkQyxJQUFJLEVBQUVoQjtFQUNWLENBQUMsQ0FBQztFQUNGLElBQUlpQixJQUFJO0VBQ1IsSUFBSTtJQUNBQSxJQUFJLEdBQUcsTUFBTU4sUUFBUSxDQUFDTyxJQUFJLENBQUMsQ0FBQztFQUNoQyxDQUFDLENBQUMsT0FBT0ssS0FBSyxFQUFFO0lBQ1pDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLG1EQUFtRCxFQUFFQSxLQUFLLENBQUM7RUFDN0U7RUFFQSxJQUFJTixJQUFJLEVBQUU7SUFDTk8sT0FBTyxDQUFDTyxHQUFHLENBQUMsZ0NBQWdDLEVBQUVkLElBQUksQ0FBQ3FCLE9BQU8sRUFBRXJCLElBQUksQ0FBQ3NCLE1BQU0sQ0FBQztJQUV4RUgsY0FBYyxDQUFDOUIsU0FBUyxHQUFHLEVBQUU7SUFFN0IsSUFBSVcsSUFBSSxDQUFDcUIsT0FBTyxFQUFFO01BRWRMLFVBQVUsQ0FBQ08sS0FBSyxDQUFDLGdCQUFnQixDQUFDO01BQ2xDUCxVQUFVLENBQUNDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFFbEMsQ0FBQyxNQUFNO01BQ0hFLGNBQWMsQ0FBQzlCLFNBQVMsR0FBR1csSUFBSSxDQUFDc0IsTUFBTSxDQUFDRSxLQUFLLElBQUl4QixJQUFJLENBQUNzQixNQUFNLENBQUNuQyxLQUFLO0lBQ3JFO0VBQ0osQ0FBQyxNQUFNO0lBQ0hvQixPQUFPLENBQUNELEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQztFQUN4RDtBQUNKO0FBR0FZLGFBQWEsQ0FBQ1IsZ0JBQWdCLENBQUMsUUFBUSxFQUFHZSxDQUFDLElBQUk7RUFDM0NBLENBQUMsQ0FBQ1YsY0FBYyxDQUFDLENBQUM7RUFDbEJoQyxNQUFNLENBQUNFLE1BQU0sQ0FBQyxPQUFPLEVBQUVKLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDc0MsS0FBSyxDQUFDO0VBQ3BFM0MsTUFBTSxDQUFDRSxNQUFNLENBQUMsT0FBTyxFQUFFSixRQUFRLENBQUNPLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQ3NDLEtBQUssQ0FBQztFQUM5RDNDLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFVBQVUsRUFBRUosUUFBUSxDQUFDTyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQ3NDLEtBQUssQ0FBQztFQUM3RU4sbUJBQW1CLENBQUMsQ0FBQztBQUN6QixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQzVDRjtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsK0pBQWdGLGNBQWMsZUFBZTtBQUMzSSxNQUFNLFVBQVU7QUFDaEIsTUFBTSxpQkFBaUI7QUFDdkI7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFDVTtBQUNWLE9BQU8sSUFBVTtBQUNqQjtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLCtKQUFnRixjQUFjLGVBQWU7QUFDM0ksTUFBTSxVQUFVO0FBQ2hCLE1BQU0saUJBQWlCO0FBQ3ZCO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQywrSkFBZ0YsY0FBYyxlQUFlO0FBQzNJLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7OztVQ1JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2Fzc2V0L2pzL21vZGFsLWNvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2Fzc2V0L2pzL21vZGFsLXJlZ2lzdGVyLmpzIiwid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9jc3MvbW9kYWwuc2Nzcz8yMjFiIiwid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9jc3MvcmVjcnV0ZXVyLnNjc3M/Y2RmZiIsIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvY3NzL3N0eWxlLnNjc3M/M2NhZCIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9wZW5lcl9tb2RhbF9jb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzX21vZGFsX2NvbnRhY3QnKTtcblxuXG5sZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5wYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAnZ2V0X2NvbnRhY3QnKVxuXG5hc3luYyBmdW5jdGlvbiBHZXRDb250YWN0VXNlcigpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbCcpO1xuICAgICAgICBlbWFpbC5pbm5lckhUTUwgPSBcIlwiIDtcbiAgICAgICAgdmFyIHBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBob25lJyk7XG4gICAgICAgIHBob25lLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgdmFyIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKTtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkZXItbm9uZVwiKTtcblxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChNWVNDUklQVC5hamF4VXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIGJvZHk6IHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJsb2FkZXItbm9uZVwiKTtcbiAgICAgICAgICAgIGVtYWlsLmlubmVySFRNTCA9IFwiZW1haWwgOiBcIiArIGRhdGEudXNlci5lbWFpbDtcbiAgICAgICAgICAgIGVtYWlsLmhyZWYgPSBcIm1haWx0bzpcIiArIGRhdGEudXNlci5lbWFpbDtcbiAgICAgICAgICAgIHBob25lLmlubmVySFRNTCA9IFwidGVsZXBob25lIDogXCIgKyBkYXRhLnVzZXIucGhvbmVOdW1iZXI7XG5cblxuXG5cblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgY29udmVyc2lvbiBkZSBsYSByw6lwb25zZSBKU09OIDonLCBlcnJvcik7XG4gICAgfVxufVxub3BlbmVyX21vZGFsX2NvbnRhY3QuZm9yRWFjaCggZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIGNvbnN0IHBvc3RJZCA9IGJ1dHRvbi5kYXRhc2V0LnBvc3RJZDtcbiAgICAgICAgY29uc29sZS5sb2cocG9zdElkKTtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHBhcmFtcy5hcHBlbmQoJ2lkJywgcG9zdElkKTtcbiAgICAgICAgTWljcm9Nb2RhbC5zaG93KCdtb2RhbC1jb250YWN0Jyk7XG4gICAgICAgIEdldENvbnRhY3RVc2VyKCk7XG5cblxuICAgIH0pO1xufSk7XG5cblxuXG4iLCJjb25zb2xlLmxvZygnYXBwanMnKVxuXG5jb25zdCBmb3JtX3JlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXInKTtcblxubGV0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xucGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgJ2dldF9yZWdpc3Rlcl9mb3JtJylcbmNvbnN0IGVycm9yX3JlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yX3JlZ2lzdGVyJyk7XG5hc3luYyBmdW5jdGlvbiBHZXRGb3JtUmVnaXN0ZXJVc2VyKCkge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwsIHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGJvZHk6IHBhcmFtc1xuICAgIH0pO1xuICAgIGxldCBkYXRhO1xuICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgY29udmVyc2lvbiBkZSBsYSByw6lwb25zZSBKU09OIDonLCBlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Rvbm7DqWVzIHLDqWN1cMOpcsOpZXMgcGFyIGxlIEpTIDonLCBkYXRhLnN1Y2Nlc3MsIGRhdGEuZXJyb3JzKTtcblxuICAgICAgICBlcnJvcl9yZWdpc3Rlci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgIE1pY3JvTW9kYWwuY2xvc2UoJ21vZGFsLXJlZ2lzdGVyJyk7XG4gICAgICAgICAgICBNaWNyb01vZGFsLnNob3coJ21vZGFsLWxvZ2luJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yX3JlZ2lzdGVyLmlubmVySFRNTCA9IGRhdGEuZXJyb3JzLmxvZ2luIHx8IGRhdGEuZXJyb3JzLmVtYWlsO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUsOpcG9uc2UgZHUgc2VydmV1ciB2aWRlIG91IGludmFsaWRlJyk7XG4gICAgfVxufVxuXG5cbmZvcm1fcmVnaXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdsb2dpbicsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpZGVudGlmaWFudCcpLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdlbWFpbCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCcpLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdwYXNzd29yZCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWdpc3Rlcl9wYXNzd29yZCcpLnZhbHVlKTtcbiAgICBHZXRGb3JtUmVnaXN0ZXJVc2VyKCk7XG59KTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTcwNjk1NTQ4MDcyMlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNzA2OTU1NDgwNzUyXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE3MDY5NTU0ODA3NzVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGU1NmUxZjI2YzdkN2YyY2FiYzRcIikiXSwibmFtZXMiOlsib3BlbmVyX21vZGFsX2NvbnRhY3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJhbXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkdldENvbnRhY3RVc2VyIiwiZW1haWwiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwicGhvbmUiLCJsb2FkZXIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJyZXNwb25zZSIsImZldGNoIiwiTVlTQ1JJUFQiLCJhamF4VXJsIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwiYWRkIiwidXNlciIsImhyZWYiLCJwaG9uZU51bWJlciIsImVycm9yIiwiY29uc29sZSIsImZvckVhY2giLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwicG9zdElkIiwiZGF0YXNldCIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiTWljcm9Nb2RhbCIsInNob3ciLCJmb3JtX3JlZ2lzdGVyIiwiZXJyb3JfcmVnaXN0ZXIiLCJHZXRGb3JtUmVnaXN0ZXJVc2VyIiwic3VjY2VzcyIsImVycm9ycyIsImNsb3NlIiwibG9naW4iLCJlIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9