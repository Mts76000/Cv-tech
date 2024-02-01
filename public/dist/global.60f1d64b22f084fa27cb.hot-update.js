self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/modal-register.js":
/*!****************************************!*\
  !*** ./src/asset/js/modal-register.js ***!
  \****************************************/
/***/ (() => {

console.log('ok contact!!!');
const form_register = document.querySelector('#form_register');
const pseudo = document.querySelector('#identifiant');
const mail = document.querySelector('#email');
const password = document.querySelector('#password');
const pseudoError = document.querySelector('#error_register');
form_register.addEventListener('submit', function (e) {
  e.preventDefault();

  // Créez un nouvel objet FormData à l'intérieur de la fonction submit
  let params = new FormData(form_register);
  params.append('action', 'get_register_form');
  getRegisterData(params);
});
//
// async function get_Register_Data(params) {
//     let response = await fetch(MYSCRIPT.ajaxUrl, {
//         method: 'post',
//         body: params,
//     });
//     let data = await response.json();
//     console.log(data);
//
//     // pseudoError.innerText = data.errors['login']; // Utilisez 'login' au lieu de 'pseudo'
//     //
//     // mailError.innerText = data.errors['mail'];
//
//     if (data.success === true) { // Changez 'true' à true
//         form_register.innerHTML = "<h1>Super !!</h1>"; // Utilisez form_register.innerHTML au lieu de formContact.innerHTML
//     }
// }
//
// async function getRegisterData(){
//     let response = await fetch(MYSCRIPT.ajaxUrl,{
//         method : 'post',
//         body: params,
//     });
//     let data = await response.json();
//     console.log(data);
//
//     // pseudoError.innerText = data.errors['pseudo'];
//     //
//     // mailError.innerText = data.errors['mail'];
//
//     // passwordError.innerText = data.errors['message'];
//
//     if (data.success === 'true') {
//         form_register.innerHTML = "<h1>Super !!</h1>";
//     }
//
// }

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("39746f9a5bec062a21c4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjYwZjFkNjRiMjJmMDg0ZmEyN2NiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBQzVCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOUQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDckQsTUFBTUUsSUFBSSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFDN0MsTUFBTUcsUUFBUSxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDcEQsTUFBTUksV0FBVyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztBQUU3REYsYUFBYSxDQUFDTyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBVUMsQ0FBQyxFQUFFO0VBQ2xEQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDOztFQUVsQjtFQUNBLElBQUlDLE1BQU0sR0FBRyxJQUFJQyxRQUFRLENBQUNYLGFBQWEsQ0FBQztFQUN4Q1UsTUFBTSxDQUFDRSxNQUFNLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDO0VBRTVDQyxlQUFlLENBQUNILE1BQU0sQ0FBQztBQUMzQixDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNwREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvbW9kYWwtcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VibGlwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnb2sgY29udGFjdCEhIScpXG5jb25zdCBmb3JtX3JlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXInKTtcbmNvbnN0IHBzZXVkbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpZGVudGlmaWFudCcpO1xuY29uc3QgbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCcpO1xuY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQnKTtcbmNvbnN0IHBzZXVkb0Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yX3JlZ2lzdGVyJyk7XG5cbmZvcm1fcmVnaXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBDcsOpZXogdW4gbm91dmVsIG9iamV0IEZvcm1EYXRhIMOgIGwnaW50w6lyaWV1ciBkZSBsYSBmb25jdGlvbiBzdWJtaXRcbiAgICBsZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1fcmVnaXN0ZXIpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ2FjdGlvbicsICdnZXRfcmVnaXN0ZXJfZm9ybScpO1xuXG4gICAgZ2V0UmVnaXN0ZXJEYXRhKHBhcmFtcyk7XG59KTtcbi8vXG4vLyBhc3luYyBmdW5jdGlvbiBnZXRfUmVnaXN0ZXJfRGF0YShwYXJhbXMpIHtcbi8vICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChNWVNDUklQVC5hamF4VXJsLCB7XG4vLyAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuLy8gICAgICAgICBib2R5OiBwYXJhbXMsXG4vLyAgICAgfSk7XG4vLyAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vL1xuLy8gICAgIC8vIHBzZXVkb0Vycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydsb2dpbiddOyAvLyBVdGlsaXNleiAnbG9naW4nIGF1IGxpZXUgZGUgJ3BzZXVkbydcbi8vICAgICAvL1xuLy8gICAgIC8vIG1haWxFcnJvci5pbm5lclRleHQgPSBkYXRhLmVycm9yc1snbWFpbCddO1xuLy9cbi8vICAgICBpZiAoZGF0YS5zdWNjZXNzID09PSB0cnVlKSB7IC8vIENoYW5nZXogJ3RydWUnIMOgIHRydWVcbi8vICAgICAgICAgZm9ybV9yZWdpc3Rlci5pbm5lckhUTUwgPSBcIjxoMT5TdXBlciAhITwvaDE+XCI7IC8vIFV0aWxpc2V6IGZvcm1fcmVnaXN0ZXIuaW5uZXJIVE1MIGF1IGxpZXUgZGUgZm9ybUNvbnRhY3QuaW5uZXJIVE1MXG4vLyAgICAgfVxuLy8gfVxuLy9cbi8vIGFzeW5jIGZ1bmN0aW9uIGdldFJlZ2lzdGVyRGF0YSgpe1xuLy8gICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwse1xuLy8gICAgICAgICBtZXRob2QgOiAncG9zdCcsXG4vLyAgICAgICAgIGJvZHk6IHBhcmFtcyxcbi8vICAgICB9KTtcbi8vICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vXG4vLyAgICAgLy8gcHNldWRvRXJyb3IuaW5uZXJUZXh0ID0gZGF0YS5lcnJvcnNbJ3BzZXVkbyddO1xuLy8gICAgIC8vXG4vLyAgICAgLy8gbWFpbEVycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydtYWlsJ107XG4vL1xuLy8gICAgIC8vIHBhc3N3b3JkRXJyb3IuaW5uZXJUZXh0ID0gZGF0YS5lcnJvcnNbJ21lc3NhZ2UnXTtcbi8vXG4vLyAgICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gJ3RydWUnKSB7XG4vLyAgICAgICAgIGZvcm1fcmVnaXN0ZXIuaW5uZXJIVE1MID0gXCI8aDE+U3VwZXIgISE8L2gxPlwiO1xuLy8gICAgIH1cbi8vXG4vLyB9XG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzk3NDZmOWE1YmVjMDYyYTIxYzRcIikiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImZvcm1fcmVnaXN0ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwc2V1ZG8iLCJtYWlsIiwicGFzc3dvcmQiLCJwc2V1ZG9FcnJvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXJhbXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsImdldFJlZ2lzdGVyRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=