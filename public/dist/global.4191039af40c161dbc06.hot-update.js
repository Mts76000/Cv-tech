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
  error_register.innerHTML = '';
  if (data.success) {
    // window.location.href = MYSCRIPT.home
  } else {
    // error_register.innerHTML = data.errors.login;
  }
}
GetFormRegisterUser();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7624efc52e361c9dc5e2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjQxOTEwMzlhZjQwYzE2MWRiYzA2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBRXBCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFFOUQsSUFBSUMsTUFBTSxHQUFHLElBQUlDLFFBQVEsQ0FBQyxDQUFDO0FBQzNCRCxNQUFNLENBQUNFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7QUFFNUMsZUFBZUMsbUJBQW1CQSxDQUFBLEVBQUc7RUFDakMsSUFBSUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRUMsUUFBUSxDQUFDQyxPQUFPLEVBQUM7SUFDekNDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLElBQUksRUFBRVQ7RUFDVixDQUFDLENBQUM7RUFDRixJQUFJVSxJQUFJLEdBQUcsTUFBTU4sUUFBUSxDQUFDTyxJQUFJLENBQUMsQ0FBQztFQUNoQ0MsY0FBYyxDQUFDQyxTQUFTLEdBQUcsRUFBRTtFQUM3QixJQUFHSCxJQUFJLENBQUNJLE9BQU8sRUFBRTtJQUNiO0VBQUEsQ0FDSCxNQUFNO0lBQ0g7RUFBQTtBQUdSO0FBRUFYLG1CQUFtQixDQUFDLENBQUM7Ozs7Ozs7O1VDdEJyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9tb2RhbC1yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdhcHBqcycpXG5cbmNvbnN0IGZvcm1fcmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlcicpO1xuXG5sZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5wYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAnZ2V0X3JlZ2lzdGVyX2Zvcm0nKVxuXG5hc3luYyBmdW5jdGlvbiBHZXRGb3JtUmVnaXN0ZXJVc2VyKCkge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCBNWVNDUklQVC5hamF4VXJsLHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGJvZHk6IHBhcmFtc1xuICAgIH0pO1xuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGVycm9yX3JlZ2lzdGVyLmlubmVySFRNTCA9ICcnO1xuICAgIGlmKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IE1ZU0NSSVBULmhvbWVcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlcnJvcl9yZWdpc3Rlci5pbm5lckhUTUwgPSBkYXRhLmVycm9ycy5sb2dpbjtcbiAgICB9XG5cbn1cblxuR2V0Rm9ybVJlZ2lzdGVyVXNlcigpO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3NjI0ZWZjNTJlMzYxYzlkYzVlMlwiKSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZm9ybV9yZWdpc3RlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmFtcyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiR2V0Rm9ybVJlZ2lzdGVyVXNlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJNWVNDUklQVCIsImFqYXhVcmwiLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJlcnJvcl9yZWdpc3RlciIsImlubmVySFRNTCIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9