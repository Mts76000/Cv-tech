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
if (form_register) {
  form_register.addEventListener('submit', async e => {
    e.preventDefault();
    const params = new FormData(form_register);
    params.append('action', 'get_register_form');
    await getRegisterData(params);
  });
}
async function getRegisterData(params) {
  let response = await fetch(MYSCRIPT.ajaxUrl, {
    method: 'post',
    body: params
  });
  let data = await response.json();
  console.log(data);
  if (data.success === true) {
    form_register.innerHTML = "<h1>Super !!</h1>";
  }
}
;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5c4294408147f22de328")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmRhZmU5M2FhOTQ4YTc0ZjA2N2ZkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBSUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBRTVCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOUQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQztBQUNwRSxNQUFNRSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBQzVELE1BQU1HLFFBQVEsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsMEJBQTBCLENBQUM7QUFDbkUsTUFBTUksV0FBVyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQztBQUUzRSxJQUFJRixhQUFhLEVBQUU7RUFDZkEsYUFBYSxDQUFDTyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsTUFBT0MsQ0FBQyxJQUFLO0lBQ2xEQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRWxCLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxRQUFRLENBQUNYLGFBQWEsQ0FBQztJQUMxQ1UsTUFBTSxDQUFDRSxNQUFNLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDO0lBRTVDLE1BQU1DLGVBQWUsQ0FBQ0gsTUFBTSxDQUFDO0VBQ2pDLENBQUMsQ0FBQztBQUNOO0FBRUEsZUFBZUcsZUFBZUEsQ0FBQ0gsTUFBTSxFQUFFO0VBQ25DLElBQUlJLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxFQUFFO0lBQ3pDQyxNQUFNLEVBQUUsTUFBTTtJQUNkQyxJQUFJLEVBQUVUO0VBQ1YsQ0FBQyxDQUFDO0VBQ0YsSUFBSVUsSUFBSSxHQUFHLE1BQU1OLFFBQVEsQ0FBQ08sSUFBSSxDQUFDLENBQUM7RUFDaEN2QixPQUFPLENBQUNDLEdBQUcsQ0FBQ3FCLElBQUksQ0FBQztFQUVqQixJQUFJQSxJQUFJLENBQUNFLE9BQU8sS0FBSyxJQUFJLEVBQUU7SUFDdkJ0QixhQUFhLENBQUN1QixTQUFTLEdBQUcsbUJBQW1CO0VBQ2pEO0FBQ0o7QUFBQzs7Ozs7Ozs7VUM5QkwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvbW9kYWwtcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VibGlwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIgICAgY29uc29sZS5sb2coJ29rIGNvbnRhY3QhISEnKTtcblxuICAgIGNvbnN0IGZvcm1fcmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlcicpO1xuICAgIGNvbnN0IHBzZXVkbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyICNpZGVudGlmaWFudCcpO1xuICAgIGNvbnN0IG1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlciAjZW1haWwnKTtcbiAgICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyICNwYXNzd29yZCcpO1xuICAgIGNvbnN0IHBzZXVkb0Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXIjZXJyb3JfcmVnaXN0ZXInKTtcblxuICAgIGlmIChmb3JtX3JlZ2lzdGVyKSB7XG4gICAgICAgIGZvcm1fcmVnaXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1fcmVnaXN0ZXIpO1xuICAgICAgICAgICAgcGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgJ2dldF9yZWdpc3Rlcl9mb3JtJyk7XG5cbiAgICAgICAgICAgIGF3YWl0IGdldFJlZ2lzdGVyRGF0YShwYXJhbXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRSZWdpc3RlckRhdGEocGFyYW1zKSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgYm9keTogcGFyYW1zLFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGZvcm1fcmVnaXN0ZXIuaW5uZXJIVE1MID0gXCI8aDE+U3VwZXIgISE8L2gxPlwiO1xuICAgICAgICB9XG4gICAgfTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVjNDI5NDQwODE0N2YyMmRlMzI4XCIpIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJmb3JtX3JlZ2lzdGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHNldWRvIiwibWFpbCIsInBhc3N3b3JkIiwicHNldWRvRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFyYW1zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJnZXRSZWdpc3RlckRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiTVlTQ1JJUFQiLCJhamF4VXJsIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwic3VjY2VzcyIsImlubmVySFRNTCJdLCJzb3VyY2VSb290IjoiIn0=