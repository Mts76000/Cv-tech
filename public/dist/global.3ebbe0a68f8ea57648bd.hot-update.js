self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/modal-register.js":
/*!****************************************!*\
  !*** ./src/asset/js/modal-register.js ***!
  \****************************************/
/***/ (() => {

console.log('appjs');
const form_register = document.querySelector('#form_register');
const error_register = document.querySelector('#error_register');
const login = document.querySelector('#identifiant');
const passwordInput = document.querySelector('#register_password');
let params = new FormData();

// Gestion du formualaire de connexion
form_register.addEventListener('submit', function (evt) {
  evt.preventDefault();
  params.append('action', 'get_register_user');
  params.append('identifiant', login.value);
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
/******/ 	__webpack_require__.h = () => ("fc400369b2ee714f51bd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjNlYmJlMGE2OGY4ZWE1NzY0OGJkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBRXBCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOUQsTUFBTUMsY0FBYyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztBQUNoRSxNQUFNRSxLQUFLLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUNwRCxNQUFNRyxhQUFhLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0FBRWxFLElBQUlJLE1BQU0sR0FBRyxJQUFJQyxRQUFRLENBQUMsQ0FBQzs7QUFFM0I7QUFDQVAsYUFBYSxDQUFDUSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBU0MsR0FBRyxFQUFFO0VBQ25EQSxHQUFHLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBQ3BCSixNQUFNLENBQUNLLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7RUFDNUNMLE1BQU0sQ0FBQ0ssTUFBTSxDQUFDLGFBQWEsRUFBRVAsS0FBSyxDQUFDUSxLQUFLLENBQUM7RUFDekNOLE1BQU0sQ0FBQ0ssTUFBTSxDQUFDLFVBQVUsRUFBRU4sYUFBYSxDQUFDTyxLQUFLLENBQUM7RUFDOUNDLG1CQUFtQixDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBRUYsZUFBZUEsbUJBQW1CQSxDQUFBLEVBQUc7RUFDakMsSUFBSUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRUMsUUFBUSxDQUFDQyxPQUFPLEVBQUM7SUFDekNDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLElBQUksRUFBRWI7RUFDVixDQUFDLENBQUM7RUFDRixJQUFJYyxJQUFJLEdBQUcsTUFBTU4sUUFBUSxDQUFDTyxJQUFJLENBQUMsQ0FBQztFQUNoQ2xCLGNBQWMsQ0FBQ21CLFNBQVMsR0FBRyxFQUFFO0VBQzdCLElBQUdGLElBQUksQ0FBQ0csT0FBTyxFQUFFO0lBQ2I7RUFBQSxDQUNILE1BQU07SUFDSHBCLGNBQWMsQ0FBQ21CLFNBQVMsR0FBR0YsSUFBSSxDQUFDSSxNQUFNLENBQUNwQixLQUFLO0VBQ2hEO0FBRUo7Ozs7Ozs7O1VDL0JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2Fzc2V0L2pzL21vZGFsLXJlZ2lzdGVyLmpzIiwid2VicGFjazovL3dlYmxpcGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ2FwcGpzJylcblxuY29uc3QgZm9ybV9yZWdpc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyJyk7XG5jb25zdCBlcnJvcl9yZWdpc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcl9yZWdpc3RlcicpO1xuY29uc3QgbG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaWRlbnRpZmlhbnQnKTtcbmNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVnaXN0ZXJfcGFzc3dvcmQnKTtcblxubGV0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuXG4vLyBHZXN0aW9uIGR1IGZvcm11YWxhaXJlIGRlIGNvbm5leGlvblxuZm9ybV9yZWdpc3Rlci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAnZ2V0X3JlZ2lzdGVyX3VzZXInKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdpZGVudGlmaWFudCcsIGxvZ2luLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdwYXNzd29yZCcsIHBhc3N3b3JkSW5wdXQudmFsdWUpO1xuICAgIEdldEZvcm1SZWdpc3RlclVzZXIoKTtcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBHZXRGb3JtUmVnaXN0ZXJVc2VyKCkge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCBNWVNDUklQVC5hamF4VXJsLHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGJvZHk6IHBhcmFtc1xuICAgIH0pO1xuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGVycm9yX3JlZ2lzdGVyLmlubmVySFRNTCA9ICcnO1xuICAgIGlmKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IE1ZU0NSSVBULmhvbWVcbiAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvcl9yZWdpc3Rlci5pbm5lckhUTUwgPSBkYXRhLmVycm9ycy5sb2dpbjtcbiAgICB9XG5cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZjNDAwMzY5YjJlZTcxNGY1MWJkXCIpIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJmb3JtX3JlZ2lzdGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZXJyb3JfcmVnaXN0ZXIiLCJsb2dpbiIsInBhc3N3b3JkSW5wdXQiLCJwYXJhbXMiLCJGb3JtRGF0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImFwcGVuZCIsInZhbHVlIiwiR2V0Rm9ybVJlZ2lzdGVyVXNlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJNWVNDUklQVCIsImFqYXhVcmwiLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJpbm5lckhUTUwiLCJzdWNjZXNzIiwiZXJyb3JzIl0sInNvdXJjZVJvb3QiOiIifQ==