self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/modal-register.js":
/*!****************************************!*\
  !*** ./src/asset/js/modal-register.js ***!
  \****************************************/
/***/ (() => {

console.log('ok contact!!!');
const form_register = document.querySelector('#form_register');
const pseudo = document.querySelector('#form_register #identifiant');
const mail = document.querySelector('#form_register #email');
const password = document.querySelector('#form_register #password');
const pseudoError = document.querySelector('#form_register#error_register');
//
form_register.addEventListener('submit', e => {
  e.preventDefault();
  params.append('pseudo', pseudo.value);
  params.append('mail', mail.value);
  params.append('password', password.value);
  console.log('ok');
  let params = new FormData(form_register);
  params.append('action', 'get_register_form');
  get_Register_Data(params);
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
/******/ 	__webpack_require__.h = () => ("620ca8234747a6a1b9e4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjdiNjY3NjgyMWFkMzljNjM3ZDZiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBQzVCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOUQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQztBQUNwRSxNQUFNRSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBQzVELE1BQU1HLFFBQVEsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsMEJBQTBCLENBQUM7QUFDbkUsTUFBTUksV0FBVyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQztBQUMzRTtBQUNBRixhQUFhLENBQUNPLGdCQUFnQixDQUFDLFFBQVEsRUFBRUMsQ0FBQyxJQUFJO0VBQzFDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBRWxCQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxRQUFRLEVBQUVSLE1BQU0sQ0FBQ1MsS0FBSyxDQUFDO0VBQ3JDRixNQUFNLENBQUNDLE1BQU0sQ0FBQyxNQUFNLEVBQUVQLElBQUksQ0FBQ1EsS0FBSyxDQUFDO0VBQ2pDRixNQUFNLENBQUNDLE1BQU0sQ0FBQyxVQUFVLEVBQUVOLFFBQVEsQ0FBQ08sS0FBSyxDQUFDO0VBQ3pDZCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM7RUFFakIsSUFBSVcsTUFBTSxHQUFHLElBQUlHLFFBQVEsQ0FBQ2IsYUFBYSxDQUFDO0VBQ3hDVSxNQUFNLENBQUNDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7RUFFNUNHLGlCQUFpQixDQUFDSixNQUFNLENBQUM7QUFDN0IsQ0FBQyxDQUFDO0FBRUYsZUFBZUksaUJBQWlCQSxDQUFDSixNQUFNLEVBQUU7RUFDckMsSUFBSUssUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLEVBQUU7SUFDekNDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLElBQUksRUFBRVY7RUFDVixDQUFDLENBQUM7RUFDRixJQUFJVyxJQUFJLEdBQUcsTUFBTU4sUUFBUSxDQUFDTyxJQUFJLENBQUMsQ0FBQztFQUNoQ3hCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDc0IsSUFBSSxDQUFDOztFQUVqQjtFQUNBO0VBQ0E7O0VBRUEsSUFBSUEsSUFBSSxDQUFDRSxPQUFPLEtBQUssSUFBSSxFQUFFO0lBQUU7SUFDekJ2QixhQUFhLENBQUN3QixTQUFTLEdBQUcsbUJBQW1CLENBQUMsQ0FBQztFQUNuRDtBQUNKO0FBRUEsZUFBZUMsZUFBZUEsQ0FBQSxFQUFFO0VBQzVCLElBQUlWLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxFQUFDO0lBQ3hDQyxNQUFNLEVBQUcsTUFBTTtJQUNmQyxJQUFJLEVBQUVWO0VBQ1YsQ0FBQyxDQUFDO0VBQ0YsSUFBSVcsSUFBSSxHQUFHLE1BQU1OLFFBQVEsQ0FBQ08sSUFBSSxDQUFDLENBQUM7RUFDaEN4QixPQUFPLENBQUNDLEdBQUcsQ0FBQ3NCLElBQUksQ0FBQzs7RUFFakI7RUFDQTtFQUNBOztFQUVBOztFQUVBLElBQUlBLElBQUksQ0FBQ0UsT0FBTyxLQUFLLE1BQU0sRUFBRTtJQUN6QnZCLGFBQWEsQ0FBQ3dCLFNBQVMsR0FBRyxtQkFBbUI7RUFDakQ7QUFFSjs7Ozs7Ozs7VUN4REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvbW9kYWwtcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VibGlwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnb2sgY29udGFjdCEhIScpXG5jb25zdCBmb3JtX3JlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXInKTtcbmNvbnN0IHBzZXVkbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyICNpZGVudGlmaWFudCcpO1xuY29uc3QgbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyICNlbWFpbCcpO1xuY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlciAjcGFzc3dvcmQnKTtcbmNvbnN0IHBzZXVkb0Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXIjZXJyb3JfcmVnaXN0ZXInKTtcbi8vXG5mb3JtX3JlZ2lzdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKGUpPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHBhcmFtcy5hcHBlbmQoJ3BzZXVkbycsIHBzZXVkby52YWx1ZSlcbiAgICBwYXJhbXMuYXBwZW5kKCdtYWlsJywgbWFpbC52YWx1ZSlcbiAgICBwYXJhbXMuYXBwZW5kKCdwYXNzd29yZCcsIHBhc3N3b3JkLnZhbHVlKVxuICAgIGNvbnNvbGUubG9nKCdvaycpO1xuXG4gICAgbGV0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtX3JlZ2lzdGVyKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAnZ2V0X3JlZ2lzdGVyX2Zvcm0nKTtcblxuICAgIGdldF9SZWdpc3Rlcl9EYXRhKHBhcmFtcyk7XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0X1JlZ2lzdGVyX0RhdGEocGFyYW1zKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goTVlTQ1JJUFQuYWpheFVybCwge1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgYm9keTogcGFyYW1zLFxuICAgIH0pO1xuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgLy8gcHNldWRvRXJyb3IuaW5uZXJUZXh0ID0gZGF0YS5lcnJvcnNbJ2xvZ2luJ107IC8vIFV0aWxpc2V6ICdsb2dpbicgYXUgbGlldSBkZSAncHNldWRvJ1xuICAgIC8vXG4gICAgLy8gbWFpbEVycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydtYWlsJ107XG5cbiAgICBpZiAoZGF0YS5zdWNjZXNzID09PSB0cnVlKSB7IC8vIENoYW5nZXogJ3RydWUnIMOgIHRydWVcbiAgICAgICAgZm9ybV9yZWdpc3Rlci5pbm5lckhUTUwgPSBcIjxoMT5TdXBlciAhITwvaDE+XCI7IC8vIFV0aWxpc2V6IGZvcm1fcmVnaXN0ZXIuaW5uZXJIVE1MIGF1IGxpZXUgZGUgZm9ybUNvbnRhY3QuaW5uZXJIVE1MXG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRSZWdpc3RlckRhdGEoKXtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChNWVNDUklQVC5hamF4VXJsLHtcbiAgICAgICAgbWV0aG9kIDogJ3Bvc3QnLFxuICAgICAgICBib2R5OiBwYXJhbXMsXG4gICAgfSk7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAvLyBwc2V1ZG9FcnJvci5pbm5lclRleHQgPSBkYXRhLmVycm9yc1sncHNldWRvJ107XG4gICAgLy9cbiAgICAvLyBtYWlsRXJyb3IuaW5uZXJUZXh0ID0gZGF0YS5lcnJvcnNbJ21haWwnXTtcblxuICAgIC8vIHBhc3N3b3JkRXJyb3IuaW5uZXJUZXh0ID0gZGF0YS5lcnJvcnNbJ21lc3NhZ2UnXTtcblxuICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09ICd0cnVlJykge1xuICAgICAgICBmb3JtX3JlZ2lzdGVyLmlubmVySFRNTCA9IFwiPGgxPlN1cGVyICEhPC9oMT5cIjtcbiAgICB9XG5cbn1cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2MjBjYTgyMzQ3NDdhNmExYjllNFwiKSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZm9ybV9yZWdpc3RlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBzZXVkbyIsIm1haWwiLCJwYXNzd29yZCIsInBzZXVkb0Vycm9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmFtcyIsImFwcGVuZCIsInZhbHVlIiwiRm9ybURhdGEiLCJnZXRfUmVnaXN0ZXJfRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJNWVNDUklQVCIsImFqYXhVcmwiLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJzdWNjZXNzIiwiaW5uZXJIVE1MIiwiZ2V0UmVnaXN0ZXJEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==