self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/modal-register.js":
/*!****************************************!*\
  !*** ./src/asset/js/modal-register.js ***!
  \****************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function (e) {
  e.preventDefault();
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
      console.log('ok');
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
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6e0e0113d3b48f064b3c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmQ1Y2I3OWE5NDMxODk0OTNkMjE0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVQyxDQUFDLEVBQUU7RUFDdkRBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztFQUU1QixNQUFNQyxhQUFhLEdBQUdOLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLGdCQUFnQixDQUFDO0VBQzlELE1BQU1DLE1BQU0sR0FBR1IsUUFBUSxDQUFDTyxhQUFhLENBQUMsNkJBQTZCLENBQUM7RUFDcEUsTUFBTUUsSUFBSSxHQUFHVCxRQUFRLENBQUNPLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztFQUM1RCxNQUFNRyxRQUFRLEdBQUdWLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLDBCQUEwQixDQUFDO0VBQ25FLE1BQU1JLFdBQVcsR0FBR1gsUUFBUSxDQUFDTyxhQUFhLENBQUMsK0JBQStCLENBQUM7RUFFM0UsSUFBSUQsYUFBYSxFQUFFO0lBQ2ZBLGFBQWEsQ0FBQ0wsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE1BQU9DLENBQUMsSUFBSztNQUNsREEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztNQUVsQixNQUFNUyxNQUFNLEdBQUcsSUFBSUMsUUFBUSxDQUFDUCxhQUFhLENBQUM7TUFDMUNNLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQztNQUU1Q1YsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDO01BQ2pCLE1BQU1VLGVBQWUsQ0FBQ0gsTUFBTSxDQUFDO0lBQ2pDLENBQUMsQ0FBQztFQUNOO0VBRUEsZUFBZUcsZUFBZUEsQ0FBQ0gsTUFBTSxFQUFFO0lBQ25DLElBQUlJLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxFQUFFO01BQ3pDQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxJQUFJLEVBQUVUO0lBQ1YsQ0FBQyxDQUFDO0lBQ0YsSUFBSVUsSUFBSSxHQUFHLE1BQU1OLFFBQVEsQ0FBQ08sSUFBSSxDQUFDLENBQUM7SUFDaENuQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQztJQUVqQixJQUFJQSxJQUFJLENBQUNFLE9BQU8sS0FBSyxJQUFJLEVBQUU7TUFDdkJsQixhQUFhLENBQUNtQixTQUFTLEdBQUcsbUJBQW1CO0lBQ2pEO0VBQ0o7QUFDSixDQUFDLENBQUM7Ozs7Ozs7O1VDbENGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2Fzc2V0L2pzL21vZGFsLXJlZ2lzdGVyLmpzIiwid2VicGFjazovL3dlYmxpcGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKCdvayBjb250YWN0ISEhJyk7XG5cbiAgICBjb25zdCBmb3JtX3JlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXInKTtcbiAgICBjb25zdCBwc2V1ZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlciAjaWRlbnRpZmlhbnQnKTtcbiAgICBjb25zdCBtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXIgI2VtYWlsJyk7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlciAjcGFzc3dvcmQnKTtcbiAgICBjb25zdCBwc2V1ZG9FcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyI2Vycm9yX3JlZ2lzdGVyJyk7XG5cbiAgICBpZiAoZm9ybV9yZWdpc3Rlcikge1xuICAgICAgICBmb3JtX3JlZ2lzdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtX3JlZ2lzdGVyKTtcbiAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoJ2FjdGlvbicsICdnZXRfcmVnaXN0ZXJfZm9ybScpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb2snKTtcbiAgICAgICAgICAgIGF3YWl0IGdldFJlZ2lzdGVyRGF0YShwYXJhbXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRSZWdpc3RlckRhdGEocGFyYW1zKSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgYm9keTogcGFyYW1zLFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGZvcm1fcmVnaXN0ZXIuaW5uZXJIVE1MID0gXCI8aDE+U3VwZXIgISE8L2gxPlwiO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ZTBlMDExM2QzYjQ4ZjA2NGIzY1wiKSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZm9ybV9yZWdpc3RlciIsInF1ZXJ5U2VsZWN0b3IiLCJwc2V1ZG8iLCJtYWlsIiwicGFzc3dvcmQiLCJwc2V1ZG9FcnJvciIsInBhcmFtcyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZ2V0UmVnaXN0ZXJEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIk1ZU0NSSVBUIiwiYWpheFVybCIsIm1ldGhvZCIsImJvZHkiLCJkYXRhIiwianNvbiIsInN1Y2Nlc3MiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9