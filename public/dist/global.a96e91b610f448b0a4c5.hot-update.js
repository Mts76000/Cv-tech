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
  params.append('login', document.querySelector('#identifiant').value);
  params.append('email', document.querySelector('#email').value);
  params.append('password', document.querySelector('#register_password').value);
  GetFormRegisterUser();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e523d193c695616e74a4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmE5NmU5MWI2MTBmNDQ4YjBhNGM1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBRXBCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFFOUQsSUFBSUMsTUFBTSxHQUFHLElBQUlDLFFBQVEsQ0FBQyxDQUFDO0FBQzNCRCxNQUFNLENBQUNFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7QUFFNUMsZUFBZUMsbUJBQW1CQSxDQUFBLEVBQUc7RUFDakMsSUFBSUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRUMsUUFBUSxDQUFDQyxPQUFPLEVBQUM7SUFDekNDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLElBQUksRUFBRVQ7RUFDVixDQUFDLENBQUM7RUFDRixJQUFJVSxJQUFJLEdBQUcsTUFBTU4sUUFBUSxDQUFDTyxJQUFJLENBQUMsQ0FBQztFQUVoQ2hCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdDQUFnQyxFQUFFYyxJQUFJLENBQUNFLE9BQU8sRUFBRUYsSUFBSSxDQUFDRyxNQUFNLENBQUM7RUFFeEVDLGNBQWMsQ0FBQ0MsU0FBUyxHQUFHLEVBQUU7RUFFN0IsSUFBR0wsSUFBSSxDQUFDRSxPQUFPLEVBQUU7SUFDYjtFQUFBLENBQ0gsTUFBTTtJQUNIRSxjQUFjLENBQUNDLFNBQVMsR0FBR0wsSUFBSSxDQUFDRSxPQUFPO0VBQzNDO0FBRUo7QUFFQWYsYUFBYSxDQUFDbUIsZ0JBQWdCLENBQUMsUUFBUSxFQUFHQyxDQUFDLElBQUk7RUFDM0NBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDbEJsQixNQUFNLENBQUNFLE1BQU0sQ0FBQyxPQUFPLEVBQUVKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDb0IsS0FBSyxDQUFDO0VBQ3BFbkIsTUFBTSxDQUFDRSxNQUFNLENBQUMsT0FBTyxFQUFFSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQ29CLEtBQUssQ0FBQztFQUM5RG5CLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFVBQVUsRUFBRUosUUFBUSxDQUFDQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQ29CLEtBQUssQ0FBQztFQUM3RWhCLG1CQUFtQixDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDOzs7Ozs7OztVQ2hDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9tb2RhbC1yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdhcHBqcycpXG5cbmNvbnN0IGZvcm1fcmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlcicpO1xuXG5sZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5wYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAnZ2V0X3JlZ2lzdGVyX2Zvcm0nKVxuXG5hc3luYyBmdW5jdGlvbiBHZXRGb3JtUmVnaXN0ZXJVc2VyKCkge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCBNWVNDUklQVC5hamF4VXJsLHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGJvZHk6IHBhcmFtc1xuICAgIH0pO1xuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2coJ0Rvbm7DqWVzIHLDqWN1cMOpcsOpZXMgcGFyIGxlIEpTIDonLCBkYXRhLnN1Y2Nlc3MsIGRhdGEuZXJyb3JzKTtcblxuICAgIGVycm9yX3JlZ2lzdGVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgaWYoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gTVlTQ1JJUFQuaG9tZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yX3JlZ2lzdGVyLmlubmVySFRNTCA9IGRhdGEuc3VjY2VzcztcbiAgICB9XG5cbn1cblxuZm9ybV9yZWdpc3Rlci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSk9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ2xvZ2luJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lkZW50aWZpYW50JykudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ2VtYWlsJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJykudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ3Bhc3N3b3JkJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZ2lzdGVyX3Bhc3N3b3JkJykudmFsdWUpO1xuICAgIEdldEZvcm1SZWdpc3RlclVzZXIoKTtcbn0pO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlNTIzZDE5M2M2OTU2MTZlNzRhNFwiKSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZm9ybV9yZWdpc3RlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmFtcyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiR2V0Rm9ybVJlZ2lzdGVyVXNlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJNWVNDUklQVCIsImFqYXhVcmwiLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3JzIiwiZXJyb3JfcmVnaXN0ZXIiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9