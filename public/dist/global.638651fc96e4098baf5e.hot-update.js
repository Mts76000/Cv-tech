self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/modal.js":
/*!*******************************!*\
  !*** ./src/asset/js/modal.js ***!
  \*******************************/
/***/ (() => {

//
// const form_login = document.querySelector('#form_login');
// const error_login = document.querySelector('#error_login');
// const loginInput = document.querySelector('#login');
// const passwordInput = document.querySelector('#password');
//
// // Modal
// MicroModal.init();
// const opener_modal_login = document.querySelector('#js_modal_login');
// opener_modal_login.addEventListener('click', function(evt) {
//     evt.preventDefault();
//     MicroModal.show('modal-login');
//
// });
//
// // Gestion du formualaire de connexion
// form_login.addEventListener('submit', function(evt) {
//     evt.preventDefault();
//     GetFormLoginUser();
//
// });
//
// async function GetFormLoginUser() {
//     let params = new FormData();
//     params.append('action', 'get_login_user');
//     params.append('login', loginInput.value);
//     params.append('password', passwordInput.value);
//     const response = await fetch( MYSCRIPT.ajaxUrl,{
//         method: 'post',
//         body: params
//     });
//      const data = await response.json();
//     console.log(data);
//     error_login.innerHTML = '';
//     if(data.success) {
//         window.location.href = MYSCRIPT.home
//     } else {
//         error_login.innerHTML = data.errors.login;
//     }
//
// }
//
//
//
//
// // Modal register
//
// const opener_modal_register = document.querySelector('#js_modal_register');
// opener_modal_register.addEventListener('click', function(evt) {
//     evt.preventDefault();
//     MicroModal.show('modal-register');
//
// });

// modal profil

const opener_profil = document.querySelector('#modal_test');
opener_profil.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('test');
  MicroModal.show('modal-test');
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("279d6a5bafc78f077bd1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjYzODY1MWZjOTZlNDA5OGJhZjVlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE1BQU1BLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0FBQzNERixhQUFhLENBQUNHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFTQyxHQUFHLEVBQUU7RUFDbERBLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDcEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUNuQkMsVUFBVSxDQUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDO0FBRWpDLENBQUMsQ0FBQzs7Ozs7Ozs7VUM5REYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vd2VibGlwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy8gY29uc3QgZm9ybV9sb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX2xvZ2luJyk7XG4vLyBjb25zdCBlcnJvcl9sb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcl9sb2dpbicpO1xuLy8gY29uc3QgbG9naW5JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbicpO1xuLy8gY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZCcpO1xuLy9cbi8vIC8vIE1vZGFsXG4vLyBNaWNyb01vZGFsLmluaXQoKTtcbi8vIGNvbnN0IG9wZW5lcl9tb2RhbF9sb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc19tb2RhbF9sb2dpbicpO1xuLy8gb3BlbmVyX21vZGFsX2xvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG4vLyAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgTWljcm9Nb2RhbC5zaG93KCdtb2RhbC1sb2dpbicpO1xuLy9cbi8vIH0pO1xuLy9cbi8vIC8vIEdlc3Rpb24gZHUgZm9ybXVhbGFpcmUgZGUgY29ubmV4aW9uXG4vLyBmb3JtX2xvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2dCkge1xuLy8gICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIEdldEZvcm1Mb2dpblVzZXIoKTtcbi8vXG4vLyB9KTtcbi8vXG4vLyBhc3luYyBmdW5jdGlvbiBHZXRGb3JtTG9naW5Vc2VyKCkge1xuLy8gICAgIGxldCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcbi8vICAgICBwYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAnZ2V0X2xvZ2luX3VzZXInKTtcbi8vICAgICBwYXJhbXMuYXBwZW5kKCdsb2dpbicsIGxvZ2luSW5wdXQudmFsdWUpO1xuLy8gICAgIHBhcmFtcy5hcHBlbmQoJ3Bhc3N3b3JkJywgcGFzc3dvcmRJbnB1dC52YWx1ZSk7XG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCggTVlTQ1JJUFQuYWpheFVybCx7XG4vLyAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuLy8gICAgICAgICBib2R5OiBwYXJhbXNcbi8vICAgICB9KTtcbi8vICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICBlcnJvcl9sb2dpbi5pbm5lckhUTUwgPSAnJztcbi8vICAgICBpZihkYXRhLnN1Y2Nlc3MpIHtcbi8vICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBNWVNDUklQVC5ob21lXG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgZXJyb3JfbG9naW4uaW5uZXJIVE1MID0gZGF0YS5lcnJvcnMubG9naW47XG4vLyAgICAgfVxuLy9cbi8vIH1cbi8vXG4vL1xuLy9cbi8vXG4vLyAvLyBNb2RhbCByZWdpc3RlclxuLy9cbi8vIGNvbnN0IG9wZW5lcl9tb2RhbF9yZWdpc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc19tb2RhbF9yZWdpc3RlcicpO1xuLy8gb3BlbmVyX21vZGFsX3JlZ2lzdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG4vLyAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgTWljcm9Nb2RhbC5zaG93KCdtb2RhbC1yZWdpc3RlcicpO1xuLy9cbi8vIH0pO1xuXG4vLyBtb2RhbCBwcm9maWxcblxuY29uc3Qgb3BlbmVyX3Byb2ZpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbF90ZXN0Jyk7XG5vcGVuZXJfcHJvZmlsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKVxuICAgIE1pY3JvTW9kYWwuc2hvdygnbW9kYWwtdGVzdCcpO1xuXG59KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyNzlkNmE1YmFmYzc4ZjA3N2JkMVwiKSJdLCJuYW1lcyI6WyJvcGVuZXJfcHJvZmlsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIk1pY3JvTW9kYWwiLCJzaG93Il0sInNvdXJjZVJvb3QiOiIifQ==