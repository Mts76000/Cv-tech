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
/******/ 	__webpack_require__.h = () => ("f843f47630db7e7320cd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjNhYTBjNGM3MmViZTNkMTBkNmMxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBQzVCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOUQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQztBQUNwRSxNQUFNRSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBQzVELE1BQU1HLFFBQVEsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsMEJBQTBCLENBQUM7QUFDbkUsTUFBTUksV0FBVyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQztBQUMzRTtBQUNBRixhQUFhLENBQUNPLGdCQUFnQixDQUFDLFFBQVEsRUFBRUMsQ0FBQyxJQUFJO0VBQzFDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBRWxCQyxNQUFNLEdBQUcsSUFBSUMsUUFBUSxDQUFDWCxhQUFhLENBQUM7RUFDcENVLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQztFQUM1QztFQUNBO0VBQ0E7RUFDQWQsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDOztFQUVqQjtBQUNKLENBQUMsQ0FBQztBQUVGLGVBQWVjLGVBQWVBLENBQUEsRUFBRTtFQUM1QixJQUFJQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sRUFBQztJQUN4Q0MsTUFBTSxFQUFHLE1BQU07SUFDZkMsSUFBSSxFQUFFVDtFQUNWLENBQUMsQ0FBQztFQUNGLElBQUlVLElBQUksR0FBRyxNQUFNTixRQUFRLENBQUNPLElBQUksQ0FBQyxDQUFDO0VBQ2hDdkIsT0FBTyxDQUFDQyxHQUFHLENBQUNxQixJQUFJLENBQUM7RUFHakIsSUFBSUEsSUFBSSxDQUFDRSxPQUFPLEtBQUssTUFBTSxFQUFFO0lBQ3pCdEIsYUFBYSxDQUFDdUIsU0FBUyxHQUFHLG1CQUFtQjtFQUNqRDtBQUVKOzs7Ozs7OztVQ2pDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9tb2RhbC1yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdvayBjb250YWN0ISEhJylcbmNvbnN0IGZvcm1fcmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlcicpO1xuY29uc3QgcHNldWRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXIgI2lkZW50aWZpYW50Jyk7XG5jb25zdCBtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXIgI2VtYWlsJyk7XG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyICNwYXNzd29yZCcpO1xuY29uc3QgcHNldWRvRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlciNlcnJvcl9yZWdpc3RlcicpO1xuLy9cbmZvcm1fcmVnaXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywoZSk9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1fcmVnaXN0ZXIpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ2FjdGlvbicsICdnZXRfcmVnaXN0ZXJfZm9ybScpO1xuICAgIC8vIHBhcmFtcy5hcHBlbmQoJ3BzZXVkbycsIHBzZXVkby52YWx1ZSlcbiAgICAvLyBwYXJhbXMuYXBwZW5kKCdtYWlsJywgbWFpbC52YWx1ZSlcbiAgICAvLyBwYXJhbXMuYXBwZW5kKCdwYXNzd29yZCcsIHBhc3N3b3JkLnZhbHVlKVxuICAgIGNvbnNvbGUubG9nKCdvaycpO1xuXG4gICAgLy8gZ2V0X1JlZ2lzdGVyX0RhdGEocGFyYW1zKTtcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRSZWdpc3RlckRhdGEoKXtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChNWVNDUklQVC5hamF4VXJsLHtcbiAgICAgICAgbWV0aG9kIDogJ3Bvc3QnLFxuICAgICAgICBib2R5OiBwYXJhbXMsXG4gICAgfSk7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cblxuICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09ICd0cnVlJykge1xuICAgICAgICBmb3JtX3JlZ2lzdGVyLmlubmVySFRNTCA9IFwiPGgxPlN1cGVyICEhPC9oMT5cIjtcbiAgICB9XG5cbn1cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmODQzZjQ3NjMwZGI3ZTczMjBjZFwiKSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZm9ybV9yZWdpc3RlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBzZXVkbyIsIm1haWwiLCJwYXNzd29yZCIsInBzZXVkb0Vycm9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmFtcyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZ2V0UmVnaXN0ZXJEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIk1ZU0NSSVBUIiwiYWpheFVybCIsIm1ldGhvZCIsImJvZHkiLCJkYXRhIiwianNvbiIsInN1Y2Nlc3MiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9