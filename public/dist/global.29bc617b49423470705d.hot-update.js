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
  params = new FormData(form_register);
  params.append('action', 'get_register_form');
  // params.append('pseudo', pseudo.value)
  // params.append('mail', mail.value)
  // params.append('password', password.value)
  console.log('ok');

  // get_Register_Data(params);
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
  if (data.success === 'true') {
    form_register.innerHTML = "<h1>Super !!</h1>";
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3aa0c4c72ebe3d10d6c1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjI5YmM2MTdiNDk0MjM0NzA3MDVkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBQzVCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOUQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQztBQUNwRSxNQUFNRSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBQzVELE1BQU1HLFFBQVEsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsMEJBQTBCLENBQUM7QUFDbkUsTUFBTUksV0FBVyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQztBQUMzRTtBQUNBRixhQUFhLENBQUNPLGdCQUFnQixDQUFDLFFBQVEsRUFBRUMsQ0FBQyxJQUFJO0VBQzFDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBRWxCQyxNQUFNLEdBQUcsSUFBSUMsUUFBUSxDQUFDWCxhQUFhLENBQUM7RUFDcENVLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQztFQUM1QztFQUNBO0VBQ0E7RUFDQWQsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDOztFQUVqQjtBQUNKLENBQUMsQ0FBQztBQUVGLGVBQWVjLGlCQUFpQkEsQ0FBQ0gsTUFBTSxFQUFFO0VBQ3JDLElBQUlJLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxFQUFFO0lBQ3pDQyxNQUFNLEVBQUUsTUFBTTtJQUNkQyxJQUFJLEVBQUVUO0VBQ1YsQ0FBQyxDQUFDO0VBQ0YsSUFBSVUsSUFBSSxHQUFHLE1BQU1OLFFBQVEsQ0FBQ08sSUFBSSxDQUFDLENBQUM7RUFDaEN2QixPQUFPLENBQUNDLEdBQUcsQ0FBQ3FCLElBQUksQ0FBQzs7RUFFakI7RUFDQTtFQUNBOztFQUVBLElBQUlBLElBQUksQ0FBQ0UsT0FBTyxLQUFLLElBQUksRUFBRTtJQUFFO0lBQ3pCdEIsYUFBYSxDQUFDdUIsU0FBUyxHQUFHLG1CQUFtQixDQUFDLENBQUM7RUFDbkQ7QUFDSjtBQUVBLGVBQWVDLGVBQWVBLENBQUEsRUFBRTtFQUM1QixJQUFJVixRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sRUFBQztJQUN4Q0MsTUFBTSxFQUFHLE1BQU07SUFDZkMsSUFBSSxFQUFFVDtFQUNWLENBQUMsQ0FBQztFQUNGLElBQUlVLElBQUksR0FBRyxNQUFNTixRQUFRLENBQUNPLElBQUksQ0FBQyxDQUFDO0VBQ2hDdkIsT0FBTyxDQUFDQyxHQUFHLENBQUNxQixJQUFJLENBQUM7RUFHakIsSUFBSUEsSUFBSSxDQUFDRSxPQUFPLEtBQUssTUFBTSxFQUFFO0lBQ3pCdEIsYUFBYSxDQUFDdUIsU0FBUyxHQUFHLG1CQUFtQjtFQUNqRDtBQUVKOzs7Ozs7OztVQ2xEQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9tb2RhbC1yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdvayBjb250YWN0ISEhJylcbmNvbnN0IGZvcm1fcmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlcicpO1xuY29uc3QgcHNldWRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXIgI2lkZW50aWZpYW50Jyk7XG5jb25zdCBtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXIgI2VtYWlsJyk7XG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyICNwYXNzd29yZCcpO1xuY29uc3QgcHNldWRvRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlciNlcnJvcl9yZWdpc3RlcicpO1xuLy9cbmZvcm1fcmVnaXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywoZSk9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1fcmVnaXN0ZXIpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ2FjdGlvbicsICdnZXRfcmVnaXN0ZXJfZm9ybScpO1xuICAgIC8vIHBhcmFtcy5hcHBlbmQoJ3BzZXVkbycsIHBzZXVkby52YWx1ZSlcbiAgICAvLyBwYXJhbXMuYXBwZW5kKCdtYWlsJywgbWFpbC52YWx1ZSlcbiAgICAvLyBwYXJhbXMuYXBwZW5kKCdwYXNzd29yZCcsIHBhc3N3b3JkLnZhbHVlKVxuICAgIGNvbnNvbGUubG9nKCdvaycpO1xuXG4gICAgLy8gZ2V0X1JlZ2lzdGVyX0RhdGEocGFyYW1zKTtcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRfUmVnaXN0ZXJfRGF0YShwYXJhbXMpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChNWVNDUklQVC5hamF4VXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBib2R5OiBwYXJhbXMsXG4gICAgfSk7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAvLyBwc2V1ZG9FcnJvci5pbm5lclRleHQgPSBkYXRhLmVycm9yc1snbG9naW4nXTsgLy8gVXRpbGlzZXogJ2xvZ2luJyBhdSBsaWV1IGRlICdwc2V1ZG8nXG4gICAgLy9cbiAgICAvLyBtYWlsRXJyb3IuaW5uZXJUZXh0ID0gZGF0YS5lcnJvcnNbJ21haWwnXTtcblxuICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09IHRydWUpIHsgLy8gQ2hhbmdleiAndHJ1ZScgw6AgdHJ1ZVxuICAgICAgICBmb3JtX3JlZ2lzdGVyLmlubmVySFRNTCA9IFwiPGgxPlN1cGVyICEhPC9oMT5cIjsgLy8gVXRpbGlzZXogZm9ybV9yZWdpc3Rlci5pbm5lckhUTUwgYXUgbGlldSBkZSBmb3JtQ29udGFjdC5pbm5lckhUTUxcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFJlZ2lzdGVyRGF0YSgpe1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwse1xuICAgICAgICBtZXRob2QgOiAncG9zdCcsXG4gICAgICAgIGJvZHk6IHBhcmFtcyxcbiAgICB9KTtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuXG4gICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gJ3RydWUnKSB7XG4gICAgICAgIGZvcm1fcmVnaXN0ZXIuaW5uZXJIVE1MID0gXCI8aDE+U3VwZXIgISE8L2gxPlwiO1xuICAgIH1cblxufVxuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNhYTBjNGM3MmViZTNkMTBkNmMxXCIpIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJmb3JtX3JlZ2lzdGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHNldWRvIiwibWFpbCIsInBhc3N3b3JkIiwicHNldWRvRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFyYW1zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJnZXRfUmVnaXN0ZXJfRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJNWVNDUklQVCIsImFqYXhVcmwiLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJzdWNjZXNzIiwiaW5uZXJIVE1MIiwiZ2V0UmVnaXN0ZXJEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==