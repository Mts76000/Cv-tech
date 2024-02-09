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
  GetFormRegisterUser();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7216237c396480583c99")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjQ4NTM5ZTBlMzNjY2FkODk3OTM5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBRXBCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFFOUQsSUFBSUMsTUFBTSxHQUFHLElBQUlDLFFBQVEsQ0FBQyxDQUFDO0FBQzNCRCxNQUFNLENBQUNFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7QUFFNUMsZUFBZUMsbUJBQW1CQSxDQUFBLEVBQUc7RUFDakMsSUFBSUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRUMsUUFBUSxDQUFDQyxPQUFPLEVBQUM7SUFDekNDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLElBQUksRUFBRVQ7RUFDVixDQUFDLENBQUM7RUFDRixJQUFJVSxJQUFJLEdBQUcsTUFBTU4sUUFBUSxDQUFDTyxJQUFJLENBQUMsQ0FBQztFQUVoQ2hCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdDQUFnQyxFQUFFYyxJQUFJLENBQUNFLE9BQU8sRUFBRUYsSUFBSSxDQUFDRyxNQUFNLENBQUM7RUFFeEVDLGNBQWMsQ0FBQ0MsU0FBUyxHQUFHLEVBQUU7RUFDN0IsSUFBR0wsSUFBSSxDQUFDRSxPQUFPLEVBQUU7SUFDYjtFQUFBLENBQ0gsTUFBTTtJQUNIRSxjQUFjLENBQUNDLFNBQVMsR0FBR0wsSUFBSSxDQUFDRSxPQUFPO0VBQzNDO0FBRUo7QUFFQWYsYUFBYSxDQUFDbUIsZ0JBQWdCLENBQUMsUUFBUSxFQUFHQyxDQUFDLElBQUk7RUFDM0NBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDbEJmLG1CQUFtQixDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDOzs7Ozs7OztVQzVCRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9tb2RhbC1yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdhcHBqcycpXG5cbmNvbnN0IGZvcm1fcmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlcicpO1xuXG5sZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5wYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAnZ2V0X3JlZ2lzdGVyX2Zvcm0nKVxuXG5hc3luYyBmdW5jdGlvbiBHZXRGb3JtUmVnaXN0ZXJVc2VyKCkge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCBNWVNDUklQVC5hamF4VXJsLHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGJvZHk6IHBhcmFtc1xuICAgIH0pO1xuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2coJ0Rvbm7DqWVzIHLDqWN1cMOpcsOpZXMgcGFyIGxlIEpTIDonLCBkYXRhLnN1Y2Nlc3MsIGRhdGEuZXJyb3JzKTtcblxuICAgIGVycm9yX3JlZ2lzdGVyLmlubmVySFRNTCA9ICcnO1xuICAgIGlmKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IE1ZU0NSSVBULmhvbWVcbiAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvcl9yZWdpc3Rlci5pbm5lckhUTUwgPSBkYXRhLnN1Y2Nlc3M7XG4gICAgfVxuXG59XG5cbmZvcm1fcmVnaXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBHZXRGb3JtUmVnaXN0ZXJVc2VyKCk7XG59KTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzIxNjIzN2MzOTY0ODA1ODNjOTlcIikiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImZvcm1fcmVnaXN0ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJhbXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkdldEZvcm1SZWdpc3RlclVzZXIiLCJyZXNwb25zZSIsImZldGNoIiwiTVlTQ1JJUFQiLCJhamF4VXJsIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwic3VjY2VzcyIsImVycm9ycyIsImVycm9yX3JlZ2lzdGVyIiwiaW5uZXJIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=