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
const error_register = document.querySelector('#error_register'); // Ajout de cette ligne
async function GetFormRegisterUser() {
  let response = await fetch(MYSCRIPT.ajaxUrl, {
    method: 'post',
    body: params
  });
  let data = await response.json();
  console.log('Données récupérées par le JS :', data.success, data.errors);
  error_register.innerHTML = '';
  if (data.success) {
    // window.location.href = MYSCRIPT.home
  } else {
    error_register.innerHTML = data.success;
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
/******/ 	__webpack_require__.h = () => ("32ea1ec017c2cf4c44e1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmU1MjNkMTkzYzY5NTYxNmU3NGE0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBRXBCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFFOUQsSUFBSUMsTUFBTSxHQUFHLElBQUlDLFFBQVEsQ0FBQyxDQUFDO0FBQzNCRCxNQUFNLENBQUNFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7QUFDNUMsTUFBTUMsY0FBYyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7QUFDbEUsZUFBZUssbUJBQW1CQSxDQUFBLEVBQUc7RUFDakMsSUFBSUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRUMsUUFBUSxDQUFDQyxPQUFPLEVBQUM7SUFDekNDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLElBQUksRUFBRVY7RUFDVixDQUFDLENBQUM7RUFDRixJQUFJVyxJQUFJLEdBQUcsTUFBTU4sUUFBUSxDQUFDTyxJQUFJLENBQUMsQ0FBQztFQUVoQ2pCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdDQUFnQyxFQUFFZSxJQUFJLENBQUNFLE9BQU8sRUFBRUYsSUFBSSxDQUFDRyxNQUFNLENBQUM7RUFFeEVYLGNBQWMsQ0FBQ1ksU0FBUyxHQUFHLEVBQUU7RUFFN0IsSUFBR0osSUFBSSxDQUFDRSxPQUFPLEVBQUU7SUFDYjtFQUFBLENBQ0gsTUFBTTtJQUNIVixjQUFjLENBQUNZLFNBQVMsR0FBR0osSUFBSSxDQUFDRSxPQUFPO0VBQzNDO0FBRUo7QUFFQWhCLGFBQWEsQ0FBQ21CLGdCQUFnQixDQUFDLFFBQVEsRUFBR0MsQ0FBQyxJQUFJO0VBQzNDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBQ2xCbEIsTUFBTSxDQUFDRSxNQUFNLENBQUMsT0FBTyxFQUFFSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQ29CLEtBQUssQ0FBQztFQUNwRW5CLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLE9BQU8sRUFBRUosUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUNvQixLQUFLLENBQUM7RUFDOURuQixNQUFNLENBQUNFLE1BQU0sQ0FBQyxVQUFVLEVBQUVKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUNvQixLQUFLLENBQUM7RUFDN0VmLG1CQUFtQixDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDOzs7Ozs7OztVQ2hDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9tb2RhbC1yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdhcHBqcycpXG5cbmNvbnN0IGZvcm1fcmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlcicpO1xuXG5sZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5wYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAnZ2V0X3JlZ2lzdGVyX2Zvcm0nKVxuY29uc3QgZXJyb3JfcmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3JfcmVnaXN0ZXInKTsgLy8gQWpvdXQgZGUgY2V0dGUgbGlnbmVcbmFzeW5jIGZ1bmN0aW9uIEdldEZvcm1SZWdpc3RlclVzZXIoKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goIE1ZU0NSSVBULmFqYXhVcmwse1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgYm9keTogcGFyYW1zXG4gICAgfSk7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZygnRG9ubsOpZXMgcsOpY3Vww6lyw6llcyBwYXIgbGUgSlMgOicsIGRhdGEuc3VjY2VzcywgZGF0YS5lcnJvcnMpO1xuXG4gICAgZXJyb3JfcmVnaXN0ZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBpZihkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBNWVNDUklQVC5ob21lXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JfcmVnaXN0ZXIuaW5uZXJIVE1MID0gZGF0YS5zdWNjZXNzO1xuICAgIH1cblxufVxuXG5mb3JtX3JlZ2lzdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcGFyYW1zLmFwcGVuZCgnbG9naW4nLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaWRlbnRpZmlhbnQnKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnZW1haWwnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgncGFzc3dvcmQnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVnaXN0ZXJfcGFzc3dvcmQnKS52YWx1ZSk7XG4gICAgR2V0Rm9ybVJlZ2lzdGVyVXNlcigpO1xufSk7XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjMyZWExZWMwMTdjMmNmNGM0NGUxXCIpIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJmb3JtX3JlZ2lzdGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyYW1zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJlcnJvcl9yZWdpc3RlciIsIkdldEZvcm1SZWdpc3RlclVzZXIiLCJyZXNwb25zZSIsImZldGNoIiwiTVlTQ1JJUFQiLCJhamF4VXJsIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwic3VjY2VzcyIsImVycm9ycyIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=