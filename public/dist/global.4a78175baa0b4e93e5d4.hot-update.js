self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/modal-register.js":
/*!****************************************!*\
  !*** ./src/asset/js/modal-register.js ***!
  \****************************************/
/***/ (() => {

console.log('appjs');
const form_register = document.querySelector('#form_register');
const error_register = document.querySelector('#error_register');
const identifiant = document.querySelector('#identifiant');
const passwordInput = document.querySelector('#register_password');
let params = new FormData();

// Gestion du formualaire de connexion
form_register.addEventListener('submit', function (evt) {
  evt.preventDefault();
  params.append('action', 'get_register_user');
  params.append('identifiant', identifiant.value);
  params.append('password', passwordInput.value);
  GetFormRegisterUser();
});
async function GetFormRegisterUser() {
  let response = await fetch(MYSCRIPT.ajaxUrl, {
    method: 'post',
    body: params
  });
  let data = await response.json();
  error_register.innerHTML = '';
  if (data.success) {
    // window.location.href = MYSCRIPT.home
  } else {
    error_register.innerHTML = data.errors.login;
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0189d9f65a594e73242f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjRhNzgxNzViYWEwYjRlOTNlNWQ0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBRXBCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOUQsTUFBTUMsY0FBYyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztBQUNoRSxNQUFNRSxXQUFXLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUMxRCxNQUFNRyxhQUFhLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0FBRWxFLElBQUlJLE1BQU0sR0FBRyxJQUFJQyxRQUFRLENBQUMsQ0FBQzs7QUFFM0I7QUFDQVAsYUFBYSxDQUFDUSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBU0MsR0FBRyxFQUFFO0VBQ25EQSxHQUFHLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBQ3BCSixNQUFNLENBQUNLLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7RUFDNUNMLE1BQU0sQ0FBQ0ssTUFBTSxDQUFDLGFBQWEsRUFBRVAsV0FBVyxDQUFDUSxLQUFLLENBQUM7RUFDL0NOLE1BQU0sQ0FBQ0ssTUFBTSxDQUFDLFVBQVUsRUFBRU4sYUFBYSxDQUFDTyxLQUFLLENBQUM7RUFDOUNDLG1CQUFtQixDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBRUYsZUFBZUEsbUJBQW1CQSxDQUFBLEVBQUc7RUFDakMsSUFBSUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRUMsUUFBUSxDQUFDQyxPQUFPLEVBQUM7SUFDekNDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLElBQUksRUFBRWI7RUFDVixDQUFDLENBQUM7RUFDRixJQUFJYyxJQUFJLEdBQUcsTUFBTU4sUUFBUSxDQUFDTyxJQUFJLENBQUMsQ0FBQztFQUNoQ2xCLGNBQWMsQ0FBQ21CLFNBQVMsR0FBRyxFQUFFO0VBQzdCLElBQUdGLElBQUksQ0FBQ0csT0FBTyxFQUFFO0lBQ2I7RUFBQSxDQUNILE1BQU07SUFDSHBCLGNBQWMsQ0FBQ21CLFNBQVMsR0FBR0YsSUFBSSxDQUFDSSxNQUFNLENBQUNDLEtBQUs7RUFDaEQ7QUFFSjs7Ozs7Ozs7VUMvQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvbW9kYWwtcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VibGlwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnYXBwanMnKVxuXG5jb25zdCBmb3JtX3JlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXInKTtcbmNvbnN0IGVycm9yX3JlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yX3JlZ2lzdGVyJyk7XG5jb25zdCBpZGVudGlmaWFudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpZGVudGlmaWFudCcpO1xuY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWdpc3Rlcl9wYXNzd29yZCcpO1xuXG5sZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cbi8vIEdlc3Rpb24gZHUgZm9ybXVhbGFpcmUgZGUgY29ubmV4aW9uXG5mb3JtX3JlZ2lzdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ2FjdGlvbicsICdnZXRfcmVnaXN0ZXJfdXNlcicpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ2lkZW50aWZpYW50JywgaWRlbnRpZmlhbnQudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ3Bhc3N3b3JkJywgcGFzc3dvcmRJbnB1dC52YWx1ZSk7XG4gICAgR2V0Rm9ybVJlZ2lzdGVyVXNlcigpO1xufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIEdldEZvcm1SZWdpc3RlclVzZXIoKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goIE1ZU0NSSVBULmFqYXhVcmwse1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgYm9keTogcGFyYW1zXG4gICAgfSk7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgZXJyb3JfcmVnaXN0ZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgaWYoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gTVlTQ1JJUFQuaG9tZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yX3JlZ2lzdGVyLmlubmVySFRNTCA9IGRhdGEuZXJyb3JzLmxvZ2luO1xuICAgIH1cblxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDE4OWQ5ZjY1YTU5NGU3MzI0MmZcIikiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImZvcm1fcmVnaXN0ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlcnJvcl9yZWdpc3RlciIsImlkZW50aWZpYW50IiwicGFzc3dvcmRJbnB1dCIsInBhcmFtcyIsIkZvcm1EYXRhIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiYXBwZW5kIiwidmFsdWUiLCJHZXRGb3JtUmVnaXN0ZXJVc2VyIiwicmVzcG9uc2UiLCJmZXRjaCIsIk1ZU0NSSVBUIiwiYWpheFVybCIsIm1ldGhvZCIsImJvZHkiLCJkYXRhIiwianNvbiIsImlubmVySFRNTCIsInN1Y2Nlc3MiLCJlcnJvcnMiLCJsb2dpbiJdLCJzb3VyY2VSb290IjoiIn0=