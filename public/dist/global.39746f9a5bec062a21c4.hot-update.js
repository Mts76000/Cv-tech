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
  get_Register_Data(params);
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
/******/ 	__webpack_require__.h = () => ("4577bdc9292566d11048")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjM5NzQ2ZjlhNWJlYzA2MmEyMWM0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBQzVCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOUQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDckQsTUFBTUUsSUFBSSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFDN0MsTUFBTUcsUUFBUSxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDcEQsTUFBTUksV0FBVyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztBQUU3REYsYUFBYSxDQUFDTyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBVUMsQ0FBQyxFQUFFO0VBQ2xEQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDOztFQUVsQjtFQUNBLElBQUlDLE1BQU0sR0FBRyxJQUFJQyxRQUFRLENBQUNYLGFBQWEsQ0FBQztFQUN4Q1UsTUFBTSxDQUFDRSxNQUFNLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDO0VBRTVDQyxpQkFBaUIsQ0FBQ0gsTUFBTSxDQUFDO0FBQzdCLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3BEQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9tb2RhbC1yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdvayBjb250YWN0ISEhJylcbmNvbnN0IGZvcm1fcmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlcicpO1xuY29uc3QgcHNldWRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lkZW50aWZpYW50Jyk7XG5jb25zdCBtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJyk7XG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZCcpO1xuY29uc3QgcHNldWRvRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3JfcmVnaXN0ZXInKTtcblxuZm9ybV9yZWdpc3Rlci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIENyw6lleiB1biBub3V2ZWwgb2JqZXQgRm9ybURhdGEgw6AgbCdpbnTDqXJpZXVyIGRlIGxhIGZvbmN0aW9uIHN1Ym1pdFxuICAgIGxldCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybV9yZWdpc3Rlcik7XG4gICAgcGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgJ2dldF9yZWdpc3Rlcl9mb3JtJyk7XG5cbiAgICBnZXRfUmVnaXN0ZXJfRGF0YShwYXJhbXMpO1xufSk7XG4vL1xuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0X1JlZ2lzdGVyX0RhdGEocGFyYW1zKSB7XG4vLyAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goTVlTQ1JJUFQuYWpheFVybCwge1xuLy8gICAgICAgICBtZXRob2Q6ICdwb3N0Jyxcbi8vICAgICAgICAgYm9keTogcGFyYW1zLFxuLy8gICAgIH0pO1xuLy8gICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy9cbi8vICAgICAvLyBwc2V1ZG9FcnJvci5pbm5lclRleHQgPSBkYXRhLmVycm9yc1snbG9naW4nXTsgLy8gVXRpbGlzZXogJ2xvZ2luJyBhdSBsaWV1IGRlICdwc2V1ZG8nXG4vLyAgICAgLy9cbi8vICAgICAvLyBtYWlsRXJyb3IuaW5uZXJUZXh0ID0gZGF0YS5lcnJvcnNbJ21haWwnXTtcbi8vXG4vLyAgICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkgeyAvLyBDaGFuZ2V6ICd0cnVlJyDDoCB0cnVlXG4vLyAgICAgICAgIGZvcm1fcmVnaXN0ZXIuaW5uZXJIVE1MID0gXCI8aDE+U3VwZXIgISE8L2gxPlwiOyAvLyBVdGlsaXNleiBmb3JtX3JlZ2lzdGVyLmlubmVySFRNTCBhdSBsaWV1IGRlIGZvcm1Db250YWN0LmlubmVySFRNTFxuLy8gICAgIH1cbi8vIH1cbi8vXG4vLyBhc3luYyBmdW5jdGlvbiBnZXRSZWdpc3RlckRhdGEoKXtcbi8vICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChNWVNDUklQVC5hamF4VXJsLHtcbi8vICAgICAgICAgbWV0aG9kIDogJ3Bvc3QnLFxuLy8gICAgICAgICBib2R5OiBwYXJhbXMsXG4vLyAgICAgfSk7XG4vLyAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vL1xuLy8gICAgIC8vIHBzZXVkb0Vycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydwc2V1ZG8nXTtcbi8vICAgICAvL1xuLy8gICAgIC8vIG1haWxFcnJvci5pbm5lclRleHQgPSBkYXRhLmVycm9yc1snbWFpbCddO1xuLy9cbi8vICAgICAvLyBwYXNzd29yZEVycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydtZXNzYWdlJ107XG4vL1xuLy8gICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09ICd0cnVlJykge1xuLy8gICAgICAgICBmb3JtX3JlZ2lzdGVyLmlubmVySFRNTCA9IFwiPGgxPlN1cGVyICEhPC9oMT5cIjtcbi8vICAgICB9XG4vL1xuLy8gfVxuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ1NzdiZGM5MjkyNTY2ZDExMDQ4XCIpIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJmb3JtX3JlZ2lzdGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHNldWRvIiwibWFpbCIsInBhc3N3b3JkIiwicHNldWRvRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFyYW1zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJnZXRfUmVnaXN0ZXJfRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=