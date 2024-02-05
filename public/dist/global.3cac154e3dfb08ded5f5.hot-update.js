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
async function get_Register_Data(params) {
  let response = await fetch(MYSCRIPT.ajaxUrl, {
    method: 'post',
    body: params
  });
  let data = await response.json();
  console.log(data);

  // pseudoError.innerText = data.errors['login']; // Utilisez 'login' au lieu de 'pseudo'
  //
  // mailError.innerText = data.errors['mail'];

  if (data.success === true) {
    // Changez 'true' à true
    form_register.innerHTML = "<h1>Super !!</h1>"; // Utilisez form_register.innerHTML au lieu de formContact.innerHTML
  }
}
async function getRegisterData() {
  let response = await fetch(MYSCRIPT.ajaxUrl, {
    method: 'post',
    body: params
  });
  let data = await response.json();
  console.log(data);

  // pseudoError.innerText = data.errors['pseudo'];
  //
  // mailError.innerText = data.errors['mail'];

  // passwordError.innerText = data.errors['message'];

  if (data.success === 'true') {
    form_register.innerHTML = "<h1>Super !!</h1>";
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cb67b7e1e2e23fcae748")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjNjYWMxNTRlM2RmYjA4ZGVkNWY1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBQzVCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOUQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDckQsTUFBTUUsSUFBSSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFDN0MsTUFBTUcsUUFBUSxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDcEQsTUFBTUksV0FBVyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztBQUU3REYsYUFBYSxDQUFDTyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBVUMsQ0FBQyxFQUFFO0VBQ2xEQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDOztFQUVsQjtFQUNBLElBQUlDLE1BQU0sR0FBRyxJQUFJQyxRQUFRLENBQUNYLGFBQWEsQ0FBQztFQUN4Q1UsTUFBTSxDQUFDRSxNQUFNLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDO0VBRTVDQyxlQUFlLENBQUNILE1BQU0sQ0FBQztBQUMzQixDQUFDLENBQUM7QUFFRixlQUFlSSxpQkFBaUJBLENBQUNKLE1BQU0sRUFBRTtFQUNyQyxJQUFJSyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sRUFBRTtJQUN6Q0MsTUFBTSxFQUFFLE1BQU07SUFDZEMsSUFBSSxFQUFFVjtFQUNWLENBQUMsQ0FBQztFQUNGLElBQUlXLElBQUksR0FBRyxNQUFNTixRQUFRLENBQUNPLElBQUksQ0FBQyxDQUFDO0VBQ2hDeEIsT0FBTyxDQUFDQyxHQUFHLENBQUNzQixJQUFJLENBQUM7O0VBRWpCO0VBQ0E7RUFDQTs7RUFFQSxJQUFJQSxJQUFJLENBQUNFLE9BQU8sS0FBSyxJQUFJLEVBQUU7SUFBRTtJQUN6QnZCLGFBQWEsQ0FBQ3dCLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDO0VBQ25EO0FBQ0o7QUFFQSxlQUFlWCxlQUFlQSxDQUFBLEVBQUU7RUFDNUIsSUFBSUUsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLEVBQUM7SUFDeENDLE1BQU0sRUFBRyxNQUFNO0lBQ2ZDLElBQUksRUFBRVY7RUFDVixDQUFDLENBQUM7RUFDRixJQUFJVyxJQUFJLEdBQUcsTUFBTU4sUUFBUSxDQUFDTyxJQUFJLENBQUMsQ0FBQztFQUNoQ3hCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDc0IsSUFBSSxDQUFDOztFQUVqQjtFQUNBO0VBQ0E7O0VBRUE7O0VBRUEsSUFBSUEsSUFBSSxDQUFDRSxPQUFPLEtBQUssTUFBTSxFQUFFO0lBQ3pCdkIsYUFBYSxDQUFDd0IsU0FBUyxHQUFHLG1CQUFtQjtFQUNqRDtBQUVKOzs7Ozs7OztVQ3BEQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9tb2RhbC1yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdvayBjb250YWN0ISEhJylcbmNvbnN0IGZvcm1fcmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlcicpO1xuY29uc3QgcHNldWRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lkZW50aWZpYW50Jyk7XG5jb25zdCBtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJyk7XG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZCcpO1xuY29uc3QgcHNldWRvRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3JfcmVnaXN0ZXInKTtcblxuZm9ybV9yZWdpc3Rlci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIENyw6lleiB1biBub3V2ZWwgb2JqZXQgRm9ybURhdGEgw6AgbCdpbnTDqXJpZXVyIGRlIGxhIGZvbmN0aW9uIHN1Ym1pdFxuICAgIGxldCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybV9yZWdpc3Rlcik7XG4gICAgcGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgJ2dldF9yZWdpc3Rlcl9mb3JtJyk7XG5cbiAgICBnZXRSZWdpc3RlckRhdGEocGFyYW1zKTtcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRfUmVnaXN0ZXJfRGF0YShwYXJhbXMpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChNWVNDUklQVC5hamF4VXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBib2R5OiBwYXJhbXMsXG4gICAgfSk7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAvLyBwc2V1ZG9FcnJvci5pbm5lclRleHQgPSBkYXRhLmVycm9yc1snbG9naW4nXTsgLy8gVXRpbGlzZXogJ2xvZ2luJyBhdSBsaWV1IGRlICdwc2V1ZG8nXG4gICAgLy9cbiAgICAvLyBtYWlsRXJyb3IuaW5uZXJUZXh0ID0gZGF0YS5lcnJvcnNbJ21haWwnXTtcblxuICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09IHRydWUpIHsgLy8gQ2hhbmdleiAndHJ1ZScgw6AgdHJ1ZVxuICAgICAgICBmb3JtX3JlZ2lzdGVyLmlubmVySFRNTCA9IFwiPGgxPlN1cGVyICEhPC9oMT5cIjsgLy8gVXRpbGlzZXogZm9ybV9yZWdpc3Rlci5pbm5lckhUTUwgYXUgbGlldSBkZSBmb3JtQ29udGFjdC5pbm5lckhUTUxcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFJlZ2lzdGVyRGF0YSgpe1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwse1xuICAgICAgICBtZXRob2QgOiAncG9zdCcsXG4gICAgICAgIGJvZHk6IHBhcmFtcyxcbiAgICB9KTtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIC8vIHBzZXVkb0Vycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydwc2V1ZG8nXTtcbiAgICAvL1xuICAgIC8vIG1haWxFcnJvci5pbm5lclRleHQgPSBkYXRhLmVycm9yc1snbWFpbCddO1xuXG4gICAgLy8gcGFzc3dvcmRFcnJvci5pbm5lclRleHQgPSBkYXRhLmVycm9yc1snbWVzc2FnZSddO1xuXG4gICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gJ3RydWUnKSB7XG4gICAgICAgIGZvcm1fcmVnaXN0ZXIuaW5uZXJIVE1MID0gXCI8aDE+U3VwZXIgISE8L2gxPlwiO1xuICAgIH1cblxufVxuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNiNjdiN2UxZTJlMjNmY2FlNzQ4XCIpIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJmb3JtX3JlZ2lzdGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHNldWRvIiwibWFpbCIsInBhc3N3b3JkIiwicHNldWRvRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFyYW1zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJnZXRSZWdpc3RlckRhdGEiLCJnZXRfUmVnaXN0ZXJfRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJNWVNDUklQVCIsImFqYXhVcmwiLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJzdWNjZXNzIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==