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
      MicroModal.close('modal-register');
      MicroModal.show('modal-login');
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
/******/ 	__webpack_require__.h = () => ("d18bd04f6ca8fabf60c8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmYyZTA1OTIxN2EyMzZkNzdkODI5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBRXBCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFFOUQsSUFBSUMsTUFBTSxHQUFHLElBQUlDLFFBQVEsQ0FBQyxDQUFDO0FBQzNCRCxNQUFNLENBQUNFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7QUFDNUMsTUFBTUMsY0FBYyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztBQUNoRSxlQUFlSyxtQkFBbUJBLENBQUEsRUFBRztFQUNqQyxJQUFJQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sRUFBRTtJQUN6Q0MsTUFBTSxFQUFFLE1BQU07SUFDZEMsSUFBSSxFQUFFVjtFQUNWLENBQUMsQ0FBQztFQUVGLElBQUlXLElBQUk7RUFDUixJQUFJO0lBQ0FBLElBQUksR0FBRyxNQUFNTixRQUFRLENBQUNPLElBQUksQ0FBQyxDQUFDO0VBQ2hDLENBQUMsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7SUFDWmxCLE9BQU8sQ0FBQ2tCLEtBQUssQ0FBQyxtREFBbUQsRUFBRUEsS0FBSyxDQUFDO0VBQzdFO0VBRUEsSUFBSUYsSUFBSSxFQUFFO0lBQ05oQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRWUsSUFBSSxDQUFDRyxPQUFPLEVBQUVILElBQUksQ0FBQ0ksTUFBTSxDQUFDO0lBRXhFWixjQUFjLENBQUNhLFNBQVMsR0FBRyxFQUFFO0lBRTdCLElBQUlMLElBQUksQ0FBQ0csT0FBTyxFQUFFO01BR2RHLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDLGdCQUFnQixDQUFDO01BQ2xDRCxVQUFVLENBQUNFLElBQUksQ0FBQyxhQUFhLENBQUM7SUFJbEMsQ0FBQyxNQUFNO01BQ0hoQixjQUFjLENBQUNhLFNBQVMsR0FBR0wsSUFBSSxDQUFDSSxNQUFNLENBQUNLLEtBQUssSUFBSVQsSUFBSSxDQUFDSSxNQUFNLENBQUNNLEtBQUs7SUFDckU7RUFDSixDQUFDLE1BQU07SUFDSDFCLE9BQU8sQ0FBQ2tCLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQztFQUN4RDtBQUNKO0FBR0FoQixhQUFhLENBQUN5QixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUdDLENBQUMsSUFBSTtFQUMzQ0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUNsQnhCLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLE9BQU8sRUFBRUosUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMwQixLQUFLLENBQUM7RUFDcEV6QixNQUFNLENBQUNFLE1BQU0sQ0FBQyxPQUFPLEVBQUVKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDMEIsS0FBSyxDQUFDO0VBQzlEekIsTUFBTSxDQUFDRSxNQUFNLENBQUMsVUFBVSxFQUFFSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDMEIsS0FBSyxDQUFDO0VBQzdFckIsbUJBQW1CLENBQUMsQ0FBQztBQUN6QixDQUFDLENBQUM7Ozs7Ozs7O1VDaERGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2Fzc2V0L2pzL21vZGFsLXJlZ2lzdGVyLmpzIiwid2VicGFjazovL3dlYmxpcGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ2FwcGpzJylcblxuY29uc3QgZm9ybV9yZWdpc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyJyk7XG5cbmxldCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcbnBhcmFtcy5hcHBlbmQoJ2FjdGlvbicsICdnZXRfcmVnaXN0ZXJfZm9ybScpXG5jb25zdCBlcnJvcl9yZWdpc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcl9yZWdpc3RlcicpO1xuYXN5bmMgZnVuY3Rpb24gR2V0Rm9ybVJlZ2lzdGVyVXNlcigpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChNWVNDUklQVC5hamF4VXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBib2R5OiBwYXJhbXNcbiAgICB9KTtcblxuICAgIGxldCBkYXRhO1xuICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgY29udmVyc2lvbiBkZSBsYSByw6lwb25zZSBKU09OIDonLCBlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Rvbm7DqWVzIHLDqWN1cMOpcsOpZXMgcGFyIGxlIEpTIDonLCBkYXRhLnN1Y2Nlc3MsIGRhdGEuZXJyb3JzKTtcblxuICAgICAgICBlcnJvcl9yZWdpc3Rlci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG5cblxuICAgICAgICAgICAgTWljcm9Nb2RhbC5jbG9zZSgnbW9kYWwtcmVnaXN0ZXInKTtcbiAgICAgICAgICAgIE1pY3JvTW9kYWwuc2hvdygnbW9kYWwtbG9naW4nKTtcblxuXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yX3JlZ2lzdGVyLmlubmVySFRNTCA9IGRhdGEuZXJyb3JzLmxvZ2luIHx8IGRhdGEuZXJyb3JzLmVtYWlsO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUsOpcG9uc2UgZHUgc2VydmV1ciB2aWRlIG91IGludmFsaWRlJyk7XG4gICAgfVxufVxuXG5cbmZvcm1fcmVnaXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdsb2dpbicsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpZGVudGlmaWFudCcpLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdlbWFpbCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCcpLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdwYXNzd29yZCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWdpc3Rlcl9wYXNzd29yZCcpLnZhbHVlKTtcbiAgICBHZXRGb3JtUmVnaXN0ZXJVc2VyKCk7XG59KTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDE4YmQwNGY2Y2E4ZmFiZjYwYzhcIikiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImZvcm1fcmVnaXN0ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJhbXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsImVycm9yX3JlZ2lzdGVyIiwiR2V0Rm9ybVJlZ2lzdGVyVXNlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJNWVNDUklQVCIsImFqYXhVcmwiLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJlcnJvciIsInN1Y2Nlc3MiLCJlcnJvcnMiLCJpbm5lckhUTUwiLCJNaWNyb01vZGFsIiwiY2xvc2UiLCJzaG93IiwibG9naW4iLCJlbWFpbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=