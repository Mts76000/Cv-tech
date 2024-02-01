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
      const opener_modal_register = document.querySelector('#js_modal_register');
      opener_modal_register.addEventListener('click', function (evt) {
        evt.preventDefault();
        MicroModal.close('modal-register');
        console.log('test');
      });
    } else {
      error_register.innerHTML = data.errors.login || data.errors.email;
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
/******/ 	__webpack_require__.h = () => ("ef3983148192b56133a1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjYzNDFiZjJhOTllOGUwN2U1MGE4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBRXBCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFFOUQsSUFBSUMsTUFBTSxHQUFHLElBQUlDLFFBQVEsQ0FBQyxDQUFDO0FBQzNCRCxNQUFNLENBQUNFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7QUFDNUMsTUFBTUMsY0FBYyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztBQUNoRSxlQUFlSyxtQkFBbUJBLENBQUEsRUFBRztFQUNqQyxJQUFJQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sRUFBRTtJQUN6Q0MsTUFBTSxFQUFFLE1BQU07SUFDZEMsSUFBSSxFQUFFVjtFQUNWLENBQUMsQ0FBQztFQUVGLElBQUlXLElBQUk7RUFDUixJQUFJO0lBQ0FBLElBQUksR0FBRyxNQUFNTixRQUFRLENBQUNPLElBQUksQ0FBQyxDQUFDO0VBQ2hDLENBQUMsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7SUFDWmxCLE9BQU8sQ0FBQ2tCLEtBQUssQ0FBQyxtREFBbUQsRUFBRUEsS0FBSyxDQUFDO0VBQzdFO0VBRUEsSUFBSUYsSUFBSSxFQUFFO0lBQ05oQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRWUsSUFBSSxDQUFDRyxPQUFPLEVBQUVILElBQUksQ0FBQ0ksTUFBTSxDQUFDO0lBRXhFWixjQUFjLENBQUNhLFNBQVMsR0FBRyxFQUFFO0lBRTdCLElBQUlMLElBQUksQ0FBQ0csT0FBTyxFQUFFO01BQ2QsTUFBTUcscUJBQXFCLEdBQUduQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztNQUMxRWtCLHFCQUFxQixDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBU0MsR0FBRyxFQUFFO1FBQzFEQSxHQUFHLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BCQyxVQUFVLENBQUNDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztRQUNsQzNCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUV2QixDQUFDLENBQUM7SUFFTixDQUFDLE1BQU07TUFDSE8sY0FBYyxDQUFDYSxTQUFTLEdBQUdMLElBQUksQ0FBQ0ksTUFBTSxDQUFDUSxLQUFLLElBQUlaLElBQUksQ0FBQ0ksTUFBTSxDQUFDUyxLQUFLO0lBQ3JFO0VBQ0osQ0FBQyxNQUFNO0lBQ0g3QixPQUFPLENBQUNrQixLQUFLLENBQUMscUNBQXFDLENBQUM7RUFDeEQ7QUFDSjtBQUdBaEIsYUFBYSxDQUFDcUIsZ0JBQWdCLENBQUMsUUFBUSxFQUFHTyxDQUFDLElBQUk7RUFDM0NBLENBQUMsQ0FBQ0wsY0FBYyxDQUFDLENBQUM7RUFDbEJwQixNQUFNLENBQUNFLE1BQU0sQ0FBQyxPQUFPLEVBQUVKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDMkIsS0FBSyxDQUFDO0VBQ3BFMUIsTUFBTSxDQUFDRSxNQUFNLENBQUMsT0FBTyxFQUFFSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzJCLEtBQUssQ0FBQztFQUM5RDFCLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFVBQVUsRUFBRUosUUFBUSxDQUFDQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQzJCLEtBQUssQ0FBQztFQUM3RXRCLG1CQUFtQixDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDOzs7Ozs7OztVQ2pERiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9tb2RhbC1yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdhcHBqcycpXG5cbmNvbnN0IGZvcm1fcmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlcicpO1xuXG5sZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5wYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAnZ2V0X3JlZ2lzdGVyX2Zvcm0nKVxuY29uc3QgZXJyb3JfcmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3JfcmVnaXN0ZXInKTtcbmFzeW5jIGZ1bmN0aW9uIEdldEZvcm1SZWdpc3RlclVzZXIoKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goTVlTQ1JJUFQuYWpheFVybCwge1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgYm9keTogcGFyYW1zXG4gICAgfSk7XG5cbiAgICBsZXQgZGF0YTtcbiAgICB0cnkge1xuICAgICAgICBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIGNvbnZlcnNpb24gZGUgbGEgcsOpcG9uc2UgSlNPTiA6JywgZXJyb3IpO1xuICAgIH1cblxuICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEb25uw6llcyByw6ljdXDDqXLDqWVzIHBhciBsZSBKUyA6JywgZGF0YS5zdWNjZXNzLCBkYXRhLmVycm9ycyk7XG5cbiAgICAgICAgZXJyb3JfcmVnaXN0ZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgY29uc3Qgb3BlbmVyX21vZGFsX3JlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzX21vZGFsX3JlZ2lzdGVyJyk7XG4gICAgICAgICAgICBvcGVuZXJfbW9kYWxfcmVnaXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBNaWNyb01vZGFsLmNsb3NlKCdtb2RhbC1yZWdpc3RlcicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0JylcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yX3JlZ2lzdGVyLmlubmVySFRNTCA9IGRhdGEuZXJyb3JzLmxvZ2luIHx8IGRhdGEuZXJyb3JzLmVtYWlsO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUsOpcG9uc2UgZHUgc2VydmV1ciB2aWRlIG91IGludmFsaWRlJyk7XG4gICAgfVxufVxuXG5cbmZvcm1fcmVnaXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdsb2dpbicsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpZGVudGlmaWFudCcpLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdlbWFpbCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCcpLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdwYXNzd29yZCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWdpc3Rlcl9wYXNzd29yZCcpLnZhbHVlKTtcbiAgICBHZXRGb3JtUmVnaXN0ZXJVc2VyKCk7XG59KTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWYzOTgzMTQ4MTkyYjU2MTMzYTFcIikiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImZvcm1fcmVnaXN0ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJhbXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsImVycm9yX3JlZ2lzdGVyIiwiR2V0Rm9ybVJlZ2lzdGVyVXNlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJNWVNDUklQVCIsImFqYXhVcmwiLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJlcnJvciIsInN1Y2Nlc3MiLCJlcnJvcnMiLCJpbm5lckhUTUwiLCJvcGVuZXJfbW9kYWxfcmVnaXN0ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJNaWNyb01vZGFsIiwiY2xvc2UiLCJsb2dpbiIsImVtYWlsIiwiZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==