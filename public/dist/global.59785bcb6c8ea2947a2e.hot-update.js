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
//
form_register.addEventListener('submit', function (e) {
  e.preventDefault();
  params.append('pseudo', pseudo.value);
  params.append('mail', mail.value);
  params.append('password', password.value);
  console.log('ok');
  // Créez un nouvel objet FormData à l'intérieur de la fonction submit
  // let params = new FormData(form_register);
  // params.append('action', 'get_register_form');
  //
  // get_Register_Data(params);
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
/******/ 	__webpack_require__.h = () => ("8173ef378f58636f252e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjU5Nzg1YmNiNmM4ZWEyOTQ3YTJlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBQzVCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOUQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDckQsTUFBTUUsSUFBSSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFDN0MsTUFBTUcsUUFBUSxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDcEQsTUFBTUksV0FBVyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztBQUM3RDtBQUNBRixhQUFhLENBQUNPLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFVQyxDQUFDLEVBQUU7RUFDbERBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFFbEJDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsRUFBRVIsTUFBTSxDQUFDUyxLQUFLLENBQUM7RUFDckNGLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sRUFBRVAsSUFBSSxDQUFDUSxLQUFLLENBQUM7RUFDakNGLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLFVBQVUsRUFBRU4sUUFBUSxDQUFDTyxLQUFLLENBQUM7RUFDekNkLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztFQUNqQjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0osQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDeERBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2Fzc2V0L2pzL21vZGFsLXJlZ2lzdGVyLmpzIiwid2VicGFjazovL3dlYmxpcGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ29rIGNvbnRhY3QhISEnKVxuY29uc3QgZm9ybV9yZWdpc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyJyk7XG5jb25zdCBwc2V1ZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaWRlbnRpZmlhbnQnKTtcbmNvbnN0IG1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKTtcbmNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJyk7XG5jb25zdCBwc2V1ZG9FcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcl9yZWdpc3RlcicpO1xuLy9cbmZvcm1fcmVnaXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBwYXJhbXMuYXBwZW5kKCdwc2V1ZG8nLCBwc2V1ZG8udmFsdWUpXG4gICAgcGFyYW1zLmFwcGVuZCgnbWFpbCcsIG1haWwudmFsdWUpXG4gICAgcGFyYW1zLmFwcGVuZCgncGFzc3dvcmQnLCBwYXNzd29yZC52YWx1ZSlcbiAgICBjb25zb2xlLmxvZygnb2snKTtcbiAgICAvLyBDcsOpZXogdW4gbm91dmVsIG9iamV0IEZvcm1EYXRhIMOgIGwnaW50w6lyaWV1ciBkZSBsYSBmb25jdGlvbiBzdWJtaXRcbiAgICAvLyBsZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1fcmVnaXN0ZXIpO1xuICAgIC8vIHBhcmFtcy5hcHBlbmQoJ2FjdGlvbicsICdnZXRfcmVnaXN0ZXJfZm9ybScpO1xuICAgIC8vXG4gICAgLy8gZ2V0X1JlZ2lzdGVyX0RhdGEocGFyYW1zKTtcbn0pO1xuLy9cbi8vIGFzeW5jIGZ1bmN0aW9uIGdldF9SZWdpc3Rlcl9EYXRhKHBhcmFtcykge1xuLy8gICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwsIHtcbi8vICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4vLyAgICAgICAgIGJvZHk6IHBhcmFtcyxcbi8vICAgICB9KTtcbi8vICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vXG4vLyAgICAgLy8gcHNldWRvRXJyb3IuaW5uZXJUZXh0ID0gZGF0YS5lcnJvcnNbJ2xvZ2luJ107IC8vIFV0aWxpc2V6ICdsb2dpbicgYXUgbGlldSBkZSAncHNldWRvJ1xuLy8gICAgIC8vXG4vLyAgICAgLy8gbWFpbEVycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydtYWlsJ107XG4vL1xuLy8gICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09IHRydWUpIHsgLy8gQ2hhbmdleiAndHJ1ZScgw6AgdHJ1ZVxuLy8gICAgICAgICBmb3JtX3JlZ2lzdGVyLmlubmVySFRNTCA9IFwiPGgxPlN1cGVyICEhPC9oMT5cIjsgLy8gVXRpbGlzZXogZm9ybV9yZWdpc3Rlci5pbm5lckhUTUwgYXUgbGlldSBkZSBmb3JtQ29udGFjdC5pbm5lckhUTUxcbi8vICAgICB9XG4vLyB9XG4vL1xuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0UmVnaXN0ZXJEYXRhKCl7XG4vLyAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goTVlTQ1JJUFQuYWpheFVybCx7XG4vLyAgICAgICAgIG1ldGhvZCA6ICdwb3N0Jyxcbi8vICAgICAgICAgYm9keTogcGFyYW1zLFxuLy8gICAgIH0pO1xuLy8gICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy9cbi8vICAgICAvLyBwc2V1ZG9FcnJvci5pbm5lclRleHQgPSBkYXRhLmVycm9yc1sncHNldWRvJ107XG4vLyAgICAgLy9cbi8vICAgICAvLyBtYWlsRXJyb3IuaW5uZXJUZXh0ID0gZGF0YS5lcnJvcnNbJ21haWwnXTtcbi8vXG4vLyAgICAgLy8gcGFzc3dvcmRFcnJvci5pbm5lclRleHQgPSBkYXRhLmVycm9yc1snbWVzc2FnZSddO1xuLy9cbi8vICAgICBpZiAoZGF0YS5zdWNjZXNzID09PSAndHJ1ZScpIHtcbi8vICAgICAgICAgZm9ybV9yZWdpc3Rlci5pbm5lckhUTUwgPSBcIjxoMT5TdXBlciAhITwvaDE+XCI7XG4vLyAgICAgfVxuLy9cbi8vIH1cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4MTczZWYzNzhmNTg2MzZmMjUyZVwiKSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZm9ybV9yZWdpc3RlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBzZXVkbyIsIm1haWwiLCJwYXNzd29yZCIsInBzZXVkb0Vycm9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmFtcyIsImFwcGVuZCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==