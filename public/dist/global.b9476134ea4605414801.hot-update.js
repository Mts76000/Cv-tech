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
  params.append('pseudo', identifiant.value);
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
/******/ 	__webpack_require__.h = () => ("4a78175baa0b4e93e5d4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmI5NDc2MTM0ZWE0NjA1NDE0ODAxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBRXBCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOUQsTUFBTUMsY0FBYyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztBQUNoRSxNQUFNRSxXQUFXLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUMxRCxNQUFNRyxhQUFhLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0FBRWxFLElBQUlJLE1BQU0sR0FBRyxJQUFJQyxRQUFRLENBQUMsQ0FBQzs7QUFFM0I7QUFDQVAsYUFBYSxDQUFDUSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBU0MsR0FBRyxFQUFFO0VBQ25EQSxHQUFHLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBQ3BCSixNQUFNLENBQUNLLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7RUFDNUNMLE1BQU0sQ0FBQ0ssTUFBTSxDQUFDLFFBQVEsRUFBRVAsV0FBVyxDQUFDUSxLQUFLLENBQUM7RUFDMUNOLE1BQU0sQ0FBQ0ssTUFBTSxDQUFDLFVBQVUsRUFBRU4sYUFBYSxDQUFDTyxLQUFLLENBQUM7RUFDOUNDLG1CQUFtQixDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBRUYsZUFBZUEsbUJBQW1CQSxDQUFBLEVBQUc7RUFDakMsSUFBSUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRUMsUUFBUSxDQUFDQyxPQUFPLEVBQUM7SUFDekNDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLElBQUksRUFBRWI7RUFDVixDQUFDLENBQUM7RUFDRixJQUFJYyxJQUFJLEdBQUcsTUFBTU4sUUFBUSxDQUFDTyxJQUFJLENBQUMsQ0FBQztFQUNoQ2xCLGNBQWMsQ0FBQ21CLFNBQVMsR0FBRyxFQUFFO0VBQzdCLElBQUdGLElBQUksQ0FBQ0csT0FBTyxFQUFFO0lBQ2I7RUFBQSxDQUNILE1BQU07SUFDSHBCLGNBQWMsQ0FBQ21CLFNBQVMsR0FBR0YsSUFBSSxDQUFDSSxNQUFNLENBQUNDLEtBQUs7RUFDaEQ7QUFFSjs7Ozs7Ozs7VUMvQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvbW9kYWwtcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VibGlwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnYXBwanMnKVxuXG5jb25zdCBmb3JtX3JlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXInKTtcbmNvbnN0IGVycm9yX3JlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yX3JlZ2lzdGVyJyk7XG5jb25zdCBpZGVudGlmaWFudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpZGVudGlmaWFudCcpO1xuY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWdpc3Rlcl9wYXNzd29yZCcpO1xuXG5sZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cbi8vIEdlc3Rpb24gZHUgZm9ybXVhbGFpcmUgZGUgY29ubmV4aW9uXG5mb3JtX3JlZ2lzdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ2FjdGlvbicsICdnZXRfcmVnaXN0ZXJfdXNlcicpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ3BzZXVkbycsIGlkZW50aWZpYW50LnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdwYXNzd29yZCcsIHBhc3N3b3JkSW5wdXQudmFsdWUpO1xuICAgIEdldEZvcm1SZWdpc3RlclVzZXIoKTtcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBHZXRGb3JtUmVnaXN0ZXJVc2VyKCkge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCBNWVNDUklQVC5hamF4VXJsLHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGJvZHk6IHBhcmFtc1xuICAgIH0pO1xuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGVycm9yX3JlZ2lzdGVyLmlubmVySFRNTCA9ICcnO1xuICAgIGlmKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IE1ZU0NSSVBULmhvbWVcbiAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvcl9yZWdpc3Rlci5pbm5lckhUTUwgPSBkYXRhLmVycm9ycy5sb2dpbjtcbiAgICB9XG5cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjRhNzgxNzViYWEwYjRlOTNlNWQ0XCIpIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJmb3JtX3JlZ2lzdGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZXJyb3JfcmVnaXN0ZXIiLCJpZGVudGlmaWFudCIsInBhc3N3b3JkSW5wdXQiLCJwYXJhbXMiLCJGb3JtRGF0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImFwcGVuZCIsInZhbHVlIiwiR2V0Rm9ybVJlZ2lzdGVyVXNlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJNWVNDUklQVCIsImFqYXhVcmwiLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJpbm5lckhUTUwiLCJzdWNjZXNzIiwiZXJyb3JzIiwibG9naW4iXSwic291cmNlUm9vdCI6IiJ9