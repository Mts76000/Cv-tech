self["webpackHotUpdateweblipack"]("global",{

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
      const opener_modal_register = document.querySelector('#js_modal_register');
      opener_modal_register.addEventListener('click', function (evt) {
        evt.preventDefault();
        MicroModal.show('modal-register');
      });
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8a64fd054cc0d7b0bf9a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmNhZjA3MGUyODBlZjc3MDY0NTVhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBRXBCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFFOUQsSUFBSUMsTUFBTSxHQUFHLElBQUlDLFFBQVEsQ0FBQyxDQUFDO0FBQzNCRCxNQUFNLENBQUNFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7QUFDNUMsTUFBTUMsY0FBYyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztBQUNoRSxlQUFlSyxtQkFBbUJBLENBQUEsRUFBRztFQUNqQyxJQUFJQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sRUFBRTtJQUN6Q0MsTUFBTSxFQUFFLE1BQU07SUFDZEMsSUFBSSxFQUFFVjtFQUNWLENBQUMsQ0FBQztFQUVGLElBQUlXLElBQUk7RUFDUixJQUFJO0lBQ0FBLElBQUksR0FBRyxNQUFNTixRQUFRLENBQUNPLElBQUksQ0FBQyxDQUFDO0VBQ2hDLENBQUMsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7SUFDWmxCLE9BQU8sQ0FBQ2tCLEtBQUssQ0FBQyxtREFBbUQsRUFBRUEsS0FBSyxDQUFDO0VBQzdFO0VBRUEsSUFBSUYsSUFBSSxFQUFFO0lBQ05oQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRWUsSUFBSSxDQUFDRyxPQUFPLEVBQUVILElBQUksQ0FBQ0ksTUFBTSxDQUFDO0lBRXhFWixjQUFjLENBQUNhLFNBQVMsR0FBRyxFQUFFO0lBRTdCLElBQUlMLElBQUksQ0FBQ0csT0FBTyxFQUFFO01BQ2QsTUFBTUcscUJBQXFCLEdBQUduQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztNQUMxRWtCLHFCQUFxQixDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBU0MsR0FBRyxFQUFFO1FBQzFEQSxHQUFHLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BCQyxVQUFVLENBQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztNQUVyQyxDQUFDLENBQUM7SUFFTixDQUFDLE1BQU07TUFDSG5CLGNBQWMsQ0FBQ2EsU0FBUyxHQUFHTCxJQUFJLENBQUNJLE1BQU0sQ0FBQ1EsS0FBSyxJQUFJWixJQUFJLENBQUNJLE1BQU0sQ0FBQ1MsS0FBSztJQUNyRTtFQUNKLENBQUMsTUFBTTtJQUNIN0IsT0FBTyxDQUFDa0IsS0FBSyxDQUFDLHFDQUFxQyxDQUFDO0VBQ3hEO0FBQ0o7QUFHQWhCLGFBQWEsQ0FBQ3FCLGdCQUFnQixDQUFDLFFBQVEsRUFBR08sQ0FBQyxJQUFJO0VBQzNDQSxDQUFDLENBQUNMLGNBQWMsQ0FBQyxDQUFDO0VBQ2xCcEIsTUFBTSxDQUFDRSxNQUFNLENBQUMsT0FBTyxFQUFFSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQzJCLEtBQUssQ0FBQztFQUNwRTFCLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLE9BQU8sRUFBRUosUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMyQixLQUFLLENBQUM7RUFDOUQxQixNQUFNLENBQUNFLE1BQU0sQ0FBQyxVQUFVLEVBQUVKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUMyQixLQUFLLENBQUM7RUFDN0V0QixtQkFBbUIsQ0FBQyxDQUFDO0FBQ3pCLENBQUMsQ0FBQzs7Ozs7Ozs7VUNoREYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvbW9kYWwtcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VibGlwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnYXBwanMnKVxuXG5jb25zdCBmb3JtX3JlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXInKTtcblxubGV0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xucGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgJ2dldF9yZWdpc3Rlcl9mb3JtJylcbmNvbnN0IGVycm9yX3JlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yX3JlZ2lzdGVyJyk7XG5hc3luYyBmdW5jdGlvbiBHZXRGb3JtUmVnaXN0ZXJVc2VyKCkge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwsIHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGJvZHk6IHBhcmFtc1xuICAgIH0pO1xuXG4gICAgbGV0IGRhdGE7XG4gICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSBjb252ZXJzaW9uIGRlIGxhIHLDqXBvbnNlIEpTT04gOicsIGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnRG9ubsOpZXMgcsOpY3Vww6lyw6llcyBwYXIgbGUgSlMgOicsIGRhdGEuc3VjY2VzcywgZGF0YS5lcnJvcnMpO1xuXG4gICAgICAgIGVycm9yX3JlZ2lzdGVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZW5lcl9tb2RhbF9yZWdpc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc19tb2RhbF9yZWdpc3RlcicpO1xuICAgICAgICAgICAgb3BlbmVyX21vZGFsX3JlZ2lzdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgTWljcm9Nb2RhbC5zaG93KCdtb2RhbC1yZWdpc3RlcicpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3JfcmVnaXN0ZXIuaW5uZXJIVE1MID0gZGF0YS5lcnJvcnMubG9naW4gfHwgZGF0YS5lcnJvcnMuZW1haWw7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSw6lwb25zZSBkdSBzZXJ2ZXVyIHZpZGUgb3UgaW52YWxpZGUnKTtcbiAgICB9XG59XG5cblxuZm9ybV9yZWdpc3Rlci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSk9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ2xvZ2luJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lkZW50aWZpYW50JykudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ2VtYWlsJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJykudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ3Bhc3N3b3JkJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZ2lzdGVyX3Bhc3N3b3JkJykudmFsdWUpO1xuICAgIEdldEZvcm1SZWdpc3RlclVzZXIoKTtcbn0pO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4YTY0ZmQwNTRjYzBkN2IwYmY5YVwiKSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZm9ybV9yZWdpc3RlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmFtcyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZXJyb3JfcmVnaXN0ZXIiLCJHZXRGb3JtUmVnaXN0ZXJVc2VyIiwicmVzcG9uc2UiLCJmZXRjaCIsIk1ZU0NSSVBUIiwiYWpheFVybCIsIm1ldGhvZCIsImJvZHkiLCJkYXRhIiwianNvbiIsImVycm9yIiwic3VjY2VzcyIsImVycm9ycyIsImlubmVySFRNTCIsIm9wZW5lcl9tb2RhbF9yZWdpc3RlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsIk1pY3JvTW9kYWwiLCJzaG93IiwibG9naW4iLCJlbWFpbCIsImUiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=