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
      opener_modal_register.addEventListener('click', function (evt) {
        evt.preventDefault();
        MicroModal.close('modal-register');
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
/******/ 	__webpack_require__.h = () => ("6341bf2a99e8e07e50a8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjhlZmQzNjdjNTVjNTc2OTk0ZDI5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBRXBCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFFOUQsSUFBSUMsTUFBTSxHQUFHLElBQUlDLFFBQVEsQ0FBQyxDQUFDO0FBQzNCRCxNQUFNLENBQUNFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7QUFDNUMsTUFBTUMsY0FBYyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztBQUNoRSxlQUFlSyxtQkFBbUJBLENBQUEsRUFBRztFQUNqQyxJQUFJQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sRUFBRTtJQUN6Q0MsTUFBTSxFQUFFLE1BQU07SUFDZEMsSUFBSSxFQUFFVjtFQUNWLENBQUMsQ0FBQztFQUVGLElBQUlXLElBQUk7RUFDUixJQUFJO0lBQ0FBLElBQUksR0FBRyxNQUFNTixRQUFRLENBQUNPLElBQUksQ0FBQyxDQUFDO0VBQ2hDLENBQUMsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7SUFDWmxCLE9BQU8sQ0FBQ2tCLEtBQUssQ0FBQyxtREFBbUQsRUFBRUEsS0FBSyxDQUFDO0VBQzdFO0VBRUEsSUFBSUYsSUFBSSxFQUFFO0lBQ05oQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRWUsSUFBSSxDQUFDRyxPQUFPLEVBQUVILElBQUksQ0FBQ0ksTUFBTSxDQUFDO0lBRXhFWixjQUFjLENBQUNhLFNBQVMsR0FBRyxFQUFFO0lBRTdCLElBQUlMLElBQUksQ0FBQ0csT0FBTyxFQUFFO01BQ2RHLHFCQUFxQixDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBU0MsR0FBRyxFQUFFO1FBQzFEQSxHQUFHLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BCQyxVQUFVLENBQUNDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztNQUV0QyxDQUFDLENBQUM7SUFFTixDQUFDLE1BQU07TUFDSG5CLGNBQWMsQ0FBQ2EsU0FBUyxHQUFHTCxJQUFJLENBQUNJLE1BQU0sQ0FBQ1EsS0FBSyxJQUFJWixJQUFJLENBQUNJLE1BQU0sQ0FBQ1MsS0FBSztJQUNyRTtFQUNKLENBQUMsTUFBTTtJQUNIN0IsT0FBTyxDQUFDa0IsS0FBSyxDQUFDLHFDQUFxQyxDQUFDO0VBQ3hEO0FBQ0o7QUFHQWhCLGFBQWEsQ0FBQ3FCLGdCQUFnQixDQUFDLFFBQVEsRUFBR08sQ0FBQyxJQUFJO0VBQzNDQSxDQUFDLENBQUNMLGNBQWMsQ0FBQyxDQUFDO0VBQ2xCcEIsTUFBTSxDQUFDRSxNQUFNLENBQUMsT0FBTyxFQUFFSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQzJCLEtBQUssQ0FBQztFQUNwRTFCLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLE9BQU8sRUFBRUosUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMyQixLQUFLLENBQUM7RUFDOUQxQixNQUFNLENBQUNFLE1BQU0sQ0FBQyxVQUFVLEVBQUVKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUMyQixLQUFLLENBQUM7RUFDN0V0QixtQkFBbUIsQ0FBQyxDQUFDO0FBQ3pCLENBQUMsQ0FBQzs7Ozs7Ozs7VUMvQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvbW9kYWwtcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VibGlwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnYXBwanMnKVxuXG5jb25zdCBmb3JtX3JlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXInKTtcblxubGV0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xucGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgJ2dldF9yZWdpc3Rlcl9mb3JtJylcbmNvbnN0IGVycm9yX3JlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yX3JlZ2lzdGVyJyk7XG5hc3luYyBmdW5jdGlvbiBHZXRGb3JtUmVnaXN0ZXJVc2VyKCkge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwsIHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGJvZHk6IHBhcmFtc1xuICAgIH0pO1xuXG4gICAgbGV0IGRhdGE7XG4gICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSBjb252ZXJzaW9uIGRlIGxhIHLDqXBvbnNlIEpTT04gOicsIGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnRG9ubsOpZXMgcsOpY3Vww6lyw6llcyBwYXIgbGUgSlMgOicsIGRhdGEuc3VjY2VzcywgZGF0YS5lcnJvcnMpO1xuXG4gICAgICAgIGVycm9yX3JlZ2lzdGVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIG9wZW5lcl9tb2RhbF9yZWdpc3Rlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIE1pY3JvTW9kYWwuY2xvc2UoJ21vZGFsLXJlZ2lzdGVyJyk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcl9yZWdpc3Rlci5pbm5lckhUTUwgPSBkYXRhLmVycm9ycy5sb2dpbiB8fCBkYXRhLmVycm9ycy5lbWFpbDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1LDqXBvbnNlIGR1IHNlcnZldXIgdmlkZSBvdSBpbnZhbGlkZScpO1xuICAgIH1cbn1cblxuXG5mb3JtX3JlZ2lzdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcGFyYW1zLmFwcGVuZCgnbG9naW4nLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaWRlbnRpZmlhbnQnKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnZW1haWwnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgncGFzc3dvcmQnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVnaXN0ZXJfcGFzc3dvcmQnKS52YWx1ZSk7XG4gICAgR2V0Rm9ybVJlZ2lzdGVyVXNlcigpO1xufSk7XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjYzNDFiZjJhOTllOGUwN2U1MGE4XCIpIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJmb3JtX3JlZ2lzdGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyYW1zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJlcnJvcl9yZWdpc3RlciIsIkdldEZvcm1SZWdpc3RlclVzZXIiLCJyZXNwb25zZSIsImZldGNoIiwiTVlTQ1JJUFQiLCJhamF4VXJsIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJzdWNjZXNzIiwiZXJyb3JzIiwiaW5uZXJIVE1MIiwib3BlbmVyX21vZGFsX3JlZ2lzdGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiTWljcm9Nb2RhbCIsImNsb3NlIiwibG9naW4iLCJlbWFpbCIsImUiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=