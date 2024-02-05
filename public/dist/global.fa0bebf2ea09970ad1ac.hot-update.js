self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/modal-register.js":
/*!****************************************!*\
  !*** ./src/asset/js/modal-register.js ***!
  \****************************************/
/***/ (() => {

console.log('ok contact!!!');
const form_register = document.querySelector('#form_register');
let params = new FormData(form_register);
params.append('action', 'get_register_form');
form_register.addEventListener('submit', function (e) {
  e.preventDefault();
  params.append('pseudo', pseudo.value);
  params.append('mail', mail.value);
  params.append('password', password.value);
  getContactData();
});
async function getRegisterData() {
  let response = await fetch(MYSCRIPT.ajaxUrl, {
    method: 'post',
    body: params
  });
  let data = await response.json();
  console.log(data);
  pseudoError.innerText = data.errors['pseudo'];
  mailError.innerText = data.errors['mail'];

  // passwordError.innerText = data.errors['message'];

  if (data.success === 'true') {
    formContact.innerHTML = "<h1>Super !!</h1>";
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d1823a28da8731c2e845")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmZhMGJlYmYyZWEwOTk3MGFkMWFjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBRTVCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFFOUQsSUFBSUMsTUFBTSxHQUFHLElBQUlDLFFBQVEsQ0FBQ0osYUFBYSxDQUFDO0FBQ3hDRyxNQUFNLENBQUNFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7QUFHNUNMLGFBQWEsQ0FBQ00sZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVNDLENBQUMsRUFBRTtFQUNqREEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUVsQkwsTUFBTSxDQUFDRSxNQUFNLENBQUMsUUFBUSxFQUFFSSxNQUFNLENBQUNDLEtBQUssQ0FBQztFQUNyQ1AsTUFBTSxDQUFDRSxNQUFNLENBQUMsTUFBTSxFQUFFTSxJQUFJLENBQUNELEtBQUssQ0FBQztFQUNqQ1AsTUFBTSxDQUFDRSxNQUFNLENBQUMsVUFBVSxFQUFFTyxRQUFRLENBQUNGLEtBQUssQ0FBQztFQUl6Q0csY0FBYyxDQUFDLENBQUM7QUFFcEIsQ0FBQyxDQUFDO0FBRUYsZUFBZUMsZUFBZUEsQ0FBQSxFQUFFO0VBQzVCLElBQUlDLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxFQUFDO0lBQ3hDQyxNQUFNLEVBQUcsTUFBTTtJQUNmQyxJQUFJLEVBQUVqQjtFQUNWLENBQUMsQ0FBQztFQUNGLElBQUlrQixJQUFJLEdBQUcsTUFBTU4sUUFBUSxDQUFDTyxJQUFJLENBQUMsQ0FBQztFQUNoQ3hCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDc0IsSUFBSSxDQUFDO0VBRWpCRSxXQUFXLENBQUNDLFNBQVMsR0FBR0gsSUFBSSxDQUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDO0VBRTdDQyxTQUFTLENBQUNGLFNBQVMsR0FBR0gsSUFBSSxDQUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDOztFQUV6Qzs7RUFFQSxJQUFJSixJQUFJLENBQUNNLE9BQU8sS0FBSyxNQUFNLEVBQUU7SUFDekJDLFdBQVcsQ0FBQ0MsU0FBUyxHQUFHLG1CQUFtQjtFQUMvQztBQUVKOzs7Ozs7OztVQ3ZDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9tb2RhbC1yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdvayBjb250YWN0ISEhJylcblxuY29uc3QgZm9ybV9yZWdpc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyJyk7XG5cbmxldCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybV9yZWdpc3Rlcik7XG5wYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAnZ2V0X3JlZ2lzdGVyX2Zvcm0nKVxuXG5cbmZvcm1fcmVnaXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHBhcmFtcy5hcHBlbmQoJ3BzZXVkbycsIHBzZXVkby52YWx1ZSlcbiAgICBwYXJhbXMuYXBwZW5kKCdtYWlsJywgbWFpbC52YWx1ZSlcbiAgICBwYXJhbXMuYXBwZW5kKCdwYXNzd29yZCcsIHBhc3N3b3JkLnZhbHVlKVxuXG5cblxuICAgIGdldENvbnRhY3REYXRhKCk7XG5cbn0pXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFJlZ2lzdGVyRGF0YSgpe1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwse1xuICAgICAgICBtZXRob2QgOiAncG9zdCcsXG4gICAgICAgIGJvZHk6IHBhcmFtcyxcbiAgICB9KTtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIHBzZXVkb0Vycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydwc2V1ZG8nXTtcblxuICAgIG1haWxFcnJvci5pbm5lclRleHQgPSBkYXRhLmVycm9yc1snbWFpbCddO1xuXG4gICAgLy8gcGFzc3dvcmRFcnJvci5pbm5lclRleHQgPSBkYXRhLmVycm9yc1snbWVzc2FnZSddO1xuXG4gICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gJ3RydWUnKSB7XG4gICAgICAgIGZvcm1Db250YWN0LmlubmVySFRNTCA9IFwiPGgxPlN1cGVyICEhPC9oMT5cIjtcbiAgICB9XG5cbn1cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkMTgyM2EyOGRhODczMWMyZTg0NVwiKSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZm9ybV9yZWdpc3RlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmFtcyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBzZXVkbyIsInZhbHVlIiwibWFpbCIsInBhc3N3b3JkIiwiZ2V0Q29udGFjdERhdGEiLCJnZXRSZWdpc3RlckRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiTVlTQ1JJUFQiLCJhamF4VXJsIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwicHNldWRvRXJyb3IiLCJpbm5lclRleHQiLCJlcnJvcnMiLCJtYWlsRXJyb3IiLCJzdWNjZXNzIiwiZm9ybUNvbnRhY3QiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9