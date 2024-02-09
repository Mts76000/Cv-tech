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
const error_register = document.querySelector('#error_register');
async function GetFormRegisterUser() {
  let response = await fetch(MYSCRIPT.ajaxUrl, {
    method: 'post',
    body: params
  });
  let data;
  try {
    data = await response.json();
  } catch (error) {
    console.error('Erreur lors de la conversion de la réponse JSON :', error);
  }
  if (data) {
    console.log('Données récupérées par le JS :', data.success, data.errors);
    error_register.innerHTML = '';
    if (data.success) {
      // window.location.href = MYSCRIPT.home
    } else {
      error_register.innerHTML = data.errors.login || 'Une erreur s\'est produite lors de l\'inscription.';
    }
  } else {
    console.error('Réponse du serveur vide ou invalide');
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
/******/ 	__webpack_require__.h = () => ("3f3f2646eff0028c2a17")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmQ2YjU5NGE1ZDc5ZDczMTJkMzYwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBRXBCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFFOUQsSUFBSUMsTUFBTSxHQUFHLElBQUlDLFFBQVEsQ0FBQyxDQUFDO0FBQzNCRCxNQUFNLENBQUNFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7QUFDNUMsTUFBTUMsY0FBYyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztBQUNoRSxlQUFlSyxtQkFBbUJBLENBQUEsRUFBRztFQUNqQyxJQUFJQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sRUFBRTtJQUN6Q0MsTUFBTSxFQUFFLE1BQU07SUFDZEMsSUFBSSxFQUFFVjtFQUNWLENBQUMsQ0FBQztFQUVGLElBQUlXLElBQUk7RUFDUixJQUFJO0lBQ0FBLElBQUksR0FBRyxNQUFNTixRQUFRLENBQUNPLElBQUksQ0FBQyxDQUFDO0VBQ2hDLENBQUMsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7SUFDWmxCLE9BQU8sQ0FBQ2tCLEtBQUssQ0FBQyxtREFBbUQsRUFBRUEsS0FBSyxDQUFDO0VBQzdFO0VBRUEsSUFBSUYsSUFBSSxFQUFFO0lBQ05oQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRWUsSUFBSSxDQUFDRyxPQUFPLEVBQUVILElBQUksQ0FBQ0ksTUFBTSxDQUFDO0lBRXhFWixjQUFjLENBQUNhLFNBQVMsR0FBRyxFQUFFO0lBRTdCLElBQUlMLElBQUksQ0FBQ0csT0FBTyxFQUFFO01BQ2Q7SUFBQSxDQUNILE1BQU07TUFDSFgsY0FBYyxDQUFDYSxTQUFTLEdBQUdMLElBQUksQ0FBQ0ksTUFBTSxDQUFDRSxLQUFLLElBQUksb0RBQW9EO0lBQ3hHO0VBQ0osQ0FBQyxNQUFNO0lBQ0h0QixPQUFPLENBQUNrQixLQUFLLENBQUMscUNBQXFDLENBQUM7RUFDeEQ7QUFDSjtBQUdBaEIsYUFBYSxDQUFDcUIsZ0JBQWdCLENBQUMsUUFBUSxFQUFHQyxDQUFDLElBQUk7RUFDM0NBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDbEJwQixNQUFNLENBQUNFLE1BQU0sQ0FBQyxPQUFPLEVBQUVKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDc0IsS0FBSyxDQUFDO0VBQ3BFckIsTUFBTSxDQUFDRSxNQUFNLENBQUMsT0FBTyxFQUFFSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQ3NCLEtBQUssQ0FBQztFQUM5RHJCLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFVBQVUsRUFBRUosUUFBUSxDQUFDQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQ3NCLEtBQUssQ0FBQztFQUM3RWpCLG1CQUFtQixDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDOzs7Ozs7OztVQzFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9tb2RhbC1yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdhcHBqcycpXG5cbmNvbnN0IGZvcm1fcmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlcicpO1xuXG5sZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5wYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAnZ2V0X3JlZ2lzdGVyX2Zvcm0nKVxuY29uc3QgZXJyb3JfcmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3JfcmVnaXN0ZXInKTtcbmFzeW5jIGZ1bmN0aW9uIEdldEZvcm1SZWdpc3RlclVzZXIoKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goTVlTQ1JJUFQuYWpheFVybCwge1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgYm9keTogcGFyYW1zXG4gICAgfSk7XG5cbiAgICBsZXQgZGF0YTtcbiAgICB0cnkge1xuICAgICAgICBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIGNvbnZlcnNpb24gZGUgbGEgcsOpcG9uc2UgSlNPTiA6JywgZXJyb3IpO1xuICAgIH1cblxuICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEb25uw6llcyByw6ljdXDDqXLDqWVzIHBhciBsZSBKUyA6JywgZGF0YS5zdWNjZXNzLCBkYXRhLmVycm9ycyk7XG5cbiAgICAgICAgZXJyb3JfcmVnaXN0ZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBNWVNDUklQVC5ob21lXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcl9yZWdpc3Rlci5pbm5lckhUTUwgPSBkYXRhLmVycm9ycy5sb2dpbiB8fCAnVW5lIGVycmV1ciBzXFwnZXN0IHByb2R1aXRlIGxvcnMgZGUgbFxcJ2luc2NyaXB0aW9uLic7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSw6lwb25zZSBkdSBzZXJ2ZXVyIHZpZGUgb3UgaW52YWxpZGUnKTtcbiAgICB9XG59XG5cblxuZm9ybV9yZWdpc3Rlci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSk9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ2xvZ2luJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lkZW50aWZpYW50JykudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ2VtYWlsJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJykudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ3Bhc3N3b3JkJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZ2lzdGVyX3Bhc3N3b3JkJykudmFsdWUpO1xuICAgIEdldEZvcm1SZWdpc3RlclVzZXIoKTtcbn0pO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzZjNmMjY0NmVmZjAwMjhjMmExN1wiKSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZm9ybV9yZWdpc3RlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmFtcyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZXJyb3JfcmVnaXN0ZXIiLCJHZXRGb3JtUmVnaXN0ZXJVc2VyIiwicmVzcG9uc2UiLCJmZXRjaCIsIk1ZU0NSSVBUIiwiYWpheFVybCIsIm1ldGhvZCIsImJvZHkiLCJkYXRhIiwianNvbiIsImVycm9yIiwic3VjY2VzcyIsImVycm9ycyIsImlubmVySFRNTCIsImxvZ2luIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==